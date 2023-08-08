// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string; newNumberOfLikes?: number }>
) {
  try {
    const body = JSON.parse(req.body);
    console.log(body);

    const prevLikedStacks = (
      await db.collection("profiles").doc(req.cookies.uid!).get()
    ).data();

    switch (body.method) {
      case "like":
        //add like to stack
        await db.collection(process.env.STACKS_DB!).doc(body.sid).update({
          likes: body.nl,
        });

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

      case "unlike":
        //remove like from stack
        await db.collection(process.env.STACKS_DB!).doc(body.sid).update({
          likes: body.nl,
        });

        //removes like
        //modifies original array
        prevLikedStacks!.liked_stacks.splice(
          prevLikedStacks!.liked_stacks.indexOf(body.sid),
          1
        );

        console.log(prevLikedStacks!.liked_stacks);

        //remove like from profiles stack
        await db
          .collection("profiles")
          .doc(req.cookies.uid!)
          .update({
            liked_stacks:
              prevLikedStacks!.liked_stacks.length === 0
                ? null
                : prevLikedStacks!.liked_stacks,
          });

        return res.json({
          msg: "Successfully removed like from stack",
          newNumberOfLikes: body.nl,
        });
    }
  } catch (e) {
    return res.status(500).json({ msg: "Error while liking/unliking stack" });
  }
}
