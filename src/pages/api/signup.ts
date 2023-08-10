import type { NextApiRequest, NextApiResponse } from "next";

import { CreateAccount } from "@/functions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    msg: string;
    errCode?:
      | "email_already_in_use"
      | "no_space_username"
      | "username_already_in_use";
  }>
) {
  //make sure username is not more than 25 characters
  if (req.body.u.trim().length > 25) {
    return res
      .status(400)
      .json({ msg: "Username cannot be more than 25 characters" });
  }

  const a = await CreateAccount(
    req.body.e,
    req.body.fname,
    req.body.lname,
    req.body.u,
    req.body.p
  );

  switch (a) {
    case "email_already_in_use":
      return res
        .status(400)
        .json({ msg: "Email already in use", errCode: "email_already_in_use" });

    case "no_space_username":
      return res.status(400).json({
        msg: "Username cannot contain spaces",
        errCode: "no_space_username",
      });

    case "username_already_in_use":
      return res.status(400).json({
        msg: "Username already in use",
        errCode: "username_already_in_use",
      });

    case true:
      return res.json({
        msg: "A verification email was sent to your inbox. Click the link in the email to start using your account",
      });
  }
}
