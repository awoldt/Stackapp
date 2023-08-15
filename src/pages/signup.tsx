import InvalidCookie from "@/components/InvalidUidCookie";
import Spinner from "@/components/Spinner";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { IsUserSignedIn } from "@/functions";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import { GetServerSideProps } from "next";
import { useEffect, useRef, useState } from "react";
import Sidenav from "@/components/Sidenav";

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
  const emailInputRef = useRef<HTMLInputElement>(null);
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [error, setError] = useState<[boolean, null | string, null | string]>([
    false,
    null,
    null,
  ]); //[true, "no_account", "Account does not exist"]

  useEffect(() => {
    switch (error[1]) {
      case "email_already_in_use":
        emailInputRef.current!.style.border = "2px solid red";
        break;
      case "no_space_username":
        usernameInputRef.current!.style.border = "2px solid red";
        break;
      case "username_already_in_use":
        usernameInputRef.current!.style.border = "2px solid red";
        break;
    }
  }, [error]);
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
            {page_data.is_signed_in && <Sidenav isSignedIn={true} />}
            {!page_data.is_signed_in && <Sidenav isSignedIn={false} />}
          </section>

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
                <h1 className="splash" style={{ marginTop: "5%" }}>
                  <a href={"/"}>Stack</a>
                </h1>
                <p className="subtitle" style={{ paddingBottom: "10px" }}>
                  Sign up to start Stacking.
                  <a href={"/signin"} className="nav-element">
                    Sign in.
                  </a>
                </p>
              </div>
            </div>

            <div className="card-container">
              <div className="card-registration"
                style={{ paddingBottom: "0px" }}>
                {!showSuccessMessage && (
                  <>
                    <form
                      onChange={() => {
                        if (
                          emailInputRef.current!.style.border ===
                          "2px solid red"
                        ) {
                          emailInputRef.current!.style.border =
                            "2px solid rgba(0, 0, 0, 0.065)";
                        }

                        if (
                          firstNameInputRef.current!.style.border ===
                          "2px solid red"
                        ) {
                          firstNameInputRef.current!.style.border =
                            "2px solid rgba(0, 0, 0, 0.065)";
                        }
                        if (
                          lastNameInputRef.current!.style.border ===
                          "2px solid red"
                        ) {
                          lastNameInputRef.current!.style.border =
                            "2px solid rgba(0, 0, 0, 0.065)";
                        }
                        if (
                          usernameInputRef.current!.style.border ===
                          "2px solid red"
                        ) {
                          usernameInputRef.current!.style.border =
                            "2px solid rgba(0, 0, 0, 0.065)";
                        }
                        if (
                          passwordInputRef.current!.style.border ===
                          "2px solid red"
                        ) {
                          passwordInputRef.current!.style.border =
                            "2px solid rgba(0, 0, 0, 0.065)";
                        }

                        if (error[0]) {
                          setError([false, null, null]);
                        }
                      }}
                      onSubmit={async (e) => {
                        setLoading(true);
                        e.preventDefault();

                        try {
                          const req = await fetch("/api/signup", {
                            method: "POST",
                            body: JSON.stringify({
                              e: emailInputRef.current!.value,
                              fname: firstNameInputRef.current!.value,
                              lname: lastNameInputRef.current!.value,
                              u: usernameInputRef.current!.value,
                              p: passwordInputRef.current!.value,
                            }),
                            headers: {
                              "Content-Type": "application/json",
                            },
                          });
                          const data = await req.json();

                          if (req.status === 200) {
                            setLoading(false);
                            setShowSuccessMessage(true);
                          } else {
                            setLoading(false);
                            setError([true, data.errCode, data.msg]);
                          }
                        } catch (e) {
                          setLoading(false);
                          console.log(e);
                          setError([true, null, "Error while submitting form"]); //no errCode, just display message
                        }
                      }}
                    >
                      <input
                        ref={emailInputRef}
                        type="email"
                        name="app_signup_email"
                        placeholder="Email"
                        required
                      />
                      <input
                        type="text"
                        ref={firstNameInputRef}
                        name="app_signup_firstname"
                        placeholder="First Name"
                        maxLength={25}
                        required
                      />
                      <input
                        type="text"
                        ref={lastNameInputRef}
                        name="app_signup_lastname"
                        placeholder="Last Name"
                        maxLength={25}
                        required
                      />
                      <input
                        ref={usernameInputRef}
                        type="text"
                        name="app_signup_username"
                        placeholder="Username"
                        maxLength={25}
                        required
                      />
                      <input
                        ref={passwordInputRef}
                        type="password"
                        name="app_signup_password"
                        placeholder="Password"
                        style={{ marginBottom: "0px" }}
                        required
                      />
                      {error[0] && (
                        <p
                          style={{
                            color: "red",
                            margin: "0px",
                            padding: "0px",
                          }}
                        >
                          {error[2]}
                        </p>
                      )}
                      {!loading && (
                        <button
                          className="btn-create"
                          style={{ width: "100%", marginTop: "40px" }}
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
                      <div style={{ width: "100%", marginTop: "40px" }}>
                        {loading && <Spinner />}
                      </div>
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
