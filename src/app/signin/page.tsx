import { Metadata } from "next";
import SigninForm from "../../components/forms/Signin";

export const metadata: Metadata = {
  title: "Signin",
  description: "Sign into your Stack account",

  alternates: {
    canonical: "https://stackapp.xyz/signin",
  },
};

export default function Page() {
  return (
    <>
      <h1>Sign in</h1>
      <p>Sign into your account!</p>
      <SigninForm />
    </>
  );
}
