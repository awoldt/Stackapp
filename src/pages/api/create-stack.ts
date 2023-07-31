// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { _API_NEWSTACK_RESPONSE, _stack } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

import formidable from "formidable";
import { CreateStack } from "@/functions";

const form = formidable({
  keepExtensions: true,
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
        .json({ msg: "You must include at least 1 language for each stack" });
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
