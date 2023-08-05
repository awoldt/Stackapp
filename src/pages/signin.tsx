import { useRef, useState } from "react";
import Spinner from "@/components/Spinner";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import UniqueHeader from "@/components/UniqueHeaderTags";

const pageData: DEFAULT_PAGE_LAYOUT = {
  header_tags: {
    title: "Sign In | Stack",
    description: "Sign In to your Stack Account",
    canonical_link: "https://stackapp.xyz/signin",
    open_graph_tags: null,
  },
};

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  return (
    <>
      <UniqueHeader
        title={pageData.header_tags.title}
        description={pageData.header_tags.description}
        canonicalLink={pageData.header_tags.canonical_link!}
        openGraph={pageData.header_tags.open_graph_tags}
      />
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
            Looking to Stack it?
            <a
              href={"/signup"}
              className="nav-element"
            >Sign Up.
            </a>
          </h5>
        </div>
      </div>

      <div className="card-container">
        <div className="card-registration">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);

              try {
                const x = await fetch("api/signin", {
                  method: "POST",
                  body: JSON.stringify({
                    e: emailRef.current!.value,
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
                  alert(data.msg);
                }
              } catch (e: any) {
                setLoading(false);
                switch (e.code) {
                  case "auth/wrong-password":
                    alert("Email or password is wrong");
                    break;

                  case "auth/user-not-found":
                    alert("Account does not exist");
                    break;
                }
              }
            }}
          >
            <input type="email" ref={emailRef} placeholder="Email" required />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
            {!loading && (
              <button className="btn-create" style={{ width: "100%" }}>
                <img
                  src="/icons/signin.svg"
                  className="white-svg"
                  alt="signin logo"
                  width={25}
                  height={15}
                />
                Sign In
              </button>
            )}
            {loading && <Spinner />}
          </form>
        </div>
      </div>
    </>
  );
}
