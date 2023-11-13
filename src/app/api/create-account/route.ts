import { ProfileModel } from "@/models/profile";
import { SendEmail } from "@/services/aws";

import {
  accountsCollection,
  unverifiedAccountsColleciton,
} from "@/services/mongodb";

export async function POST(request: Request) {
  try {
    const reqBody = await request.json();

    reqBody.username_lowercase = reqBody.username; // zod will auto lowercase this string
    const body = ProfileModel.parse(reqBody);

    // 1. make sure email and username are not already in use
    const accountsInUse = await accountsCollection.findOne({
      $or: [
        { email: body.email },
        { username_lowercase: body.username.toLowerCase() },
      ],
    });

    if (accountsInUse !== null) {
      return Response.json(
        { message: "Account already in use" },
        { status: 400 }
      );
    }

    // 2. store unverified account credentials in db
    const newAccount = await unverifiedAccountsColleciton.insertOne(body);

    // 3. send verification link to email
    const emailInput = {
      Source: "stackbot@stackapp.xyz",
      Destination: {
        ToAddresses: [body.email],
      },
      Message: {
        Subject: {
          Data: "Verify your Stack account",
          Charset: "utf-8",
        },
        Body: {
          Html: {
            Data:
              "Click the following link to verify your account - " +
              `${
                process.env.EMAIL_VERIFICATION_HOST
              }/api/verifyemail?id=${newAccount.insertedId.toString()}`,
            Charset: "utf-8",
          },
        },
      },
      source: "Stackapp",
      SourceArn: process.env.AWS_SES_SOURCE_ARN,
    };

    const emailResult = await SendEmail(emailInput);
    if (!emailResult) {
      return Response.json(
        {
          message: "There was an error while sending email",
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        message: "Check your inbox for the verification link",
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "There was an error while parsing the request body" },
      { status: 500 }
    );
  }
}
