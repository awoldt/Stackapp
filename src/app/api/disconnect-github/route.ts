"use server";

import { accountsCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const cookieStore = cookies();

  try {
    if (
      cookieStore.get("a_id") === undefined ||
      !ObjectId.isValid(cookieStore.get("a_id")!.value)
    ) {
      return Response.json(
        { message: "Invalid account cookie" },
        { status: 400 }
      );
    }

    const account = await accountsCollection.findOne({
      _id: new ObjectId(cookieStore.get("a_id")!.value),
    });

    if (!account) {
      return Response.json(
        { message: "Account does not exist" },
        { status: 400 }
      );
    }
    if (
      account.github_access_token !== null ||
      account.github_account_id !== null
    ) {
      return Response.json(
        {
          message: "There is no GitHub account associted with this account",
        },
        { status: 400 }
      );
    }

    await accountsCollection.updateOne(
      { _id: new ObjectId(cookieStore.get("a_id")!.value) },
      {
        $set: {
          github_account_id: null,
          github_access_token: null,
        },
      }
    );

    redirect("/profile/edit");
  } catch (err) {
    console.log(err);
    console.log("There was an error while parsing the request body");
    return Response.json({ message: "error" }, { status: 500 });
  }
}
