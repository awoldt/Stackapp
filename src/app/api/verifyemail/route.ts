import {
  accountsCollection,
  unverifiedAccountsColleciton,
} from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // 1. check if id query is valid
  const id = new URLSearchParams(new URL(request.url).search).get("id");
  if (id === null) {
    return Response.json({ status: 400, data: "bad request" });
  }
  if (!ObjectId.isValid(id)) {
    return Response.json({ status: 400, data: "bad request" });
  }

  // 2. check to see if document with id query exists
  const account = await unverifiedAccountsColleciton.findOne({
    _id: new ObjectId(id),
  });

  if (!account) {
    return Response.json({ status: 400, data: "bad request" });
  }

  const { _id, ...actObj } = account;

  // 3. store this account in verified accounts collection
  const vAccount = await accountsCollection.insertOne(actObj);
  // 4. delete all unverified accounts with this email
  await unverifiedAccountsColleciton.deleteMany({ email: account.email });

  // a_id -> "account id"
  cookies().set("a_id", vAccount.insertedId.toString(), {
    expires: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 3,
      new Date().getDate()
    ),
    secure: true,
  });

  return new Response(
    `<!DOCTYPE html>
  <html lang="en" dir="ltr">
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <title>Account successfully created!</title>
      </head>
      <body>
         <p>Account successfully verified! Redirecting.....</p>
         <script>
         setTimeout(function() {
          window.location.href = "/";
        }, 2500);
         </script>
      </body>
  </html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}
