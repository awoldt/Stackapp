// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { _API_NEWSTACK_RESPONSE, _stack } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string; newNumberOfLikes?: number }>
) {
  try {
    const body = JSON.parse(req.body);
    console.log(body);

    //add like to stack
    await db.collection(process.env.STACKS_DB!).doc(body.sid).update({
      likes: body.nl,
    });

    const prevLikedStacks = (
      await db.collection("profiles").doc(req.cookies.uid!).get()
    ).data();
    //add liked stack to users profile
    await db
      .collection("profiles")
      .doc(req.cookies.uid!)
      .update({
        liked_stacks:
          prevLikedStacks!.liked_stacks === null
            ? [body.sid]
            : [...prevLikedStacks!.liked_stacks, body.sid],
      });

    return res.json({
      msg: "Successfully liked stack",
      newNumberOfLikes: body.nl,
    });
  } catch (e) {
    return res.status(500).json({ msg: "Error while liking stack" });
  }
}
