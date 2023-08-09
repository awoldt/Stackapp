import { EditProfile } from "@/functions";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";

const form = formidable({
  keepExtensions: true,
  allowEmptyFiles: true,
  minFileSize: 0,
  maxFileSize: 2000000, //2mb
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string }>
) {
  form.parse(req, async (err, fields, files: any) => {
    if (err) {
      console.log(err);
      if (err.httpCode === 413) {
        return res.status(413).json({ msg: "File size too large" });
      }
      return res.status(500).json({
        msg: "There was an error while processing upload",
      });
    }

    //make sure username and bio do not exceed their max length
    if (fields.profile_username[0].trim().length > 100) {
      return res.status(400).json({
        msg: "Username cannot be more than 100 characters",
      });
    }
    if (fields.profile_bio[0].trim().length > 500) {
      return res.status(400).json({
        msg: "Profile bio cannot be more than 500 characters",
      });
    }

    const u = await EditProfile(req.cookies.uid!, fields, files.profile_icon);

    if (u === null) {
      return res.status(500).json({
        msg: "There was an error while updating proile",
      });
    }

    if (u === "invalid_username") {
      return res.status(400).json({ msg: "Invalid username" });
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
