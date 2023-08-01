/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { IsUserSignedIn } from "@/functions";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import UniqueHeader from "@/components/UniqueHeaderTags";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (await IsUserSignedIn(req.cookies.uid)) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  } else {
    const pageData: DEFAULT_PAGE_LAYOUT = {
      header_tags: {
        title: "Stack | A Platform for Modern Tech Stack Visualization",
        description:
          "Stackapp is a platform that empowers developers and designers to create beautifully designed web pages showcasing the most important details of their tech stacks.",
        canonical_link: "https://stackapp.xyz",
        open_graph_tags: {
          title: "Stack | A Platform for Modern Tech Stack Visualization",
          url: "https://stackapp.xyz",
          image: "https://stackapp.xyz/favicon.ico",
        },
      },
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
              <h5 style={{ paddingBottom: "20px" }}>
                A platform designed for modern tech stack visualization.
              </h5>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href={"/signin"}
                className="btn-create"
                style={{ minWidth: "25%" }}
              >
                Sign In
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href={"/signup"}
                className="btn-create"
                style={{ minWidth: "25%" }}
              >
                Sign Up
              </a>
            </div>
          </div>

          <div className="card-container" style={{ paddingTop: "20px" }}>
            <div className="card">
              <p>
                Stack is a platform that empowers developers and designers to
                create beautifully designed web pages showcasing the most
                important details of their tech stacks. Stack allows users to
                accelerate the tech stack development process through a
                user-friendly interface and intuitive tools. Every Stack
                contains essential information regarding the tech stack
                development process. Easily display the Languages, Databases,
                Cloud Services, APIs, and Frameworks your tech stack is built
                upon. Every Stack includes an application description, URL, and
                images. Whether you&apos;re an individual developer looking to
                showcase your latest project or a team wanting to maintain a
                centralized repository of your technology choices, Stack
                provides an effective solution. By combining aesthetics with
                functionality, Stack enhances the communication of complex
                technical concepts, allowing developers and designers to express
                their ideas clearly and engagingly. The result is a platform
                that supports innovation and collaboration within the
                ever-evolving world of software development.
              </p>
            </div>
          </div>

          <div className="card-container">
            <div className="card-empty">
              <h5>
                See how you can visualize your tech Stacks.
                <br />
                <img src="/icons/expand.svg" alt="expand icon" width={15} />
              </h5>
            </div>
          </div>

          <div className="card-container">
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
        </section>
      </main>
    </>
  );
}
