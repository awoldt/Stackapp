import { Metadata } from "next";
import CreateAccountForm from "../../components/forms/CreateAccount";
import SideNav from "../../components/CustomNav";
import { cookies } from "next/headers";
import { IsValidAccountCookie } from "@/functions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up | Stack",
  description:
    "Create a Stack account and showcase the tech stack used to make all your favorite projects",

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
      <section>
        <SideNav isSignedIn={account === false ? false : true} />
      </section>
      <CreateAccountForm />
    </>
  );
}
