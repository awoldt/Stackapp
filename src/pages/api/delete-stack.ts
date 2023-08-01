// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DeleteStack } from "@/functions";
import { _API_NEWSTACK_RESPONSE, _stack } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string }>
) {
  const d = await DeleteStack(req.headers.referer!.split("/")[4]);
  if (d === null) {
    return res
      .status(500)
      .json({ msg: "There was an error while deleting stack" });
  }

  return res.json({ msg: "Successfully deleted stack" });
}
