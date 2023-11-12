import { IsValidAccountCookie, UploadImage } from "@/functions";
import { accountsCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

import { UpdateProfileModel, UserUpdateProfile } from "@/models/profile";
import { s3Client } from "@/services/aws";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

export async function POST(request: Request) {
  const cookieStore = cookies();

  const account = await IsValidAccountCookie(cookieStore.get("a_id"));
  if (!account) {
    return Response.json({ message: "Inavlid response" }, { status: 400 });
  }

  const form = await request.formData();
  console.log(form);

  let bio = form.get("bio_input");
  if (bio === "") {
    bio = null;
  }

  const profileImg: any = form.get("profile_icon");

  // for every profile property that is the same as it was before edit
  // ...DO NOT update
  const updateObject: UserUpdateProfile = {};

  // if user left bio textarea empty, store as null value
  // will display as "No bio yet" on edit profile page
  if (bio === null) {
    updateObject.bio = null;
  } else {
    if (account.bio !== bio) {
      updateObject.bio = String(bio);
    }
  }
  if (profileImg.size !== 0) {
    const i = await UploadImage(profileImg);
    if (i !== null) {
      updateObject.profile_pic = i;
      updateObject.profile_pic_filename = `https://stackapp-bucket.s3.amazonaws.com/uploads/${i}`;

      // if user does not have profile img
      // delete the old profile image from google storage
      if (account.profile_pic !== null) {
        await s3Client.send(
          new DeleteObjectCommand({
            Bucket: "stackapp-bucket",
            Key: `uploads/${account.profile_pic}`,
          })
        );
      }
    }
  }

  const FINAL_UPDATE_OBJ = UpdateProfileModel.parse(updateObject);

  await accountsCollection.updateOne(
    { _id: new ObjectId(cookieStore.get("a_id")?.value) },
    { $set: FINAL_UPDATE_OBJ }
  );

  return Response.json(
    { message: "Successfully updated profile" },
    { status: 200 }
  );
}
