import InvalidCookie from "@/components/InvalidUidCookie";
import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { IsUserSignedIn } from "@/functions";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const pageData: DEFAULT_PAGE_LAYOUT = {
    header_tags: {
      title: "About Stack | Stack",
      description: "About Stack",
      canonical_link: "https://stackapp.xyz/about",
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

export default function About({
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
          <section>
            {page_data.is_signed_in && <Sidenav isSignedIn={true} />}
            {!page_data.is_signed_in && <Sidenav isSignedIn={false} />}
          </section>
          
          <div className="background">
            <img
              src="/imgs/background.avif"
              alt="background design"
              className="background-image"
            />
          </div>

          <div className="card-container-title">
            <div className="card-empty">
              <h1>About Stack</h1>
              <p className="subtitle">Meet the development team behind the creation of Stack.</p>
            </div>
          </div>

          <div className="card-container">
            <div className="card-edit">
              <img src="imgs/alex.jpg" className="profile-img" />
              <h2>
                <b>Alex Breckwoldt</b>
              </h2>
              <p style={{ marginBottom: "20px" }}>
                Co-Founder / Software Engineer
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/awoldt/"
                  style={{ marginRight: "25px" }}
                >
                  <img
                    src="/icons/linkedin.svg"
                    alt="linkedin logo"
                    width={25}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/awoldt"
                  style={{ marginRight: "25px" }}
                >
                  <img
                    src="/icons/github.svg"
                    alt="github logo"
                    width={25}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://awoldt.com/"
                >
                  <img
                    src="/icons/globe.svg"
                    alt="globe icon"
                    width={25}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card-edit">
              <img src="imgs/justin.jpg" className="profile-img" />
              <h2>
                <b>Justin Davenport</b>
              </h2>
              <p style={{ marginBottom: "20px" }}>
                Co-Founder / Frontend Developer
              </p>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/justindavenport99"
                  style={{ marginRight: "25px" }}
                >
                  {" "}
                  <img
                    src="/icons/linkedin.svg"
                    alt="linkedin logo"
                    width={25}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Jdavenport3199"
                  style={{ marginRight: "25px" }}
                >
                  <img
                    src="/icons/github.svg"
                    alt="github logo"
                    width={25}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://justindavenport.space/"
                >
                  <img
                    src="/icons/globe.svg"
                    alt="globe icon"
                    width={25}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
