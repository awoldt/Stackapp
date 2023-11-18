import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { AuthenticateGithubAccount } from "@/functions";

export async function GET(request: Request) {
  const cookieStore = cookies();
  
  if (cookieStore.get("a_id") === undefined) {
    return Response.json(
      {
        message: "No account cookie in request",
      },
      { status: 400 }
    );
  }

  if (!ObjectId.isValid(cookieStore.get("a_id")!.value)) {
    return Response.json(
      {
        message: "Invalid account cookie",
      },
      { status: 400 }
    );
  }

  try {
    const code = new URLSearchParams(new URL(request.url).search).get("code");
    if (code === null) {
      return Response.json(
        {
          message: "No code query in url",
        },
        { status: 500 }
      );
    }

    const a = await AuthenticateGithubAccount(
      code,
      cookieStore.get("a_id")!.value
    );

    if (a === "github_account_in_use") {
      return Response.json(
        {
          message:
            "GitHub account already associated with another Stack account",
        },
        { status: 400 }
      );
    } else if (a === null) {
      return Response.json(
        {
          message: "Error while authenticating GitHub account",
        },
        { status: 500 }
      );
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
                    window.location.href = "/profile/edit";
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
    return Response.json({ message: "error" }, { status: 500 });
  }
}
