import { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Spinner from "@/components/Spinner";
import { initializeApp } from "firebase/app";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import UniqueHeader from "@/components/UniqueHeaderTags";

initializeApp({
  apiKey: "AIzaSyDa1581Nb4kCqdN-hRPv0ZGB1qP3xdmmGw",
  authDomain: "stackapp-389516.firebaseapp.com",
  projectId: "stackapp-389516",
  messagingSenderId: "187783562040",
  appId: "1:187783562040:web:dd93eaba4bfbbf397877cd",
});

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
        <img src={"/imgs/background.avif"} alt="background design" className="background-image"></img>
      </div>

      <div className="card-container">
        <div className="card-empty">
          <h1 className="splash">Stack</h1>
          <h5 style={{ paddingBottom: "10px" }}>
            Looking to Stack it?
            <a
              href={"/signup"}
              style={{ padding: "8px", paddingLeft: "0px" }}
              className="nav-element"
            >
              {" "}
              Sign Up.
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
                const x = await signInWithEmailAndPassword(
                  getAuth(),
                  emailRef.current!.value,
                  passwordRef.current!.value
                );
                document.cookie = `uid=${x.user.uid}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
                setLoading(false);
                window.location.assign("/profile");
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
