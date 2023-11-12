import { IsValidAccountCookie } from "@/functions";
import { s3Client } from "@/services/aws";
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();

  try {
    const account = await IsValidAccountCookie(cookieStore.get("a_id"));

    if (account === false) {
      return Response.json({ message: "Invalid request" }, { status: 400 });
    }

    // first, delete all stacks associated with account along with imgs stored in google storage
    const userStacks = await stacksCollection
      .find({
        aid: String(account._id),
      })
      .toArray();
    if (userStacks.length > 0) {
      for (let i = 0; i < userStacks.length; i++) {
        // delete stack icon
        await s3Client.send(
          new DeleteObjectCommand({
            Bucket: "stackapp-bucket",
            Key: `uploads/${userStacks[i].icon_filename}`,
          })
        );
        // delete stack thumbnail
        await s3Client.send(
          new DeleteObjectCommand({
            Bucket: "stackapp-bucket",
            Key: `uploads/${userStacks[i].thumbnail_filename}`,
          })
        );

        // now delete stack
        await stacksCollection.deleteOne({
          _id: new ObjectId(userStacks[i]._id),
        });
      }
    }

    // now delete account along with profile img
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: "stackapp-bucket",
        Key: `uploads/${account.profile_pic}`,
      })
    );
    await accountsCollection.deleteOne({ _id: new ObjectId(account._id) });

    return Response.json(
      {
        message: "Account successfully deleted",
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    console.log("There was an error while parsing the request body");
    return Response.json(
      { message: "There was an error while deleting account" },
      { status: 500 }
    );
  }
}
