/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { IsUserSignedIn } from "@/functions";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import UniqueHeader from "@/components/UniqueHeaderTags";
import InvalidCookie from "@/components/InvalidUidCookie";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const signedIn = await IsUserSignedIn(req.cookies.uid);

  if (signedIn) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  } else {
    const pageData: DEFAULT_PAGE_LAYOUT = {
      header_tags: {
        title: "Modern Tech Stack Visualization | Stack",
        description:
          "Stackapp is a platform that empowers developers and designers to create beautifully designed web pages showcasing the most important details of their tech stacks.",
        canonical_link: "https://stackapp.xyz",
        open_graph_tags: {
          title: "Stack | A Platform for Modern Tech Stack Visualization",
          url: "https://stackapp.xyz",
          image: "https://stackapp.xyz/favicon.ico",
        },
      },
      is_signed_in: signedIn,
    };

    return {
      props: {
        page_data: pageData,
      },
    };
  }
};

export default function Home({
  page_data,
}: {
  page_data: DEFAULT_PAGE_LAYOUT;
}) {
  return (
    <>
      {page_data.is_signed_in === "remove_uid_cookie" && (
        <InvalidCookie redirectUrl="/" />
      )}
      {page_data.is_signed_in !== "remove_uid_cookie" && (
        <>
          <UniqueHeader
            title={page_data.header_tags.title}
            description={page_data.header_tags.description}
            canonicalLink={page_data.header_tags.canonical_link!}
            openGraph={page_data.header_tags.open_graph_tags}
          />
          <main>
            <section>
              <div className="background">
                <img
                  src={"/imgs/background.avif"}
                  alt="background design"
                  className="background-image"
                ></img>
              </div>
              <div className="card-container">
                <div className="card-empty" style={{ paddingTop: "0px" }}>
                  <h1 className="splash">Stack</h1>
                  <h4 style={{ paddingBottom: "20px" }}>
                    A platform designed for modern tech stack visualization.
                  </h4>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a href={"/signin"} className="btn-landing">
                    <img
                      src="/icons/signin.svg"
                      className="white-svg"
                      alt="signin logo"
                      width={25}
                      height={15}
                    />
                    Sign In
                  </a>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a href={"/signup"} className="btn-landing">
                    <img
                      src="/icons/signup.svg"
                      className="white-svg"
                      alt="signup logo"
                      width={25}
                      height={15}
                    />
                    Sign Up
                  </a>
                </div>
              </div>

              <div className="card-container" style={{ paddingTop: "20px" }}>
                <div className="card">
                  <p>
                    Stack is a platform that empowers developers and designers
                    to create beautifully designed web pages showcasing the most
                    important details of their tech stacks. Stack allows users
                    to accelerate the tech stack development process through a
                    user-friendly interface and intuitive tools. Every Stack
                    contains essential information regarding the tech stack
                    development process. Easily display the Languages,
                    Databases, Cloud Services, APIs, and Frameworks your tech
                    stack is built upon. Every Stack includes an application
                    description, URL, and images.
                    <br />
                    <br />
                    Whether you&apos;re an individual developer looking to
                    showcase your latest project or a team wanting to maintain a
                    centralized repository of your technology choices, Stack
                    provides an effective solution. By combining aesthetics with
                    functionality, Stack enhances the communication of complex
                    technical concepts, allowing developers and designers to
                    express their ideas clearly and engagingly. The result is a
                    platform that supports innovation and collaboration within
                    the ever-evolving world of software development.
                  </p>
                </div>
              </div>

              <div className="card-container" style={{ paddingTop: "0px" }}>
                <div className="card-empty" style={{ paddingTop: "0px" }}>
                  <h2>
                    Visualize your Tech Stacks
                    <br />
                    <img src="/icons/expand.svg" alt="expand icon" width={15} />
                  </h2>
                </div>
              </div>

              <div className="card-container" id="landing">
                <div
                  className="card-empty"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/imgs/landing.png"
                    style={{ width: "105%", textAlign: "center" }}
                    alt="Stack Example"
                  />
                </div>
              </div>

              <div className="card-container" id="landing-mobile">
                <div
                  className="card-empty"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/imgs/landing-mobile.png"
                    style={{ width: "105%", textAlign: "center" }}
                    alt="Stack Example"
                  />
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
