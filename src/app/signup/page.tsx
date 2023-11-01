import { Metadata } from "next";
import CreateAccountForm from "../../components/forms/CreateAccount";

export const metadata: Metadata = {
  title: "Signup",
  description:
    "Create a Stack account and showcase the tech stack used to make all your favorite projects",

  alternates: {
    canonical: "https://stackapp.xyz/signup",
  },
};

export default function Page() {
  return (
    <>
      <h1>Sign up</h1>
      <CreateAccountForm />
    </>
  );
}
