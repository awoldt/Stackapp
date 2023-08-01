// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  DEFAULT_APIRESPONSE,
  _API_NEWSTACK_RESPONSE,
  _stack,
  _userProfile,
} from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

import { getAuth } from "firebase-admin/auth";
import { GenerateUniquePublicUid } from "@/functions";
import { db } from "../../../firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("HANDLING EMAIL VERIFY API ROUTE");

  const apiResponse = <DEFAULT_APIRESPONSE>{};

  if (req.query.mode === undefined) {
    apiResponse.msg = "Bad request";
    res.status(400).json(apiResponse);
  } else {
    try {
      switch (req.query.mode) {
        //VERIFY EMAIL
        //save a user in firebase auth
        //then store details in custom profiles collection
        case "verifyEmail":
          //make sure unverified document id actually exists
          if (
            !(
              await db
                .collection("unverified-accounts")
                .doc(String(req.query.id))
                .get()
            ).exists
          ) {
            console.log("unverifiead account does not exist");

            apiResponse.msg = "Error while processing request";
            res.status(400).json(apiResponse);
            break;
          }

          //unverified account exists

          console.log("unverified account exists!");

          const unverifiedDetails = (
            await db
              .collection("unverified-accounts")
              .doc(String(req.query.id))
              .get()
          ).data();

          //create new user to store in firebase auth
          const authAccount = await getAuth().createUser({
            email: unverifiedDetails!.email,
            password: unverifiedDetails!.password,
            displayName: unverifiedDetails!.username,
          });
          console.log("new account successfully stored in firebase auth");
          console.log(authAccount);

          //remove all unverified account with same email
          //also delete profile picture for this unauthenticated account
          const r = await db
            .collection("unverified-accounts")
            .where("email", "==", unverifiedDetails!.email)
            .get();
          if (!r.empty) {
            console.log(
              "removing all other unverified account with this email address"
            );

            r.forEach(async (x: any) => {
              await db.collection("unverified-accounts").doc(x.id).delete();
              console.log("deleted unveriied account " + x.id);
            });
          }

          //save this new account in custom profiles collection
          const profileAccount: _userProfile = {
            uid: authAccount.uid,
            bio: null,
            first_name: null,
            last_name: null,
            public_uid: await GenerateUniquePublicUid(),
            email: authAccount.email!,
            username: authAccount.displayName!,
            github_access_token: null,
            github_account_id: null,
            created_on: Date.now(),
            profile_pic: unverifiedDetails!.profile_pic,
            profile_pic_filename: unverifiedDetails!.profile_pic_filename,
          };
          await db
            .collection("profiles")
            .doc(authAccount.uid)
            .set(profileAccount);

          console.log(
            "SUCCESSFULLY STORED PROFILE ACCOUNT\nBOTH AUTH AND PROFILE ACCOUTN ARE STOED IN FIREBASE!"
          );

          res.send(
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
                     document.cookie = "uid=${authAccount.uid}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
                     setTimeout(function() {
                      window.location.href = "/";
                    }, 2500);
                     </script>
                  </body>
              </html>`
          );

          break;

        default:
          apiResponse.msg = "Bad request. Invalid mode in url query.";
          res.status(400).json(apiResponse);
          break;
      }
    } catch (e) {
      apiResponse.msg =
        "There was an error while processing your request. Please try again later.";

      res.status(500).json(apiResponse);
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
