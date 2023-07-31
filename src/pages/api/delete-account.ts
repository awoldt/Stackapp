// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DeleteAccount, DeleteStack } from "@/functions";
import { _API_NEWSTACK_RESPONSE, _stack } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string }>
) {
  const a = await DeleteAccount(req.cookies.uid!);
  if (a === null) {
    return res.status(500).json({ msg: "Error while deleting account" });
  }
  
  return res.json({ msg: "Successfully deleted account" });
}
