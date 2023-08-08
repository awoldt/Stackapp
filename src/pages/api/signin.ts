// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SignUserIn } from "@/functions";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string; uidCookie?: string }>
) {
  console.log(req.body);

  const a = await SignUserIn(req.body.e, req.body.p);

  console.log(a);

  if (a === "account_doesnt_exist") {
    return res.status(400).json({ msg: "Account does not exist" });
  }

  if (a === null) {
    return res.status(500).json({ msg: "There was an error while signing in" });
  }

  return res.json({ msg: "Successfully signed in", uidCookie: a });
}
