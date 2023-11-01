import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const emailClient = new SESClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

import { accountsCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const reqBody = await request.json();

    // 1. make sure account with either email or username exists
    const account = await accountsCollection.findOne({
      $or: [
        { email: reqBody.email_username_input },
        { username: reqBody.email_username_input },
      ],
    });

    if (!account) {
      return Response.json({
        status: 400,
        message: "Account does not exist",
      });
    }

    // 2. send verification link to email
    const emailInput = {
      Source: "stackbot@stackapp.xyz",
      Destination: {
        ToAddresses: [account.email],
      },
      Message: {
        Subject: {
          Data: "Sign into your Stack account",
          Charset: "utf-8",
        },
        Body: {
          Html: {
            Data:
              "Click the following link to sign into your Stack account - " +
              `${process.env.EMAIL_VERIFICATION_HOST}/api/signin?id=${account._id}`,
            Charset: "utf-8",
          },
        },
      },
      source: "Stackapp",
      SourceArn: process.env.AWS_SES_SOURCE_ARN,
    };

    await emailClient.send(new SendEmailCommand(emailInput));

    return Response.json({
      status: 200,
      message: "Check your inbox for the sign in link",
    });
  } catch (err) {
    console.log(err);
    console.log("There was an error while parsing the request body");
    return Response.json({ status: 500, message: "error" });
  }
}

export async function GET(request: Request) {
  try {
    // 1. check if id query is valid
    const id = new URLSearchParams(new URL(request.url).search).get("id");
    if (id === null) {
      return Response.json({ status: 400, data: "bad request" });
    }
    if (!ObjectId.isValid(id)) {
      return Response.json({ status: 400, data: "bad request" });
    }

    // 2. check to see if document with id query exists
    const account = await accountsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!account) {
      return Response.json({ status: 400, data: "bad request" });
    }

    // 3. set cookie
    // a_id -> "account id"
    cookies().set("a_id", id, {
      expires: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 3,
        new Date().getDate()
      ),
      secure: true,
    });

    return new Response(
      `<!DOCTYPE html>
        <html lang="en" dir="ltr">
            <body>
              <script>
                window.location.href = "/";
              </script>
            </body>
        </html>`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  } catch (err) {
    console.log(err);
    console.log("There was an error while parsing the request body");
    return Response.json({ status: 500, message: "error" });
  }
}
