import { ObjectId } from "mongodb";
import { Tech, accountsCollection, stacksCollection } from "./services/mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import path from "path";
import fs from "fs/promises";
import { uid } from "uid";
import sharp from "sharp";
import { TechOffered } from "./techOffered";
import { s3Client } from "./services/aws";
import { HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { Stack } from "./models/stacks";

export interface RepoSelectList {
  name: string;
  id: number;
}

export interface RepoCommitLogs {
  message: string;
  url: string;
  sha: string;
  date_commited: string;
}

export interface EditStackTechCheckboxs {
  // languages must always have at least 1 selected (cant be null)
  languages: {
    selected: string[];
    notSelected: string[];
  };
  databases: {
    selected: string[] | null;
    notSelected: string[];
  };
  apis: {
    selected: string[] | null;
    notSelected: string[];
  };
  clouds: {
    selected: string[] | null;
    notSelected: string[];
  };
  frameworks: {
    selected: string[] | null;
    notSelected: string[];
  };
}
export interface UserSelectedTech {
  languages: string[];
  databases: string[] | null;
  apis: string[] | null;
  clouds: string[] | null;
  frameworks: string[] | null;
}

export interface TechList {
  _id: "language" | "database" | "api" | "cloud" | "framework";
  tech: Tech[];
  usedInStackCount: number; // used to calculate how many technologies we offer
}

export async function AuthenticateGithubAccount(
  code: string,
  accountId: string
): Promise<"github_account_in_use" | null | true> {
  // connects users github profile with their stack account

  try {
    // exchange code for access token
    const token = await fetch(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (token.status === 200) {
      const accessToken = await token.json();

      // get the id of their github account
      // and store in profile stack...
      // this will make sure no other
      // stackapp account will be able to connect
      // to this github account

      const githubAccount = await fetch("https://api.github.com/user", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + accessToken.access_token,
        },
      });

      if (githubAccount.status !== 200) {
        console.log("error while fetching authenticated users github account");
        throw new Error();
      }

      const githubAccountData = await githubAccount.json();

      // if github account id is already associated with another account
      const g = await accountsCollection.findOne({
        github_account_id: githubAccountData.id,
      });
      if (g) {
        console.log(
          "cannot add github account, already in use for another stackapp account"
        );

        return "github_account_in_use";
      } else {
        // save this access token to their account
        // this token will be used to fetch their github accounts data

        await accountsCollection.updateOne(
          { _id: new ObjectId(accountId) },
          {
            $set: {
              github_access_token: accessToken.access_token,
              github_account_id: githubAccountData.id,
            },
          }
        );
        return true;
      }
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log(e);

    return null;
  }
}

export async function UploadImage(img: Blob | null) {
  // this function will write user image upload to temp folder on server
  // image will be compressed, then the image will be uploaded to google storage

  if (img === null) {
    console.log("error, image blog null");

    return null;
  }

  const imgExtension = img!.type.split("/")[1];

  if (
    imgExtension !== "png" &&
    imgExtension !== "jpeg" &&
    imgExtension !== "webp" &&
    imgExtension !== "avif" &&
    imgExtension !== "tiff"
  ) {
    console.log("error, imge format " + imgExtension + " not supported");

    return null;
  }

  try {
    const buffer = Buffer.from(await img!.arrayBuffer());

    // generate random name for image
    // make sure not already stored in aws bucket
    let randomFileName = uid(25);
    while (true) {
      try {
        await s3Client.send(
          new HeadObjectCommand({
            Bucket: "stackapp-bucket",
            Key: `uploads/${randomFileName}.${imgExtension}`,
          })
        );
        randomFileName = uid(25);
      } catch (err) {
        // if catch is thrown here, means file does not exist (what we want)
        break;
      }
    }

    // compress the image
    // store in temp folder
    switch (imgExtension) {
      case "png":
        await sharp(buffer)
          .png({ quality: 25 })
          .toFile(
            path.join(process.cwd(), "tmp", `${randomFileName}.${imgExtension}`)
          );
        break;
      case "jpeg":
        await sharp(buffer)
          .jpeg({ quality: 25 })
          .toFile(
            path.join(process.cwd(), "tmp", `${randomFileName}.${imgExtension}`)
          );
        break;

      case "webp":
        await sharp(buffer)
          .webp({ quality: 25 })
          .toFile(
            path.join(
              process.cwd(),

              "tmp",
              `${randomFileName}.${imgExtension}`
            )
          );
        break;

      case "avif":
        await sharp(buffer)
          .avif({ quality: 25 })
          .toFile(
            path.join(
              process.cwd(),

              "tmp",
              `${randomFileName}.${imgExtension}`
            )
          );
        break;

      case "tiff":
        await sharp(buffer)
          .tiff({ quality: 25 })
          .toFile(
            path.join(
              process.cwd(),

              "tmp",
              `${randomFileName}.${imgExtension}`
            )
          );
        break;
    }

    // upload img file to aws s3
    await s3Client.send(
      new PutObjectCommand({
        Bucket: "stackapp-bucket",
        Key: `uploads/${randomFileName}.${imgExtension}`,
        Body: await fs.readFile(
          path.join(process.cwd(), "tmp", `${randomFileName}.${imgExtension}`)
        ),
        ContentType: `image/${imgExtension}`,
      })
    );

    // delete file from tmp folder
    await fs.unlink(
      path.join(process.cwd(), "tmp", `${randomFileName}.${imgExtension}`)
    );

    // return the file name
    return `${randomFileName}.${imgExtension}`;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function GetGitHubRepoSelectData(
  githubAccessToken: string | null,
  userAccountID: string
): Promise<RepoSelectList[] | null | "must_connect_github_account" | "error"> {
  // returns all repos that belong to current user and are not already attached to any other stacks
  // repos must be public

  if (githubAccessToken === null) {
    return "must_connect_github_account";
  }

  try {
    // get the authenticated github user's profile
    const githubData = await fetch("https://api.github.com/user", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${githubAccessToken}`,
      },
    });

    if (githubData.status !== 200) {
      console.log("error while getting authenticated users profile");

      return null;
    }

    const userData = await githubData.json();

    // use the 'repos_url' returned to grab all users repos
    const userRepos = await fetch(userData.repos_url);
    if (userRepos.status !== 200) {
      console.log("error while getting authenticated users repos");

      return null;
    }

    const repoData = await userRepos.json();

    if (repoData.length === 0) {
      console.log("no repos for current user");

      return null;
    }

    // loop through each repo and return only pubilc repos
    const publicRepos = repoData.filter((x: any) => {
      return !x.private;
    });

    if (publicRepos.length === 0) {
      console.log("no repos for current user");

      return null;
    }

    // find all stacks that have a github_repo_id associated with it
    // return only the github_repo_id
    const githubReposIDsInUse = (
      await stacksCollection
        .find({ aid: userAccountID, github_repo_id: { $ne: null } })
        .toArray()
    ).map((x) => {
      return x.github_repo_id;
    });

    // get all the repos not in use and return only the name of repo and id
    const availableRepos: RepoSelectList[] = publicRepos
      .filter((x: any) => {
        if (!githubReposIDsInUse.includes(x.id)) {
          return x;
        }
      })
      .map((y: any) => {
        return {
          name: y.name,
          id: y.id,
        };
      });

    if (availableRepos.length === 0) {
      console.log("no repos for current user");

      return null;
    }

    return availableRepos;
  } catch (err) {
    console.log(err);

    return "error";
  }
}

export async function GetRepoCommitLogs(
  repoId: number,
  githubAccessToken: string
): Promise<RepoCommitLogs[] | "too_many_requests" | "error"> {
  try {
    const repoLogs = await fetch(
      `https://api.github.com/repositories/${repoId}/commits`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${githubAccessToken}`,
        },
      }
    );
    if (repoLogs.status !== 200 && repoLogs.status !== 403) {
      throw new Error();
    }
    if (repoLogs.status === 403) {
      console.log("too many requests to github api");
      return "too_many_requests";
    }

    const repoLogsData: any[] = await repoLogs.json();

    const logs = repoLogsData.map((x: any) => {
      const commit: RepoCommitLogs = {
        message: x.commit.message,
        url: x.html_url,
        sha: x.sha,
        date_commited: new Date(x.commit.committer.date).toDateString(),
      };
      return commit;
    });

    return logs.length > 5 ? logs.slice(0, 5) : logs;
  } catch (e) {
    console.log(e);
    console.log("There was an error while getting repo commit history");
    return "error";
  }
}

export async function IsValidAccountCookie(
  accountCookie: RequestCookie | undefined
) {
  // will determine if cookie sent in request is
  // 1. valid mongoDB objectid
  // 2. associated with document in accounts collection

  try {
    if (accountCookie === undefined) {
      return false;
    }

    if (!ObjectId.isValid(accountCookie.value)) {
      return false;
    }

    const a = await accountsCollection.findOne({
      _id: new ObjectId(accountCookie.value),
    });
    if (a === null) {
      return false;
    }

    return a;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export function GenerateEditStackTechCheckboxs(
  stackTech: UserSelectedTech
): EditStackTechCheckboxs {
  // gets all the tech checkboxs to render on edit stack page
  // includes all tech selected, and tech not selected
  // will have tech already selected have checked=true on render

  const allLanguages = [...TechOffered.languages];
  const allDatabases = [...TechOffered.databases];
  const allApis = [...TechOffered.apis];
  const allClouds = [...TechOffered.clouds];
  const allFrameworks = [...TechOffered.frameworks];

  // languages
  for (let i = 0; i < stackTech.languages.length; i++) {
    allLanguages.splice(allLanguages.indexOf(stackTech.languages[i]), 1);
  }

  // databases
  if (stackTech.databases !== null) {
    for (let i = 0; i < stackTech.databases.length; i++) {
      allDatabases.splice(allDatabases.indexOf(stackTech.databases[i]), 1);
    }
  }

  // apis
  if (stackTech.apis !== null) {
    for (let i = 0; i < stackTech.apis.length; i++) {
      allApis.splice(allApis.indexOf(stackTech.apis[i]), 1);
    }
  }

  // clouds
  if (stackTech.clouds !== null) {
    for (let i = 0; i < stackTech.clouds.length; i++) {
      allClouds.splice(allClouds.indexOf(stackTech.clouds[i]), 1);
    }
  }

  // frameworks
  if (stackTech.frameworks !== null) {
    for (let i = 0; i < stackTech.frameworks.length; i++) {
      allFrameworks.splice(allFrameworks.indexOf(stackTech.frameworks[i]), 1);
    }
  }

  return {
    languages: {
      selected: stackTech.languages,
      notSelected: allLanguages,
    },
    databases: {
      selected: stackTech.databases,
      notSelected: allDatabases,
    },
    apis: {
      selected: stackTech.apis,
      notSelected: allApis,
    },
    clouds: {
      selected: stackTech.clouds,
      notSelected: allClouds,
    },
    frameworks: {
      selected: stackTech.frameworks,
      notSelected: allFrameworks,
    },
  };
}

export function SortTechOfferedArray(query: TechList[], allStacks: Stack[]) {
  // returns stats for each tech offered on site
  // such as name, descriptions, imgs, how many stacks use, etc...

  // order the categories like shown below
  // the aggregation query above could return tech types in any random order, we want specific order
  const sortedTechList: TechList[] = [];
  const techTypes = ["language", "database", "api", "cloud", "framework"]; // LIST HAS TO BE IN THIS ORDER, LANGUAGE MOST IMPORTANT FIRST
  for (let i = 0; i < techTypes.length; i++) {
    for (let j = 0; j < query.length; j++) {
      if (query[j]._id === techTypes[i]) {
        sortedTechList.push(query[j]);

        break;
      }
    }
  }

  for (let i = 0; i < sortedTechList.length; i++) {
    for (let j = 0; j < sortedTechList[i].tech.length; j++) {
      let n = 0;

      for (let t = 0; t < allStacks.length; t++) {
        switch (sortedTechList[i].tech[j].type) {
          case "language":
            for (let k = 0; k < allStacks[t].languages_used.length; k++) {
              if (
                allStacks[t].languages_used[k] ===
                sortedTechList[i].tech[j].name
              ) {
                n++;
              }
            }
            sortedTechList[i].tech[j].numOfOccurences = n;
            break;

          case "database":
            if (allStacks[t].databases_used !== null) {
              for (let k = 0; k < allStacks[t].databases_used!.length; k++) {
                if (
                  allStacks[t].databases_used![k] ===
                  sortedTechList[i].tech[j].name
                ) {
                  n++;
                  break;
                }
              }
              sortedTechList[i].tech[j].numOfOccurences = n;
            } else {
              sortedTechList[i].tech[j].numOfOccurences = n;
            }
            break;

          case "api":
            if (allStacks[t].apis_used !== null) {
              for (let k = 0; k < allStacks[t].apis_used!.length; k++) {
                if (
                  allStacks[t].apis_used![k] === sortedTechList[i].tech[j].name
                ) {
                  n++;
                  break;
                }
              }
              sortedTechList[i].tech[j].numOfOccurences = n;
            } else {
              sortedTechList[i].tech[j].numOfOccurences = n;
            }
            break;

          case "cloud":
            if (allStacks[t].clouds_used !== null) {
              for (let k = 0; k < allStacks[t].clouds_used!.length; k++) {
                if (
                  allStacks[t].clouds_used![k] ===
                  sortedTechList[i].tech[j].name
                ) {
                  n++;
                  break;
                }
              }
              sortedTechList[i].tech[j].numOfOccurences = n;
            } else {
              sortedTechList[i].tech[j].numOfOccurences = n;
            }
            break;

          case "framework":
            if (allStacks[t].frameworks_used !== null) {
              for (let k = 0; k < allStacks[t].frameworks_used!.length; k++) {
                if (
                  allStacks[t].frameworks_used![k] ===
                  sortedTechList[i].tech[j].name
                ) {
                  n++;
                  break;
                }
              }
              sortedTechList[i].tech[j].numOfOccurences = n;
            } else {
              sortedTechList[i].tech[j].numOfOccurences = n;
            }
            break;

          default:
            break;
        }
      }
    }
  }

  return sortedTechList;
}
