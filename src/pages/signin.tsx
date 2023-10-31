import { useEffect, useRef, useState } from "react";
import Spinner from "@/components/Spinner";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { GetServerSideProps } from "next";
import { IsUserSignedIn } from "@/functions";
import InvalidCookie from "@/components/InvalidUidCookie";
import Sidenav from "@/components/Sidenav";


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const pageData: DEFAULT_PAGE_LAYOUT = {
    header_tags: {
      title: "Sign In | Stack",
      description: "Sign In to your Stack Account",
      canonical_link: "https://stackapp.xyz/signin",
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

export default function Signin({
  page_data,
}: {
  page_data: DEFAULT_PAGE_LAYOUT;
}) {
  const emailUsernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<[boolean, null | string, null | string]>([
    false,
    null,
    null,
  ]); //[true, "no_account", "Account does not exist"]

  useEffect(() => {
    switch (error[1]) {
      case "does_not_exist":
        emailUsernameRef.current!.style.border = "2px solid red";
        passwordRef.current!.style.border = "2px solid red";
        break;
      case "wrong_password":
        passwordRef.current!.style.border = "2px solid red";
        break;
      case "error":
        alert("There was an error while submitting your request");
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

          <div className="background">
            <img
              src={"/imgs/background.avif"}
              alt="background design"
              className="background-image"
            ></img>
          </div>

          <div className="card-container">
            <div className="card-empty-home">
              <h1 className="splash">
                <a href={"/"}>Stack</a>
              </h1>
              <p className="subtitle" style={{ paddingBottom: "10px" }}>
                Looking to Stack it?
                <a href={"/signup"} className="nav-element">
                  Sign up.
                </a>
              </p>
            </div>
          </div>

          <div className="card-container">
            <div className="card-registration"
              style={{ paddingBottom: "0px" }}>
              {error[1] === "client_error" && (
                <p style={{ color: "red" }}>{error[2]}</p>
              )}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);

                  try {
                    const x = await fetch("api/signin", {
                      method: "POST",
                      body: JSON.stringify({
                        e: emailUsernameRef.current!.value,
                        p: passwordRef.current!.value,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    });
                    const data = await x.json();
                    if (x.status === 200) {
                      document.cookie = `uid=${data.uidCookie}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
                      window.location.assign("/profile");
                    } else {
                      setLoading(false);
                      setError([true, data.status, data.msg]);
                    }
                  } catch (e: any) {
                    setLoading(false);
                    setError([
                      true,
                      "client_error",
                      "There was an error while submitting your request",
                    ]);
                  }
                }}
                onChange={() => {
                  if (
                    emailUsernameRef.current!.style.border === "2px solid red"
                  ) {
                    emailUsernameRef.current!.style.border = "2px solid rgba(0, 0, 0, 0.065)";
                  }
                  if (passwordRef.current!.style.border === "2px solid red") {
                    passwordRef.current!.style.border = "2px solid rgba(0, 0, 0, 0.065)";
                  }
                  if (error[0]) {
                    setError([false, null, null]);
                  }
                }}
              >
                <input
                  type="text"
                  ref={emailUsernameRef}
                  placeholder="Email or Username"
                  style={{
                    margin: "0px"
                  }}
                  required
                />

                <div style={{ margin: "20px" }}>

                </div>
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                  style={{
                    margin: "0px"
                  }}
                  required
                />
                {error[0] && (
                  <p
                    style={{
                      color: "red",
                      margin: "0px",
                      padding: "0px"
                    }}
                  >
                    {error[2]}
                  </p>
                )}
                {!loading && (
                  <button className="btn-create" style={{ width: "100%", marginTop: "40px" }}>
                    <img
                      src="/icons/signin.svg"
                      className="white-svg"
                      alt="signin logo"
                      width={15}
                      height={15}
                    />{" "}
                    Sign In
                  </button>
                )}
                <div style={{ width: "100%", marginTop: "40px" }}>
                  {loading && <Spinner />}
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
