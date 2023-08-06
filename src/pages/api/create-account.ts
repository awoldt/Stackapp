// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DEFAULT_APIRESPONSE, _API_NEWSTACK_RESPONSE, _stack } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

import formidable from "formidable";
import { CreateAccount } from "@/functions";

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

    //make sure username is not more than 25 characters
    if (fields.app_signup_username[0].trim().length > 25) {
      return res
        .status(400)
        .json({ msg: "Username cannot be more than 25 characters" });
    }

    const a = await CreateAccount(fields, files);

    switch (a) {
      case "email_already_in_use":
        return res.status(400).json({ msg: "Email already in use" });

      case "no_space_username":
        return res.status(400).json({ msg: "Username cannot contain spaces" });

      case "username_already_in_use":
        return res.status(400).json({ msg: "Username already in use" });

      case true:
        return res.json({
          msg: "A verification email was sent to your inbox. Click the link in the email to start using your account",
        });
    }
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
