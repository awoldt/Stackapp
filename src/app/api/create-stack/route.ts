import { Storage } from "@google-cloud/storage";
import fs from "fs/promises";
import path from "path";
import { uid } from "uid";

const storage = new Storage({
  keyFilename: path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "..",
    "gcp-key.json"
  ),
});
const bucket = storage.bucket("stackapp");

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const icon = form.get("stack_icon") as Blob | null;
    const buffer = Buffer.from(await icon!.arrayBuffer());

    // generate random name for image
    // make sure not already stored in google bucket

    let randomFileName = uid(25);
    while (true) {
      if (
        !(
          await bucket
            .file(`imgs/${randomFileName}.${icon!.type.split("/")[1]}`)
            .exists()
        )[0]
      ) {
        break;
      }
      randomFileName = uid(25);
    }

    // write file to temp folder
    await fs.writeFile(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "..",
        "tmp",
        `${randomFileName}.${icon!.type.split("/")[1]}`
      ),
      buffer,
      { encoding: "utf-8" }
    );

    console.log(randomFileName);

    const x = await bucket.upload(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "..",
        "tmp",
        `${randomFileName}.${icon!.type.split("/")[1]}`
      ),
      { destination: `imgs/${randomFileName}.${icon!.type.split("/")[1]}` }
    );

    console.log(x);

    return Response.json({ status: 200, message: "ok!" });
  } catch (err) {
    console.log(err);
    console.log("There was an error while parsing the request body");
    return Response.json({ status: 500, message: "error" });
  }
}
