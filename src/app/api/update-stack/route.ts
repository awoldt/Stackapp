import { IsValidAccountCookie, UploadImage } from "@/functions";
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import {
  UpdateProfileModel,
  UserUpdateProfile,
} from "../../../models/udpateProfile";
import { storageBucket } from "../../../services/google-storage";
import { UpadateStackModel, UpdatedStack } from "@/models/updateStack";

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
    const githubRepoID = form.get("github_repo_id");
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
    if (githubRepoID !== null && githubRepoID !== "none") {
      updateObj.github_repo_id = Number(githubRepoID);
    }
    if (stackIcon.size !== 0) {
      const i = await UploadImage(stackIcon);
      if (i !== null) {
        updateObj.icon_filename = i;
        updateObj.icon_url = `https://storage.googleapis.com/stackapp/uploads/${i}`;

        // delete the old stack icon
        await storageBucket
          .file(`uploads/${stackDetails.icon_filename!}`)
          .delete();
      }
    }
    if (stackThumbnail.size !== 0) {
      const i = await UploadImage(stackThumbnail);
      if (i !== null) {
        updateObj.thumbnail_filename = i;
        updateObj.thumbnail_url = `https://storage.googleapis.com/stackapp/uploads/${i}`;

        // delete the old stack thumbnail
        await storageBucket
          .file(`uploads/${stackDetails.thumbnail_filename!}`)
          .delete();
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
