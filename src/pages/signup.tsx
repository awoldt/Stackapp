import InvalidCookie from "@/components/InvalidUidCookie";
import Spinner from "@/components/Spinner";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { IsUserSignedIn } from "@/functions";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import { GetServerSideProps } from "next";
import { useRef, useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const pageData: DEFAULT_PAGE_LAYOUT = {
    header_tags: {
      title: "Sign Up | Stack",
      description: "Sign Up to create a Stack Account",
      canonical_link: "https://stackapp.xyz/signup",
      open_graph_tags: null,
    },
    is_signed_in: await IsUserSignedIn(req.cookies.uid),
  };

  return {
    props: {
      page_data: pageData,
    },
  };
};

export default function CreateAccount({
  page_data,
}: {
  page_data: DEFAULT_PAGE_LAYOUT;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [hasProfilePicture, setHasProfilePicture] = useState(false);

  return (
    <>
      {page_data.is_signed_in === "remove_uid_cookie" && (
        <InvalidCookie redirectUrl="/signup" />
      )}
      {page_data.is_signed_in !== "remove_uid_cookie" && (
        <>
          <UniqueHeader
            title={page_data.header_tags.title}
            description={page_data.header_tags.description}
            canonicalLink={page_data.header_tags.canonical_link!}
            openGraph={page_data.header_tags.open_graph_tags}
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
                  <a href={"/"}>Stack</a>
                </h1>
                <p className="subtitle" style={{ paddingBottom: "10px" }}>
                  Sign Up to start Stacking.
                  <a href={"/signin"} className="nav-element">
                    Sign In.
                  </a>
                </p>
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
                      <input
                        type="email"
                        name="app_signup_email"
                        placeholder="Email"
                        required
                      />
                      <input
                        type="text"
                        name="app_signup_firstname"
                        placeholder="First Name"
                        maxLength={25}
                        required
                      />
                      <input
                        type="text"
                        name="app_signup_lastname"
                        placeholder="Last Name"
                        maxLength={25}
                        required
                      />
                      <input
                        type="text"
                        name="app_signup_username"
                        placeholder="Username"
                        maxLength={25}
                        required
                      />
                      <input
                        type="password"
                        name="app_signup_password"
                        placeholder="Password"
                        required
                      />
                      {!loading && (
                        <button
                          className="btn-create"
                          style={{ width: "100%" }}
                        >
                          <img
                            src="/icons/signup.svg"
                            className="white-svg"
                            alt="signup logo"
                            width={15}
                            height={15}
                          />{" "}
                          Sign Up
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
      )}
    </>
  );
}
