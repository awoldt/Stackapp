import { Metadata } from "next";
import CreateAccountForm from "../../components/forms/CreateAccount";
import SideNav from "../../components/SideNav";

export const metadata: Metadata = {
  title: "Sign Up | Stack",
  description:
    "Create a Stack account and showcase the tech stack used to make all your favorite projects",

  alternates: {
    canonical: "https://stackapp.xyz/signup",
  },
};

export default function Page() {
  return (
    <>
      <section>
        <SideNav />
      </section>
      <CreateAccountForm />
    </>
  );
}
