import { Storage } from "@google-cloud/storage";
import path from "path";
const storage = new Storage({
  keyFilename: path.join(path.join(process.cwd(), "gcp-key.json")),
});
export const storageBucket = storage.bucket("stackapp");
