import { ObjectId } from "mongodb";
import { accountsCollection, stacksCollection } from "./services/mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import path from "path";
import fs from "fs/promises";
import { uid } from "uid";
import sharp from "sharp";
import { storageBucket } from "./services/google-storage";

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
    // make sure not already stored in google bucket
    let randomFileName = uid(25);
    while (true) {
      if (
        !(
          await storageBucket
            .file(`imgs/${randomFileName}.${imgExtension}`)
            .exists()
        )[0]
      ) {
        break;
      }
      randomFileName = uid(25);
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

    // upload img file to google cloud storage
    await storageBucket.upload(
      path.join(
        process.cwd(),

        "tmp",
        `${randomFileName}.${imgExtension}`
      ),
      { destination: `uploads/${randomFileName}.${imgExtension}` }
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
  userStackId: string
): Promise<RepoSelectList[] | null | "must_connect_github_account" | "error"> {
  // returns all the public repo's a user has
  // filter out any repos that are already attached to another stack
  // returns data to be rendered inside the select tag on the create stack page (option tags)

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
        .find({ aid: userStackId, github_repo_id: { $ne: null } })
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
    if (!a) {
      return false;
    }

    return a;
  } catch (e) {
    console.log(e);
    return false;
  }
}
