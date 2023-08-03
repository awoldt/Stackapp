import fs from "fs/promises";
import path from "path";
import {
  _nameWithLogo,
  _techStackValues,
  _userProfile,
  _repoSelectList,
  _repoCommitLogs,
  _stack,
  _creator,
  _PAGEDATA_stackpage,
  _editStackData,
} from "./types";
import { uid } from "uid";

import {
  DeleteObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import formidable from "formidable";

import { techOffered } from "./techstack";
import { db } from "../firebase";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
const emailClient = new SESClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function GetUserProfile(
  uid: string | undefined
): Promise<_userProfile | null> {
  //returns the current signed in users info
  //profile data is pulled from custom profiles collection

  if (uid === undefined) {
    return null;
  }

  try {
    const user = await (await db.collection("profiles").doc(uid).get()).data();

    const x: _userProfile = {
      uid: user!.uid,
      bio: user!.bio,
      first_name: user!.first_name,
      last_name: user!.last_name,
      password: user!.password,
      email: user!.email!,
      username: user!.username!,
      github_access_token: user!.github_access_token,
      github_account_id: user!.github_account_id,
      created_on: Date.now(),
      profile_pic: user!.profile_pic,
      profile_pic_filename: user!.profile_pic_filename,
    };

    return x;
  } catch (e) {
    console.log(e);
    console.log("There was an error while getting user profile");
    return null;
  }
}

//meant for profiles route, not account route
export async function GetPublicProfile(username: string) {
  try {
    const user = await await db
      .collection("profiles")
      .where("username", "==", username)
      .get();

    if (user.empty) {
      return null;
    }

    console.log(user.docs[0].data());

    let profileData: _userProfile = {
      uid: user.docs[0].id,
      bio: user.docs[0].data().bio,
      first_name: user.docs[0].data().first_name,
      last_name: user.docs[0].data().last_name,
      email: user.docs[0].data().email,
      password: user.docs[0].data().password,
      username: user.docs[0].data().username,
      github_access_token: user.docs[0].data().github_access_token,
      /* 
      github_account_id is used to keep track of all the github accounts 
      connected to stackapp across entire site...
      makes sure a github account cannot be connected to more than 1 stackapp account
    */
      github_account_id: user.docs[0].data().github_account_id,
      created_on: user.docs[0].data().created_on,
      profile_pic: user.docs[0].data().profile_pic,
      profile_pic_filename: user.docs[0].data().profile_pic_filename,
    };

    return profileData;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function GetUserStacks(
  uid: string | undefined
): Promise<Partial<_stack>[] | null | 0> {
  if (uid === undefined) {
    return null;
  }

  //gets all the stacks created by currently signed in user
  try {
    const data = await db
      .collection(process.env.STACKS_DB!)
      .where("uid", "==", uid)
      .orderBy("created_on", "desc")
      .get();

    console.log(data.empty);

    if (data.empty) {
      return 0;
    } else {
      let stacks: Partial<_stack>[] = [];
      data.forEach((x: any) => {
        const y: Partial<_stack> = {
          name: x.data().name,
          icon_url: x.data().icon_url,
          description: x.data().description,
          stack_id: x.id,
          thumbnail_url: x.data().thumbnail_url,
          icon_filename: x.data().icon_filename,
          thumbnail_filename: x.data().thumbnail_filename,
        };

        stacks.push(y);
      });
      return stacks;
    }
  } catch (e) {
    console.log(e);
    console.log("error while fetching collection");
    return null;
  }
}

export async function GetProfilesStacks(
  publicUid: string
): Promise<Partial<_stack>[] | null> {
  try {
    const profile = await db
      .collection("profiles")
      .where("public_uid", "==", publicUid)
      .get();

    if (profile.empty) {
      console.log("there is no profile with public uid " + publicUid);
      return null;
    }

    //use uid of profile to find all stacks associated with user
    const userStacks = await db
      .collection(process.env.STACKS_DB!)
      .where("uid", "==", profile.docs[0].data().uid)
      .get();

    if (userStacks.empty) {
      return null;
    }

    let stacks: Partial<_stack>[] = [];
    userStacks.forEach((x: any) => {
      const y: Partial<_stack> = {
        name: x.data().name,
        icon_url: x.data().icon_url,
        description: x.data().description,
        stack_id: x.id,
      };

      stacks.push(y);
    });
    return stacks.reverse(); //NEWEST TO OLDEST
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function GenerateNamesWithLogos(
  array: string[]
): _nameWithLogo[] | null {
  //returns an array with the name of the tech
  //along with a img
  //imgs need to be name with this format if more than 2 words
  // 'google-cloud.svg' (put a dash)

  try {
    return array.sort().map((x: string) => {
      if (x.split(" ").length > 1) {
        return {
          name: x,
          logo_img_src: `/logo/${x.toLowerCase().split(" ").join("-")}.svg`,
        };
      } else {
        return { name: x, logo_img_src: `/logo/${x.toLowerCase()}.svg` };
      }
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function IsUserSignedIn(
  uidCookie: string | undefined
): Promise<true | null> {
  //checks to see if user is currently signed in
  try {
    //no cookie
    if (uidCookie === undefined) {
      return null;
    }

    //check is uid exists in database
    //if there is an error with this, will throw new error
    await db.collection("profiles").doc(uidCookie).get();

    return true;
  } catch (e) {
    console.log(e);
    console.log("There was an error while checking if user is signed in ");
    return null;
  }
}

export function IsUsersStack(
  cookieUid: string | undefined,
  docUid: string
): boolean {
  //will check if the user signed in
  //owns the stack being currently viewed

  if (cookieUid === undefined) {
    return false;
  }
  if (cookieUid !== docUid) {
    return false;
  }
  return true;
}

export async function GetRepoSelect(
  githubAccessToken: string | null,
  userUid: string
): Promise<_repoSelectList[] | null | "too_many_requests"> {
  //renders out all the github repos a user owns
  //to put in <select> tag on frontend create page

  if (githubAccessToken === null) {
    return null;
  }

  try {
    //1. get the authenticated github user's profile
    const githubData = await fetch("https://api.github.com/user", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${githubAccessToken}`,
      },
    });
    if (githubData.status !== 200 && githubData.status !== 403) {
      throw new Error();
    }
    if (githubData.status === 403) {
      console.log("too many requests to github api");
      return "too_many_requests";
    }

    const githubProfile = await githubData.json();

    const userRepos = await fetch(`${githubProfile.repos_url}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${githubAccessToken}`,
      },
    });
    if (userRepos.status !== 200) {
      throw new Error();
    }

    const reposList = await userRepos.json();

    //only return public repos
    //only return name and id properties
    const repoSelectList: _repoSelectList[] = reposList
      .filter((x: any) => {
        return !x.private;
      })
      .map((y: any) => {
        const l: _repoSelectList = {
          name: y.name,
          id: y.id,
        };
        return l;
      });

    //only return repos that are not already selected
    //for another stack

    const userStacks = await db
      .collection(process.env.STACKS_DB!)
      .where("uid", "==", userUid)
      .where("github_repo_id", "!=", null)
      .get();

    if (userStacks.empty) {
      return repoSelectList;
    } else {
      let repoIdsInUse: number[] = [];
      //return stacks that have a github_repo_id assigned to it
      userStacks.forEach((x: any) => {
        repoIdsInUse.push(x.data().github_repo_id);
      });

      //loop through repoSelectList array and remove any
      //repo that has an id in repoIdsInUse

      let finalRepoList: _repoSelectList[] = [
        ...repoSelectList.filter((x) => {
          return !repoIdsInUse.includes(x.id);
        }),
      ];

      return finalRepoList;
    }
  } catch (e) {
    console.log(e);
    console.log("There was an error while generating github repo select");
    return null;
  }
}

export async function GetRepoCommitLogs(
  repoId: string,
  githubAccessToken: string
): Promise<_repoCommitLogs[] | "too_many_requests" | "error"> {
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
      const commit: _repoCommitLogs = {
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

export async function FilterProfanity(appName: string, appDescription: string) {
  //prevents creation of stack if there is any detected
  //profanity in any of the text uploaded

  console.log(appName);
  console.log(appDescription);

  try {
    const badWords = (
      await fs.readFile(path.join(__dirname, "..", "profanity.txt"), "utf-8")
    ).split("\n");

    //for every word in description and app name
    //check for profanity

    const allStackWords = appName
      .replace(/\s+/g, " ")
      .split(" ")
      .concat(appDescription.replace(/\s+/g, " ").split(" "));

    let CONTAINS_PROFANITY = false;
    for (let index = 0; index < allStackWords.length; index++) {
      if (badWords.includes(allStackWords[index].toLowerCase())) {
        console.log("cannot use the word " + allStackWords[index]);
        CONTAINS_PROFANITY = true;
        break;
      }
    }

    return CONTAINS_PROFANITY;
  } catch (e) {
    console.log(e);
    throw new Error();
  }
}

export async function GenerateUniqueUid(): Promise<string> {
  //will return a unique uid for users

  const u = uid(32);
  const doc = await db.collection("profiles").where("uid", "==", u).get();

  if (!doc.empty) {
    let unqiueUid = "";
    while (true) {
      const u2 = uid(32);
      const doc2 = await db.collection("profiles").where("uid", "==", u2).get();

      if (doc2.empty) {
        unqiueUid = u2;
        break;
      }
    }

    return unqiueUid;
  } else {
    return u;
  }
}

export async function GetCreatorDetails(userUid: string) {
  //gets profile data on the user who created a stack

  try {
    const user = (await db.collection("profiles").doc(userUid).get()).data();

    const x: _creator = {
      username: user!.username,
      profile_pic:
        user!.profile_pic === null ? "/icons/noprofile.png" : user!.profile_pic,
      href: `/profile/${user!.username}`,
      first_name: user!.first_name,
      last_name: user!.last_name,
    };
    return x;
  } catch (e) {
    console.log(e);

    const x: _creator = {
      username: "error",
      profile_pic: "/icons/noprofile.png",
      href: "",
      first_name: null,
      last_name: null,
    };

    return x;
  }
}

export async function DoesFileExist(bucket: string, key: string) {
  //checks to see fi file exists in s3 bucket
  try {
    await s3.send(
      new HeadObjectCommand({
        Bucket: bucket,
        Key: key,
      })
    );

    return true;
  } catch (e) {
    console.log("File does not exist in s3!");
    return false;
  }
}

export default async function UploadImagesToS3(
  filename: string,
  filepath: string
): Promise<[string, string] | null> {
  //this function will upload any and all images to aws s3
  //it will return the filename along with the public aws url
  //to access the image
  //returns [aws_url, filename]

  try {
    //if image already exists in s3, do not upload
    if (await DoesFileExist(process.env.AWS_S3_BUCKET!, filename)) {
      return null;
    }

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `imgs/${filename}`,
        Body: await fs.readFile(filepath),
        ContentType: "image/png",
      })
    );

    //delete temp file
    await fs.unlink(filepath);

    return [
      `https://stackapp-bucket.s3.amazonaws.com/imgs/${filename}`,
      filename,
    ];
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function GetStackData(
  stackId: string,
  UIDcookie: string
): Promise<_stack | 404 | null> {
  //gets all data needed to render on stackpage

  try {
    const stackData = await db
      .collection(process.env.STACKS_DB!)
      .doc(stackId)
      .get();

    if (!stackData.exists) {
      return 404;
    }

    console.log(stackData.data());

    const x: _stack = {
      uid: stackData.data()!.uid,
      name: stackData.data()!.name,
      icon_url: stackData.data()!.icon_url,
      icon_filename: stackData.data()!.icon_filename,
      thumbnail_url: stackData.data()!.thumbnail_url,
      thumbnail_filename: stackData.data()!.thumbnail_filename,
      description: stackData.data()!.description,
      github_repo_id:
        stackData.data()!.github_repo_id === null
          ? null
          : stackData.data()!.github_repo_id,
      github_api_token_used:
        stackData.data()!.github_api_token_used === null
          ? null
          : stackData.data()!.github_api_token_used,
      website_url:
        stackData.data()!.website_url === ""
          ? null
          : stackData.data()!.website_url,
      languages_used: stackData.data()!.languages_used,
      databases_used:
        stackData.data()!.databases_used === null
          ? null
          : stackData.data()!.databases_used,
      clouds_used:
        stackData.data()!.clouds_used === null
          ? null
          : stackData.data()!.clouds_used,
      apis_used:
        stackData.data()!.apis_used === null
          ? null
          : stackData.data()!.apis_used,
      frameworks_used:
        stackData.data()!.frameworks_used === null
          ? null
          : stackData.data()!.frameworks_used,

      created_on: stackData.data()!.created_on,
      stack_id: stackId,
    };

    console.log(x);

    return x;
  } catch (e) {
    console.log(e);
    return null;
  }
}

function GenerateSelectedAndNotSelectedTech(
  techType: "language" | "database" | "api" | "cloud" | "framework",
  techValues: string[] | null
): [string[], string[]] | null {
  //returns an array of all tech selected for stack
  //as well as the tech no selected
  //returns [techSelected, techNotSelected]

  switch (techType) {
    case "language":
      if (techValues === null) {
        return null;
      }

      const allLanguages = techOffered.languages;
      for (let index = 0; index < techValues.length; index++) {
        if (allLanguages.indexOf(techValues[index]) !== -1) {
          allLanguages.splice(allLanguages.indexOf(techValues[index]), 1);
        }
      }
      return [techValues, allLanguages];

    case "database":
      if (techValues === null) {
        return null;
      }
      const allDatabases = techOffered.databases;
      for (let index = 0; index < techValues.length; index++) {
        if (allDatabases.indexOf(techValues[index]) !== -1) {
          allDatabases.splice(allDatabases.indexOf(techValues[index]), 1);
        }
      }
      return [techValues, allDatabases];

    case "api":
      if (techValues === null) {
        return null;
      }
      const allApis = techOffered.apis;
      for (let index = 0; index < techValues.length; index++) {
        if (allApis.indexOf(techValues[index]) !== -1) {
          allApis.splice(allApis.indexOf(techValues[index]), 1);
        }
      }
      return [techValues, allApis];

    case "cloud":
      if (techValues === null) {
        return null;
      }
      const allClouds = techOffered.clouds;
      for (let index = 0; index < techValues.length; index++) {
        if (allClouds.indexOf(techValues[index]) !== -1) {
          allClouds.splice(allClouds.indexOf(techValues[index]), 1);
        }
      }
      return [techValues, allClouds];

    case "framework":
      if (techValues === null) {
        return null;
      }
      const allFrameworks = techOffered.frameworks;
      for (let index = 0; index < techValues.length; index++) {
        if (allFrameworks.indexOf(techValues[index]) !== -1) {
          allFrameworks.splice(allFrameworks.indexOf(techValues[index]), 1);
        }
      }
      return [techValues, allFrameworks];

    default:
      return null;
  }
}

export async function GetStackDataEditPage(
  stackId: string,
  cookieUid: string
): Promise<_editStackData | null> {
  //gets stack data needed for edit stack
  //this function returns less data than GetStackData does
  //also returns all tech values user has selected as well as options not selected

  try {
    const stackData = await db
      .collection(process.env.STACKS_DB!)
      .doc(stackId)
      .get();

    console.log(stackData.data());

    if (!stackData.exists) {
      return null;
    }

    const x: _editStackData = {
      name: stackData.data()!.name,
      description: stackData.data()!.description,
      icon_url: stackData.data()!.icon_url,
      thumbnail_url: stackData.data()!.thumbnail_url,
      languagesSelectedData: GenerateSelectedAndNotSelectedTech(
        "language",
        stackData.data()!.languages_used
      )!,
      databasesSelectedData: GenerateSelectedAndNotSelectedTech(
        "database",
        stackData.data()!.databases_used
      )!,
      cloudsSelectedData: GenerateSelectedAndNotSelectedTech(
        "cloud",
        stackData.data()!.clouds_used
      )!,
      apisSelectedData: GenerateSelectedAndNotSelectedTech(
        "api",
        stackData.data()!.apis_used
      )!,
      frameworksSelectedData: GenerateSelectedAndNotSelectedTech(
        "framework",
        stackData.data()!.frameworks_used
      )!,

      github_repo_id: stackData.data()!.github_repo_id,
      github_api_token_used: stackData.data()!.github_api_token_used,
      website_url: stackData.data()!.website_url,
      uid: cookieUid,
      stack_id: stackData.id,
    };

    return x;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function DeleteStack(stackId: string) {
  try {
    const stackData = await db
      .collection(process.env.STACKS_DB!)
      .doc(stackId)
      .get();

    if (!stackData.exists) {
      return null;
    }

    console.log(stackData.data());

    //delete stack icon
    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `imgs/${stackData.data()!.icon_filename}`,
      })
    );
    //delete stack thumbnail
    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `imgs/${stackData.data()!.thumbnail_filename}`,
      })
    );

    //delete the actual stack
    await await db.collection(process.env.STACKS_DB!).doc(stackId).delete();

    console.log("syuccessfully delete stack");

    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function DeleteAccount(accountUid: string) {
  try {
    //delete all stacks user has posted
    const userStacks = await GetUserStacks(accountUid);
    if (userStacks !== 0 && userStacks !== null) {
      userStacks.forEach(async (x: Partial<_stack>) => {
        //delete img and thumbnail for stack
        await s3.send(
          new DeleteObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: `imgs/${x.icon_filename}`,
          })
        );
        await s3.send(
          new DeleteObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: `imgs/${x.thumbnail_filename}`,
          })
        );
        await db.collection(process.env.STACKS_DB!).doc(x.stack_id!).delete();
      });
      console.log("Deleted all users stacks");
    }

    const user = await GetUserProfile(accountUid);
    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `imgs/${user!.profile_pic_filename}`,
      })
    );

    //delete user from profiles collection
    await db.collection("profiles").doc(user!.uid).delete();

    console.log("successfully delete account with all stack content");

    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function AuthenticateGithubAccount(
  code: string,
  accountUid: string
): Promise<"github_account_in_use" | null | true> {
  //connects users github profile with their stackapp account

  try {
    //exchange code for access token
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

      //get the id of their github account
      //and store in profile stack...
      //this will make sure no other
      //stackapp account will be able to connect
      //to this github account

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

      //IF GITHUB ACCOUNT IS ALREADY CONNECTED TO ANOTHER STACKAPP ACCOUNT
      if (
        !(
          await db
            .collection("profiles")
            .where("github_account_id", "==", githubAccountData.id)
            .get()
        ).empty
      ) {
        console.log(
          "cannot add github account, already in use for another stackapp account"
        );

        return "github_account_in_use";
      }
      //SUCCESS
      else {
        //save this access token in users profile
        //to make requests to github api

        await db.collection("profiles").doc(accountUid).update({
          github_access_token: accessToken.access_token,
        });
        await db.collection("profiles").doc(accountUid).update({
          github_account_id: githubAccountData.id,
        });

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

export async function EditProfile(
  uidCookie: string,
  fields: formidable.Fields,
  profileIcon: any
): Promise<"username_already_in_use" | "invalid_username" | null | true> {
  //will update profile details submitted by user
  try {
    console.log(fields);

    //make sure if user is changing username, it is not already taken
    if (fields.profile_username !== "") {
      const doesUsernameExist = await db
        .collection("profiles")
        .where("username", "==", fields.profile_username[0].trim())
        .get();

      if (!doesUsernameExist.empty) {
        return "username_already_in_use";
      }
    }

    //username cannot have spaces
    if (fields.profile_username[0].trim().split(" ").length > 1) {
      return "invalid_username";
    }

    const oldUserDetails = await GetUserProfile(uidCookie);

    let newIcon: string | null = null;
    let newIconFilename: string | null = null;
    //user included new profile icon in form
    if (profileIcon[0].originalFilename !== "") {
      const newProfileIcon = await UploadImagesToS3(
        profileIcon[0].newFilename,
        profileIcon[0].filepath
      );
      if (newProfileIcon !== null) {
        newIcon = newProfileIcon[0];
        newIconFilename = newProfileIcon[1];
        //delete the old profile picture stored in s3
        await s3.send(
          new DeleteObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: `imgs/${oldUserDetails?.profile_pic_filename}`,
          })
        );
      }
    }

    //only update document properties that are not null on form data
    //if empty form value, do not change in firebase
    let newFname: string | null = null;
    let newLname: string | null = null;
    let newUsername: string | null = null;
    let newBio: string | null = null;
    fields.fname[0] !== "" ? (newFname = fields.fname[0]) : null;
    fields.lname[0] !== "" ? (newLname = fields.lname[0]) : null;
    fields.lname[0] !== "" ? (newLname = fields.lname[0]) : null;
    fields.profile_username[0] !== ""
      ? (newUsername = fields.profile_username[0])
      : null;
    fields.profile_bio[0] !== ""
      ? (newBio = fields.profile_bio[0])
      : (newBio = null);

    let updateObj: Partial<_userProfile> = {};
    newFname !== null
      ? (updateObj.first_name = newFname)
      : (updateObj.first_name = null);
    newLname !== null
      ? (updateObj.last_name = newLname)
      : (updateObj.last_name = null);
    newUsername !== null ? (updateObj.username = newUsername) : null;
    newBio !== null ? (updateObj.bio = newBio) : (updateObj.bio = null);
    newIcon !== null ? (updateObj.profile_pic = newIcon) : null;
    newIcon !== null
      ? (updateObj.profile_pic_filename = newIconFilename)
      : null;

    console.log(fields);

    console.log("update object");
    console.log(updateObj);

    await db.collection("profiles").doc(uidCookie).update(updateObj);
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function EditStack(
  stackId: string,
  cookieUid: string,
  stackIcon: any,
  stackThumbnail: any,
  fields: formidable.Fields
) {
  try {
    const oldStackDetails = await GetStackData(stackId, cookieUid);

    if (oldStackDetails === null || oldStackDetails === 404) {
      return null;
    }

    console.log("\n\nUPDATE STACK FIELDS");
    console.log(fields);

    let newIcon: string | null = null;
    let newIconFilename: string | null = null;
    let newThumbnail: string | null = null;
    let newThumbnailFilename: string | null = null;

    //user included new stack icon in form
    if (stackIcon[0].originalFilename !== "") {
      console.log("user changed stack icon!");

      const newStackIcon = await UploadImagesToS3(
        stackIcon[0].newFilename,
        stackIcon[0].filepath
      );
      if (newStackIcon !== null) {
        newIcon = newStackIcon[0];
        newIconFilename = newStackIcon[1];
        //delete the old stack icon stored in s3
        await s3.send(
          new DeleteObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: `imgs/${oldStackDetails!.icon_filename}`,
          })
        );
      }
    }

    //user included new stack thumbnail in form
    if (stackThumbnail[0].originalFilename !== "") {
      console.log("user changed stack thumbnail!");
      const newStackThumbnail = await UploadImagesToS3(
        stackThumbnail[0].newFilename,
        stackThumbnail[0].filepath
      );
      if (newStackThumbnail !== null) {
        newThumbnail = newStackThumbnail[0];
        newThumbnailFilename = newStackThumbnail[1];
        //delete the old stack thumbnail stored in s3
        await s3.send(
          new DeleteObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET,
            Key: `imgs/${oldStackDetails!.thumbnail_filename}`,
          })
        );
      }
    }

    //only update document properties that are not null on form data
    //if empty form value, do not change in firebase
    let newStackName: string | null = null;
    let newStackDescription: string | null = null;
    let newStackUrl: string | null = null;
    let newStackGithubRepoId: string | null = null;

    //TECH
    let newStackLanguagesSelected: string[] | null = null;
    let newStackDatabasesSelected: string[] | null = null;
    let newStackApisSelected: string[] | null = null;
    let newStackCloudsSelected: string[] | null = null;
    let newStackFrameworksSelected: string[] | null = null;

    fields.app_name[0] !== "" ? (newStackName = fields.app_name[0]) : null;
    fields.app_description[0] !== ""
      ? (newStackDescription = fields.app_description[0])
      : null;
    fields.website_url[0] !== "" ? (newStackUrl = fields.website_url[0]) : null;
    fields.githubRepoId !== undefined
      ? fields.githubRepoId[0] === "null"
        ? (newStackGithubRepoId = null)
        : (newStackGithubRepoId = fields.githubRepoId[0])
      : null;
    newStackLanguagesSelected = Array.from(new Set(fields.languages_used));
    fields.databases_used === undefined
      ? (newStackDatabasesSelected = null)
      : (newStackDatabasesSelected = Array.from(
          new Set(fields.databases_used)
        ));
    fields.apis_used === undefined
      ? (newStackApisSelected = null)
      : (newStackApisSelected = Array.from(new Set(fields.apis_used)));
    fields.clouds_used === undefined
      ? (newStackCloudsSelected = null)
      : (newStackCloudsSelected = Array.from(new Set(fields.clouds_used)));
    fields.frameworks_used === undefined
      ? (newStackFrameworksSelected = null)
      : (newStackFrameworksSelected = Array.from(
          new Set(fields.frameworks_used)
        ));

    let updateObj: Partial<_stack> = {};
    newStackName !== null ? (updateObj.name = newStackName) : null;
    newStackDescription !== null
      ? (updateObj.description = newStackDescription)
      : null;
    newStackGithubRepoId !== null
      ? (updateObj.github_repo_id = newStackGithubRepoId)
      : null;
    updateObj.languages_used = newStackLanguagesSelected;
    newStackDatabasesSelected !== null
      ? (updateObj.databases_used = newStackDatabasesSelected)
      : (updateObj.databases_used = null);
    newStackApisSelected !== null
      ? (updateObj.apis_used = newStackApisSelected)
      : (updateObj.apis_used = null);
    newStackCloudsSelected !== null
      ? (updateObj.clouds_used = newStackCloudsSelected)
      : (updateObj.clouds_used = null);
    newStackFrameworksSelected !== null
      ? (updateObj.frameworks_used = newStackFrameworksSelected)
      : (updateObj.frameworks_used = null);
    newIcon === null ? null : (updateObj.icon_url = newIcon);
    newIconFilename === null
      ? null
      : (updateObj.icon_filename = newIconFilename);
    newThumbnail === null ? null : (updateObj.thumbnail_url = newThumbnail);
    newThumbnailFilename === null
      ? null
      : (updateObj.thumbnail_filename = newThumbnailFilename);

    console.log(fields);

    console.log("updated edit profile");
    console.log(updateObj);

    await db.collection(process.env.STACKS_DB!).doc(stackId).update(updateObj);

    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function CreateStack(
  files: any,
  fields: formidable.Fields,
  cookieUid: string
) {
  try {
    const x = files.stack_icon;
    const y = files.stack_thumbnail;

    //upload icon
    const iconUpload = await UploadImagesToS3(x[0].newFilename, x[0].filepath);
    //upload thumbnail
    const thumbnailUpload = await UploadImagesToS3(
      y[0].newFilename,
      y[0].filepath
    );

    if (iconUpload === null || thumbnailUpload === null) {
      console.log("There was an error while uploading images to s3");

      return null;
    }

    console.log(fields);

    const user = await GetUserProfile(cookieUid);

    const newStack: _stack = {
      uid: cookieUid,
      name: fields.app_name[0].trim(),
      icon_url: iconUpload[0],
      icon_filename: iconUpload[1],
      thumbnail_url: thumbnailUpload[0],
      thumbnail_filename: thumbnailUpload[1],
      description: fields.app_description[0].trim(),
      languages_used: Array.from(new Set(fields.languages_used)),
      databases_used:
        fields.databases_used === undefined
          ? null
          : Array.from(new Set(fields.databases_used)),
      clouds_used:
        fields.clouds_used === undefined
          ? null
          : Array.from(new Set(fields.clouds_used)),
      frameworks_used:
        fields.frameworks_used === undefined
          ? null
          : Array.from(new Set(fields.frameworks_used)),
      apis_used:
        fields.apis_used === undefined
          ? null
          : Array.from(new Set(fields.apis_used)),
      github_repo_id:
        fields.githubRepoId === undefined
          ? null
          : fields.githubRepoId[0] === "null"
          ? null
          : fields.githubRepoId[0],
      github_api_token_used:
        user === null
          ? null
          : user.github_access_token === null
          ? null
          : user.github_access_token,
      website_url: fields.website_url[0].trim(),
      created_on: Date.now(),
    };

    console.log("\nNEW STACK BEING ADDED!");

    console.log(newStack);

    const s = await db.collection(process.env.STACKS_DB!).add(newStack);
    console.log(s);
    return s;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function CreateAccount(
  fields: formidable.Fields,
  files: any
): Promise<
  | "no_space_username"
  | "username_already_in_use"
  | "email_already_in_use"
  | null
  | true
> {
  try {
    //make sure username has no spaces
    if (fields.app_signup_username[0].trim().split(" ").length > 1) {
      return "no_space_username";
    }

    //make sure username is not already in use
    if (
      !(
        await db
          .collection("profiles")
          .where("username", "==", fields.app_signup_username[0].trim())
          .get()
      ).empty
    ) {
      return "username_already_in_use";
    }

    //email already in use
    if (
      !(
        await db
          .collection("profiles")
          .where("email", "==", fields.app_signup_email[0].trim())
          .get()
      ).empty
    ) {
      return "email_already_in_use";
    }

    // store account details in unverified account collection initially
    //once user confirms email remove this docuemnt from collection and
    //add user to database

    //user does not have to inlcude profile on account creation
    //if not, their profile will have default profile icon
    let iconUpload: null | [string, string] = null;
    if (files.profile_icon !== undefined) {
      const profileIcon = files.profile_icon;

      //upload profile icon
      iconUpload = await UploadImagesToS3(
        profileIcon[0].newFilename,
        profileIcon[0].filepath
      );
    }

    const unverifiedAccount = await db.collection("unverified-accounts").add({
      email: fields.app_signup_email[0].trim(),
      password: fields.app_signup_password[0].trim(),
      username: fields.app_signup_username[0].trim(),
      created_on: Date.now(),
      profile_pic: iconUpload === null ? null : iconUpload![0],
      profile_pic_filename: iconUpload === null ? null : iconUpload![1],
    });

    const emailInput = {
      Source: "stackbot@stackapp.xyz",
      Destination: {
        ToAddresses: [fields.app_signup_email[0].trim()],
      },
      Message: {
        Subject: {
          Data: "Verify your Stackapp account",
          Charset: "utf-8",
        },
        Body: {
          Html: {
            Data:
              "Click the following link to verify your account - " +
              `${process.env.EMAIL_VERIFICATION_HOST}/api/email-handler?mode=verifyEmail&id=${unverifiedAccount.id}`,
            Charset: "utf-8",
          },
        },
      },
      source: "Stackapp",
      SourceArn: process.env.AWS_SES_SOURCE_ARN,
    };

    //2. send verification email through aws ses
    await emailClient.send(new SendEmailCommand(emailInput));
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function SignUserIn(
  e: string,
  p: string
): Promise<"account_doesnt_exist" | null | any> {
  try {
    const a = await db
      .collection("profiles")
      .where("email", "==", e)
      .where("password", "==", p)
      .get();
    if (a.empty) {
      return "account_doesnt_exist";
    } else {
      console.log(a.docs[0].data().uid);
      return a.docs[0].data().uid;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}
