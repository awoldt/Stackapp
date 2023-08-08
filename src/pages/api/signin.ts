// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SignUserIn } from "@/functions";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    msg: string;
    status: "does_not_exist" | "wrong_password" | "error" | "success";
    uidCookie?: string;
  }>
) {
  const a = await SignUserIn(req.body.e, req.body.p);

  if (a === "account_doesnt_exist") {
    return res
      .status(400)
      .json({ msg: "Account does not exist.", status: "does_not_exist" });
  }
  if (a === "incorrect_password") {
    return res
      .status(400)
      .json({ msg: "Incorrect password.", status: "wrong_password" });
  }
  if (a === null) {
    return res
      .status(500)
      .json({ msg: "There was an error while signing in.", status: "error" });
  }

  return res.json({
    msg: "Successfully Signed In.",
    uidCookie: a,
    status: "success",
  });
}
