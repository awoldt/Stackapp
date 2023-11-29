import { Metadata } from "next";
import CreateAccountForm from "../../components/forms/CreateAccount";
import { cookies } from "next/headers";
import { IsValidAccountCookie } from "@/functions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up | Stack",
  description: "Create a Stack Account to Start Stacking.",
  alternates: {
    canonical: "https://stackapp.xyz/signup",
  },
};

export default async function Page() {
  const cookieStore = cookies();
  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  if (account !== false) {
    redirect("/profile");
  }

  return (
    <>
      <CreateAccountForm />
    </>
  );
}
