import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const emailClient = new SESClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

import { accountsCollection, signInLinksCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const reqBody = await request.json();

    // 1. make sure account with either email or username exists
    const account = await accountsCollection.findOne({
      $or: [
        { email: reqBody.email_username_input.trim() },
        { username: reqBody.email_username_input.trim() },
      ],
    });

    if (account === null) {
      return Response.json(
        {
          message: "Account does not exist.",
        },
        { status: 400 }
      );
    }

    // 2. create a sign in link
    const signInLinkDoc = await signInLinksCollection.insertOne({
      aid: String(account._id),
      expires: new Date().getTime() + 300000, // 5 mins before link expires
    });

    // 3. send verification link to email
    const emailInput = {
      Source: "stackbot@stackapp.xyz",
      Destination: {
        ToAddresses: [account.email],
      },
      Message: {
        Subject: {
          Data: "Sign into your Stack Account.",
          Charset: "utf-8",
        },
        Body: {
          Html: {
            Data:
              "Click the following link to Login into your Stack Account. - " +
              `${process.env.EMAIL_VERIFICATION_HOST}/api/signin?id=${String(
                signInLinkDoc.insertedId
              )}`,
            Charset: "utf-8",
          },
        },
      },
      source: "Stackapp",
      SourceArn: process.env.AWS_SES_SOURCE_ARN,
    };

    await emailClient.send(new SendEmailCommand(emailInput));

    return Response.json(
      {
        message: "A login link has been sent to your email.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json({ message: "error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    // 1. check if id query is valid
    const id = new URLSearchParams(new URL(request.url).search).get("id");

    if (id === null) {
      return Response.json({ data: "bad request" }, { status: 400 });
    }
    if (!ObjectId.isValid(id)) {
      return Response.json({ data: "bad request" }, { status: 400 });
    }

    // 2. check to see if sign in document exists
    const account = await signInLinksCollection.findOne({
      _id: new ObjectId(id),
    });

    if (account === null) {
      return Response.json(
        { data: "link expired or invalid" },
        { status: 400 }
      );
    }
    // make sure still valid
    if (account.expires < new Date().getTime()) {
      await signInLinksCollection.deleteOne({
        _id: new ObjectId(id),
      });

      return Response.json(
        { data: "link expired or invalid" },
        { status: 400 }
      );
    }

    // 3. set cookie
    // a_id -> "account id"
    cookies().set("a_id", String(account.aid), {
      expires: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 3,
        new Date().getDate()
      ),
      secure: true,
    });

    // 4. delete sign in doc
    await signInLinksCollection.deleteOne({
      _id: new ObjectId(id),
    });

    return new Response(
      `<!DOCTYPE html>
        <html lang="en" dir="ltr">
            <body>
              <script>
                window.location.href = "/profile";
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
    return Response.json({ message: "error" }, { status: 500 });
  }
}
