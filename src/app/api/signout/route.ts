import { IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // make sure post request has legit cookie
    const c = await IsValidAccountCookie(cookies().get("a_id"));
    if (!c) {
      return Response.json(
        {
          message: "Bad request",
        },
        { status: 400 }
      );
    }

    cookies().delete("a_id");

    return Response.json(
      {
        message: "Successfully signed out!",
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json({ message: "error" }, { status: 500 });
  }
}
