import { AccountModel } from "@/models/account";
import { SendEmail } from "@/services/aws-ses";

import {
  accountsCollection,
  unverifiedAccountsColleciton,
} from "@/services/mongodb";

export async function POST(request: Request) {
  try {
    const reqBody = await request.json();
    const body = AccountModel.parse(reqBody);

    // 1. make sure email and username are not already in use
    const accountsInUse = await accountsCollection
      .find({
        $or: [{ email: body.email }, { username: body.username }],
      })
      .toArray();

    if (accountsInUse.length > 0) {
      return Response.json({ status: 500, message: "Account already in use" });
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
      return Response.json({
        status: 500,
        message: "There was an error while sending email",
      });
    }

    return Response.json({
      status: 200,
      message: "Check your inbox for the verification link",
    });
  } catch (err) {
    console.log(err);
    console.log("There was an error while parsing the request body");
    return Response.json({ status: 500, message: "not raw" });
  }
}
