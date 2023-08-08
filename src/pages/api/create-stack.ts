// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import formidable from "formidable";
import { CreateStack } from "@/functions";

const form = formidable({
  keepExtensions: true,
  allowEmptyFiles: true,
  minFileSize: 0,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string; stackId?: string }>
) {
  form.parse(req, async (err, fields, files: any) => {
    if (err) {
      return res
        .status(500)
        .json({ msg: "There was an error while processing upload" });
    }
    //make sure there is at least 1 language included in form
    if (fields.languages_used === undefined) {
      return res
        .status(400)
        .json({ msg: "You must include at least one language for each stack" });
    }

    //make sure app name and description text do not exceed their max lengths
    if (fields.app_name[0].trim().length > 100) {
      return res
        .status(400)
        .json({ msg: "Stack name cannot be more than 100 characters" });
    }
    //make sure app name and description text do not exceed their max lengths
    if (fields.app_description[0].trim().length > 2500) {
      return res
        .status(400)
        .json({ msg: "Stack description cannot be more than 2500 characters" });
    }

    const s = await CreateStack(files, fields, req.cookies.uid!);

    return res.json({ msg: "Successfully created stack", stackId: s!.id });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
