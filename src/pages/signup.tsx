import Spinner from "@/components/Spinner";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import { useRef, useState } from "react";

const pageData: DEFAULT_PAGE_LAYOUT = {
  header_tags: {
    title: "Sign Up | Stack",
    description:
      "Sign Up to create a Stack Account",
    canonical_link: "https://stackapp.xyz/signup",
    open_graph_tags: null,
  },
};
export default function CreateAccount() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [hasProfilePicture, setHasProfilePicture] = useState(false);

  return (
    <>
      <UniqueHeader
        title={pageData.header_tags.title}
        description={pageData.header_tags.description}
        canonicalLink={pageData.header_tags.canonical_link!}
        openGraph={pageData.header_tags.open_graph_tags}
      />
      <section>
        <div className="background">
          <img
            src={"/imgs/background.avif"}
            alt="background design"
            className="background-image"
          ></img>
        </div>

        <div className="card-container">
          <div className="card-empty">
            <h1 className="splash">
              <a href={"/"}>
                Stack
              </a>
            </h1>
            <h5 style={{ paddingBottom: "10px" }}>
              Create an account to sign up and start Stacking.
              <a
                href={"/signin"}
                className="nav-element"
              >Sign In.
              </a>
            </h5>
          </div>
        </div>

        <div className="card-container">
          <div className="card-registration">
            {!showSuccessMessage && (
              <>
                <form
                  ref={formRef}
                  encType="multipart/form-data"
                  onSubmit={async (e) => {
                    setLoading(true);
                    e.preventDefault();

                    try {
                      const formData = new FormData(formRef.current!);
                      !hasProfilePicture
                        ? formData.delete("profile_icon")
                        : null;
                      const req = await fetch("/api/create-account", {
                        method: "POST",
                        body: formData,
                      });
                      const data = await req.json();

                      if (req.status === 200) {
                        setLoading(false);
                        setShowSuccessMessage(true);
                      } else {
                        setLoading(false);
                        alert(data.msg);
                      }
                    } catch (e) {
                      setLoading(false);
                      console.log(e);
                      alert("Error while creating acount");
                    }
                  }}
                >
                  {/* <label style={{ marginBottom: "0px" }}>Profile Picture</label>
                  <input
                    type="file"
                    name="profile_icon"
                    onChange={(e) => {
                      if (e.target.files !== undefined) {
                        setHasProfilePicture(true);
                      } else {
                        setHasProfilePicture(false);
                      }
                    }}
                  /> */}
                  <input
                    type="email"
                    name="app_signup_email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    name="app_signup_username"
                    placeholder="Username"
                    maxLength={100}
                    required
                  />
                  <input
                    type="password"
                    name="app_signup_password"
                    placeholder="Password"
                    required
                  />
                  {!loading && (
                    <button className="btn-create" style={{ width: "100%" }}>
                      <img src="/icons/signup.svg" className="white-svg" alt="signup logo" width={25} height={15} />Sign Up
                    </button>
                  )}
                  {loading && <Spinner />}
                </form>
              </>
            )}
            {showSuccessMessage && (
              <>
                <p style={{ textAlign: "center" }}>
                  An email has been sent to your inbox.
                  <br />
                  Click the link in your email to verify your account.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
