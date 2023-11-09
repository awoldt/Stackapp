import { IsValidAccountCookie, UploadImage } from "@/functions";
import { accountsCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import {
  UpdateProfileModel,
  UserUpdateProfile,
} from "../../../models/udpateProfile";
import { storageBucket } from "../../../services/google-storage";

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
  const firstName = form.get("fname");
  const lastName = form.get("lname");
  const profileImg: any = form.get("profile_icon");

  // if first name or last name is changed, must not be empty
  if (firstName === "" || lastName === "") {
    return Response.json(
      { message: "First and lastname cannot be empty" },
      { status: 400 }
    );
  }

  // for every profile property that is the same as it was before edit
  // ...DO NOT update
  const updateObject: UserUpdateProfile = {};
  if (account.first_name !== firstName) {
    updateObject.first_name = String(firstName);
  }
  if (account.last_name !== lastName) {
    updateObject.last_name = String(lastName);
  }
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
      updateObject.profile_pic_filename = `https://storage.googleapis.com/stackapp/uploads/${i}`;

      // if user does not have profile img
      // delete the old profile image from google storage
      if (account.profile_pic !== null) {
        await storageBucket.file(`uploads/${account.profile_pic!}`).delete();
      }
    }
  }

  const accountObj = UpdateProfileModel.parse(updateObject);

  await accountsCollection.updateOne(
    { _id: new ObjectId(cookieStore.get("a_id")?.value) },
    { $set: accountObj }
  );

  return Response.json(
    { message: "Successfully updated profile" },
    { status: 200 }
  );
}
