// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AuthenticateGithubAccount } from "@/functions";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string } | string>
) {
  const a = await AuthenticateGithubAccount(
    String(req.query.code),
    req.cookies.uid!
  );

  if (a === "github_account_in_use") {
    return res.status(400).json({
      msg: "GitHub account already in use for another Stackapp account",
    });
  } else if (a === null) {
    return res
      .status(500)
      .json({ msg: "Error while authenticating GitHub account" });
  } else {
    return res.send(`<!DOCTYPE html>
  <html lang="en" dir="ltr">
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <title>Success</title>
      </head>
      <body>
         <p>GitHub successfully connected! Redirecting.....</p>
         <script>
         setTimeout(function() {
          window.location.href = "/profile";
        }, 2500);
         </script>
      </body>
  </html>`);
  }
}
