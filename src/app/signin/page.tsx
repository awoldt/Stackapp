import { Metadata } from "next";
import SigninForm from "../../components/forms/Signin";
import SideNav from "../../components/SideNav";

export const metadata: Metadata = {
  title: "Login | Stack",
  description: "Sign into your Stack account",

  alternates: {
    canonical: "https://stackapp.xyz/signin",
  },
};

export default function Page() {
  return (
    <>
      <section>
        <SideNav />
      </section>
      <SigninForm />
    </>
  );
}
