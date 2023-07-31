// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EditProfile } from "@/functions";
import { _API_NEWSTACK_RESPONSE, _stack, _userProfile } from "@/types";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";

const form = formidable({
  keepExtensions: true,
  allowEmptyFiles: true,
  minFileSize: 0,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string }>
) {
  form.parse(req, async (err, fields, files: any) => {
    if (err) {
      console.log(err);

      return res
        .status(500)
        .json({ msg: "There was an error while processing upload" });
    }

    const u = await EditProfile(req.cookies.uid!, fields, files.profile_icon);

    if (u === null) {
      return res
        .status(500)
        .json({ msg: "There was an error while updating proile" });
    }

    if (u === "username_already_in_use") {
      return res.status(400).json({ msg: "Username already in use" });
    }

    return res.json({ msg: "Successfully updated profile" });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
