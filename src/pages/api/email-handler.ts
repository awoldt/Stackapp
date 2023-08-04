// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { _stack, _userProfile } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

import { GenerateUniqueUid } from "@/functions";
import { db } from "../../../firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string } | string>
) {
  console.log("HANDLING EMAIL VERIFY API ROUTE");

  if (req.query.mode === undefined) {
    res.status(400).json({ msg: "Bad request" });
  } else {
    try {
      switch (req.query.mode) {
        //VERIFY EMAIL
        //store details in custom profiles collection
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
            console.log("unverified account does not exist");

            res.status(400).json({ msg: "Error while processing request" });
            break;
          }

          const unverifiedDetails = (
            await db
              .collection("unverified-accounts")
              .doc(String(req.query.id))
              .get()
          ).data();

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

          //generate new account uid
          //must be unique

          const NEW_UID = await GenerateUniqueUid();

          //save this new account in profiles collection
          const profileAccount: _userProfile = {
            uid: NEW_UID,
            bio: null,
            first_name: null,
            last_name: null,
            liked_stacks: null,
            email: unverifiedDetails!.email,
            password: unverifiedDetails!.password,
            username: unverifiedDetails!.username,
            github_access_token: null,
            github_account_id: null,
            created_on: Date.now(),
            profile_pic: unverifiedDetails!.profile_pic,
            profile_pic_filename: unverifiedDetails!.profile_pic_filename,
          };
          await db.collection("profiles").doc(NEW_UID).set(profileAccount);

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
                     document.cookie = "uid=${NEW_UID}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
                     setTimeout(function() {
                      window.location.href = "/";
                    }, 2500);
                     </script>
                  </body>
              </html>`
          );

          break;

        default:
          res
            .status(400)
            .json({ msg: "Bad request. Invalid mode in url query." });
          break;
      }
    } catch (e) {
      res.status(500).json({
        msg: "There was an error while processing your request. Please try again later.",
      });
    }
  }
}
