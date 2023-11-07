import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { AuthenticateGithubAccount } from "@/functions";

export async function GET(request: Request) {
  const cookieStore = cookies();
  if (cookieStore.get("a_id") === undefined) {
    return Response.json({
      status: 500,
      message: "No account cookie in request",
    });
  }

  if (!ObjectId.isValid(cookieStore.get("a_id")!.value)) {
    return Response.json({
      status: 500,
      message: "Invalid account cookie",
    });
  }

  try {
    const code = new URLSearchParams(new URL(request.url).search).get("code");
    if (code === null) {
      return Response.json({
        status: 500,
        message: "No code query in url",
      });
    }

    const a = await AuthenticateGithubAccount(
      code,
      cookieStore.get("a_id")!.value
    );

    if (a === "github_account_in_use") {
      return Response.json({
        status: 400,
        message: "GitHub account already associated with another Stack account",
      });
    } else if (a === null) {
      return Response.json({
        status: 500,
        message: "Error while authenticating GitHub account",
      });
    } else {
      return new Response(
        `<!DOCTYPE html>
            <html lang="en" dir="ltr">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                    <title>Success</title>
                </head>
                <body>
                   <p>GitHub account successfully connected! Redirecting.....</p>
                   <script>
                   setTimeout(function() {
                    window.location.href = "/profile";
                  }, 2500);
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
    }
  } catch (err) {
    console.log(err);
    console.log("There was an error while authenticating github account");
    return Response.json({ status: 500, message: "error" });
  }
}
