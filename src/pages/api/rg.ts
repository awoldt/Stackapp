//rg (remove gihub => will revoke access to personal github account data)

import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<null>
) {
  try {
    //remove github access token and account id from profile
    const a = await db.collection("profiles").doc(req.cookies.uid!).get();
    if (!a.exists) {
      return res.status(500).json(null);
    }

    await db.collection("profiles").doc(req.cookies.uid!).update({
      github_access_token: null,
      github_account_id: null,
    });

    //remove all access tokens and repo ids from each stack user owns
    const userStacks = await db
      .collection(process.env.STACKS_DB!)
      .where("github_repo_id", "!=", null)
      .get();

    if (!userStacks.empty) {
      for (const d of userStacks.docs) {
        await db.collection(process.env.STACKS_DB!).doc(d.id).update({
          github_repo_id: null,
        });
      }
    }

    return res.json(null);
  } catch (e) {
    console.log(e);

    return res.status(500).json(null);
  }
}
