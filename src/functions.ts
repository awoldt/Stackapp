import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function FilterProfanity(phrase: string) {
  try {
    const profanityWords = (
      await (
        await s3.send(
          new GetObjectCommand({
            Bucket: "stackapp-bucket",
            Key: "profanity.txt",
          })
        )
      ).Body!.transformToString()
    ).split("\n");

    // for every word in each string
    // check for profanity

    const words = phrase.replace(/\s+/g, " ").split(" ");

    let CONTAINS_PROFANITY = false;
    for (let index = 0; index < words.length; index++) {
      if (profanityWords!.includes(words[index].toLowerCase())) {
        console.log("cannot use the word " + words[index]);
        CONTAINS_PROFANITY = true;
        break;
      }
    }
    return CONTAINS_PROFANITY;
  } catch (err) {
    console.log(err);

    return null;
  }
}
