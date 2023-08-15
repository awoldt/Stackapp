/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { IsUserSignedIn } from "@/functions";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import UniqueHeader from "@/components/UniqueHeaderTags";
import InvalidCookie from "@/components/InvalidUidCookie";
import Sidenav from "@/components/Sidenav";

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
            <div className="card-empty">
              <h1 className="splash">Stack</h1>
              <p className="bold" style={{ fontWeight: "500", paddingBottom: "20px" }}>
                A Platform for Modern Tech Stack Visualization
              </p>
            </div>
          </div>

          <div className="card-container">
            <div className="card-registration">
              <div className="btn-container-landing">
                <a
                  href={"/signin"}
                  className="btn-landing"
                >
                  <img
                    src="/icons/signin.svg"
                    className="white-svg"
                    alt="signin logo"
                    width={15}
                    height={15}
                  />{" "}
                  Sign In
                </a>
              </div>
              <div className="btn-container-landing">
                <a
                  href={"/signup"}
                  className="btn-landing"
                >
                  <img
                    src="/icons/signup.svg"
                    className="white-svg"
                    alt="signup logo"
                    width={15}
                    height={15}
                  />{" "}
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
