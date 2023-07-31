// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EditProfile, EditStack } from "@/functions";
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

    const s = await EditStack(
      String(req.query.stack_id),
      req.cookies.uid!,
      files.stack_icon,
      files.stack_thumbnail,
      fields
    );

    if (s === null) {
      return res
        .status(500)
        .json({ msg: "There was an error while updating stack" });
    }
    
    return res.json({ msg: "Successfully updated stack" });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
