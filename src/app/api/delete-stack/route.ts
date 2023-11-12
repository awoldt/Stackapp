import { IsValidAccountCookie } from "@/functions";
import { s3Client } from "@/services/aws";
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  // check if stack_id query is valid
  const stackID = new URLSearchParams(new URL(request.url).search).get(
    "stack_id"
  );
  if (stackID === null) {
    return Response.json({ data: "Bad request" }, { status: 400 });
  }
  if (!ObjectId.isValid(stackID)) {
    return Response.json({ data: "Invalid request" }, { status: 400 });
  }

  try {
    const account = await IsValidAccountCookie(cookieStore.get("a_id"));

    if (!account) {
      return Response.json(
        {
          message: "Bad request",
        },
        { status: 401 }
      );
    }

    // make sure account owns stack trying to be deleted
    const s = await stacksCollection.findOne({
      _id: new ObjectId(stackID),
      aid: String(account._id),
    });
    if (s === null) {
      return Response.json(
        {
          message: "Bad request",
        },
        { status: 401 }
      );
    }

    // delete icon and thumbnail associated with stack
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: "stackapp-bucket",
        Key: `uploads/${s.icon_filename}`,
      })
    );
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: "stackapp-bucket",
        Key: `uploads/${s.thumbnail_filename}`,
      })
    );

    // now delete actual stack document
    await stacksCollection.deleteOne({ _id: new ObjectId(stackID) });

    return Response.json(
      {
        message: "Stack successfully deleted",
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
