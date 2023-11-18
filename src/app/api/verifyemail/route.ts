import {
  accountsCollection,
  unverifiedAccountsColleciton,
} from "@/services/mongodb";
import { ObjectId } from "mongodb";

import { cookies } from "next/headers";

export async function GET(request: Request) {
  // 1. check if id query is valid
  const id = new URLSearchParams(new URL(request.url).search).get("id");
  if (id === null) {
    return Response.json({ data: "bad request" }, { status: 400 });
  }
  if (!ObjectId.isValid(id)) {
    return Response.json({ data: "bad request" }, { status: 400 });
  }

  // 2. check to see if document with id query exists
  const account = await unverifiedAccountsColleciton.findOne({
    _id: new ObjectId(id),
  });

  if (account === null) {
    return Response.json({ data: "bad request" }, { status: 400 });
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
          window.location.href = "/profile";
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
