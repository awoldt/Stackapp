"use server";

import { IsValidAccountCookie } from "@/functions";
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST() {
  const cookieStore = cookies();
  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  if (!account) {
    return Response.json(
      {
        message: "Bad request",
      },
      { status: 400 }
    );
  }

  try {
    if (
      account.github_access_token === null ||
      account.github_account_id === null
    ) {
      return Response.json(
        {
          message: "There is no GitHub account associted with this account",
        },
        { status: 400 }
      );
    }

    // remove the github_repo_id associated with every stack user has attached
    await stacksCollection.updateMany(
      { github_repo_id: { $ne: null }, aid: String(account._id) },
      {
        $set: {
          github_repo_id: null,
        },
      }
    );

    // remove github association with stack account
    await accountsCollection.updateOne(
      { _id: new ObjectId(account._id) },
      {
        $set: {
          github_account_id: null,
          github_access_token: null,
        },
      }
    );

    return Response.json(
      { message: "Successfully disconnected GitHub account" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return Response.json({ message: "error" }, { status: 500 });
  }
}
