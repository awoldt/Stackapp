import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "View Stack's privacy policy",
  alternates: {
    canonical: "https://stackapp.xyz/privacy",
  },
};

export default function Page() {
  return (
    <div>
      <h1>Privacy</h1>

      <p>Last Updated: 11/28/2023</p>

      <p>
        Thank you for using Stack. This Privacy Policy outlines how we collect,
        use, and protect information obtained from users of our website.
      </p>

      <h2>Information We Collect:</h2>
      <h3>Account Information</h3>
      <p>
        When you create an account on our website, we collect the following
        information:
      </p>
      <ul>
        <li>Email</li>
        <li>Username</li>
        <li>First name</li>
        <li>Last name</li>
      </ul>

      <h2>How We Use Your Information:</h2>
      <p>
        We use the information provided during account creation for the purpose
        of managing your account, providing customer support, and ensuring the
        security of our platform.
      </p>

      <h2>Cookies:</h2>
      <p>
        We do not use cookies to track your browsing behavior on our website.
      </p>

      <h2>Changes to Privacy Policy:</h2>
      <p>
        We reserve the right to modify this Privacy Policy at any time. Changes
        and clarifications will take effect immediately upon their posting on
        the website.
      </p>
    </div>
  );
}
