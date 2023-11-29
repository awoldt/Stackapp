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
    <>
      <div className="card-container-title">
        <div className="card-empty-wide">
          <h1>Privacy Policy</h1>
          <h5>This Privacy Policy outlines how we collect,
            use, and protect information obtained from users of our website.</h5>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <h4>Information We Collect</h4>
          <p>
            When you create an account on our website, we collect the following
            information: Email, Username, First Name, and Last Name</p>
          <hr />
          <h4>How We Use Your Information</h4>
          <p>
            We use the information provided during account creation for the purpose
            of managing your account, providing customer support, and ensuring the
            security of our platform.
          </p>
          <hr />
          <h4>Cookies</h4>
          <p>
            We do not use cookies to track your browsing behavior on our website.
          </p>
          <hr />
          <h4>Changes to Privacy Policy</h4>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Changes
            and clarifications will take effect immediately upon their posting on
            the website.
          </p>
          <hr />
          <p style={{ opacity: "0.65" }}>Last Updated: 11/28/2023</p>
        </div>
      </div></>
  );
}
