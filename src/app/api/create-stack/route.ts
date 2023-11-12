import { cookies } from "next/headers";
import { StackModel } from "@/models/stacks";
import { stacksCollection } from "@/services/mongodb";
import { UploadImage } from "@/functions";

export async function POST(request: Request) {
  const cookieStore = cookies();

  if (cookieStore.get("a_id") === undefined) {
    return Response.json({ message: "error" }, { status: 400 });
  }

  try {
    const form = await request.formData();

    console.log(form);

    const icon = form.get("stack_icon") as Blob | null;
    const thumbnail = form.get("stack_thumbnail") as Blob | null;
    const uploadedIcon = await UploadImage(icon);
    const uploadedThumbnail = await UploadImage(thumbnail);

    if (uploadedIcon === null || uploadedThumbnail === null) {
      return Response.json(
        {
          message: "Error while uploading images",
        },
        { status: 500 }
      );
    }

    const languagesUsed = [];
    const databasesUsed = [];
    const apisUsed = [];
    const cloudsUsed = [];
    const frameworksUsed = [];
    for (const x of form) {
      if (x[0] === "languages_used") {
        languagesUsed.push(x[1]);
      }
      if (x[0] === "databases_used") {
        databasesUsed.push(x[1]);
      }
      if (x[0] === "apis_used") {
        apisUsed.push(x[1]);
      }
      if (x[0] === "clouds_used") {
        cloudsUsed.push(x[1]);
      }
      if (x[0] === "frameworks_used") {
        frameworksUsed.push(x[1]);
      }
    }

    // user MUST select at least 1 language
    if (languagesUsed.length === 0) {
      return Response.json(
        {
          message: "Must select at least 1 language for Stack",
        },
        { status: 400 }
      );
    }

    const githubRepoData = form.get("github_repo_id"); // contains name of repo AND id (split string at ':')
    const websiteUrl = form.get("website_url");

    // construct stack model object
    const stackObj = StackModel.parse({
      aid: cookieStore.get("a_id")!.value,
      apis_used: apisUsed.length === 0 ? null : apisUsed,
      clouds_used: cloudsUsed.length === 0 ? null : cloudsUsed,
      created_on: new Date(),
      databases_used: databasesUsed.length === 0 ? null : databasesUsed,
      description: form.get("app_description"),
      frameworks_used: frameworksUsed.length === 0 ? null : frameworksUsed,
      github_repo_id:
        githubRepoData === null || githubRepoData === "none"
          ? null
          : Number(String(githubRepoData).split(":")[0]),
      github_repo_name:
        githubRepoData === null || githubRepoData === "none"
          ? null
          : String(githubRepoData).split(":")[1],
      icon_filename: uploadedIcon,
      icon_url: `https://stackapp-bucket.s3.amazonaws.com/uploads/${uploadedIcon}`,
      languages_used: languagesUsed,
      likes: 0,
      name: form.get("app_name"),
      thumbnail_filename: uploadedThumbnail,
      thumbnail_url: `https://stackapp-bucket.s3.amazonaws.com/uploads/${uploadedThumbnail}`,
      website_url: websiteUrl === "" ? null : websiteUrl,
    });

    const doc = await stacksCollection.insertOne(stackObj);

    return Response.json(
      {
        message: "Stack successfully created.",
        stack_id: doc.insertedId.toString(),
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    console.log("There was an error while parsing the request body");
    return Response.json(
      {
        message: "There was an error while creating a Stack. Try again later.",
      },
      { status: 500 }
    );
  }
}
