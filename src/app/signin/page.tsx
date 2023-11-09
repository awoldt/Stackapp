import { Metadata } from "next";
import SigninForm from "../../components/forms/Signin";
import SideNav from "../../components/CustomNav";
import { cookies } from "next/headers";
import { IsValidAccountCookie } from "@/functions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login | Stack",
  description: "Sign into your Stack account",

  alternates: {
    canonical: "https://stackapp.xyz/signin",
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
      <SigninForm />
    </>
  );
}
