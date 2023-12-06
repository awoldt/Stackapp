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
            At Stack, we recognize the significance of user privacy and make it a top priority.
          </p>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <h2>
            Information Collected
          </h2>
          <p>
            When you create an account on our website, we collect certain information to enhance your user experience and provide you with our services. The information we collect includes:
            <br />
            <br />
            <b>Email:</b> We collect your email to communicate with you regarding your account, important updates, and relevant information about our services.
            <br />
            <b>Username:</b> Your chosen username helps identify you on our platform and facilitates your interactions with other users.
            <br />
            <b>First Name and Last Name:</b> We gather your first and last names to personalize your experience and, if applicable, to address you in a more personalized manner.
          </p>
          <hr />
          <hr />
          <h2>
            Use Of Information
          </h2>
          <p>
            The information collected during the account creation process is utilized for the following purposes:
            <br />
            <br />
            <b>Account Management:</b> We use your information to manage your account, including activities such as account verification, password recovery, and account-related communications.
            <br />
            <b>Customer Support:</b> Your provided details enable us to offer effective customer support, address your inquiries, and resolve any issues you may encounter while using our platform.
            <br />
            <b>Security:</b> We prioritize the security of our platform and use your information to safeguard your account, prevent unauthorized access, and ensure the overall integrity of our services.
          </p>
          <hr />
          <hr />
          <h2>
            Cookies
          </h2>
          <p>
            We want to be transparent about our use of cookies.
            Unlike some websites, we do not use cookies to track your browsing behavior on our site.
            Cookies are small pieces of data stored on your device that help improve your browsing experience, but we respect your privacy and do not use them for tracking purposes.
          </p>
          <hr />
          <hr />
          <h2>
            Future Updates
          </h2>
          <p>
            We reserve the right to update and modify this Privacy Policy to reflect changes in our practices, legal requirements, or to better serve your needs.
            Any modifications will be effective immediately upon their posting on our website.
            It is your responsibility to review this policy periodically to stay informed about how we are protecting and using your information.
            We encourage you to reach out to us if you have any concerns or questions about our Privacy Policy.
            Your privacy is important to us, and we are committed to maintaining the confidentiality and security of your personal information.
          </p>
          <hr />
          <hr />
          <p style={{ textAlign: "center", fontSize: "14px" }}>Last Updated: 11/28/2023</p>
        </div>
      </div>
    </>
  );
}
