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
          <p className="subheading">
            This Privacy Policy outlines how we collect, use, and protect
            information obtained from users of our website.
          </p>
        </div>
      </div>

      <div className="card-container" style={{ height: "60vh" }}>
        <div className="card">
          <h2 className="subheading" style={{ fontWeight: 800 }}>Information We Collect</h2>
          <p>
            When you create an account on our website, we collect the following
            information: Email, Username, First Name, and Last Name
          </p>
          <hr />
          <h2 className="subheading" style={{ fontWeight: 800 }}>How We Use Your Information</h2>
          <p>
            We use the information provided during account creation for the
            purpose of managing your account, providing customer support, and
            ensuring the security of our platform.
          </p>
          <hr />
          <h2 className="subheading" style={{ fontWeight: 800 }}>Cookies</h2>
          <p>
            We do not use cookies to track your browsing behavior on our
            website.
          </p>
          <hr />
          <h2 className="subheading" style={{ fontWeight: 800 }}>Changes to Privacy Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time.
            Changes and clarifications will take effect immediately upon their
            posting on the website.
          </p>
          <hr />
          <hr />
          <p style={{ opacity: "0.65", textAlign: "center" }}>Last Updated: 11/28/2023</p>
        </div>
      </div>
    </>
  );
}
