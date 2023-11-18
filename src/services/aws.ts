import { S3Client } from "@aws-sdk/client-s3";
import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-ses";

const emailClient = new SESClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
export const s3Client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function SendEmail(emailInput: SendEmailCommandInput) {
  try {
    await emailClient.send(new SendEmailCommand(emailInput));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
