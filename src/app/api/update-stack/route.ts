import { IsValidAccountCookie, UploadImage } from "@/functions";
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

import { UpadateStackModel, UpdatedStack } from "@/models/stacks";
import { s3Client } from "@/services/aws";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

export async function POST(request: Request) {
  const cookieStore = cookies();

  try {
    const account = await IsValidAccountCookie(cookieStore.get("a_id"));
    if (!account) {
      return Response.json({ message: "Inavlid response" }, { status: 400 });
    }

    const form = await request.formData();
    console.log(form);

    const stackID = form.get("stack_id");

    // make sure user attempting to edit stack owns stack
    const stackDetails = await stacksCollection.findOne({
      _id: new ObjectId(String(stackID)),
      aid: String(account._id),
    });
    if (stackDetails === null) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const stackName = form.get("stack_name");
    const stackDescription = form.get("stack_description");
    const websiteUrl = form.get("website_url");
    const githubRepoData = form.get("github_repo_id");
    const stackIcon: any = form.get("stack_icon");
    const stackThumbnail: any = form.get("stack_thumbnail");

    // stack name and description cannot be empty
    if (stackName === "" || stackDescription === "") {
      return Response.json(
        { message: "Stack name and description cannot be empty" },
        { status: 400 }
      );
    }

    // only change data on properties that are not the same as data previously saved
    const updateObj: UpdatedStack = {};
    if (stackName !== stackDetails.name) {
      updateObj.name = String(stackName);
    }
    if (stackDescription !== stackDetails.description) {
      updateObj.description = String(stackDescription);
    }
    if (websiteUrl === "") {
      updateObj.website_url = null;
    } else {
      if (websiteUrl !== stackDetails.website_url) {
        updateObj.website_url = String(websiteUrl);
      }
    }
    if (githubRepoData !== null && githubRepoData !== "none") {
      updateObj.github_repo_id = Number(String(githubRepoData).split(":")[0]);
      updateObj.github_repo_name = String(githubRepoData).split(":")[1];
    }
    if (stackIcon.size !== 0) {
      const i = await UploadImage(stackIcon);
      if (i !== null) {
        updateObj.icon_filename = i;
        updateObj.icon_url = `https://stackapp-bucket.s3.amazonaws.com/uploads/${i}`;

        // delete the old stack icon
        await s3Client.send(
          new DeleteObjectCommand({
            Bucket: "stackapp-bucket",
            Key: `uploads/${stackDetails.icon_filename}`,
          })
        );
      }
    }
    if (stackThumbnail.size !== 0) {
      const i = await UploadImage(stackThumbnail);
      if (i !== null) {
        updateObj.thumbnail_filename = i;
        updateObj.thumbnail_url = `https://stackapp-bucket.s3.amazonaws.com/uploads/${i}`;

        // delete the old stack thumbnail
        await s3Client.send(
          new DeleteObjectCommand({
            Bucket: "stackapp-bucket",
            Key: `uploads/${stackDetails.thumbnail_filename}`,
          })
        );
      }
    }

    const FINAL_UPDATE_OBJ = UpadateStackModel.parse(updateObj);
    await stacksCollection.updateOne(
      { _id: new ObjectId(String(stackID)) },
      {
        $set: FINAL_UPDATE_OBJ,
      }
    );

    return Response.json(
      { message: "Successfully updated stack" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: "Error while updating stack", errMessage: err },
      { status: 500 }
    );
  }
}
