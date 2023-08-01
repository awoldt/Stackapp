import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { IsUserSignedIn } from "@/functions";
import { DEFAULT_PAGE_LAYOUT } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let isSignedIn = null;

  if (await IsUserSignedIn(req.cookies.uid)) {
    isSignedIn = true;
  } else {
    isSignedIn = false;
  }

  return {
    props: {
      signedIn: isSignedIn,
    },
  };
};

const pageData: DEFAULT_PAGE_LAYOUT = {
  header_tags: {
    title: "About | Stack",
    description: "About Stack",
    canonical_link: "https://stackapp.xyz/about",
    open_graph_tags: null,
  },
};

export default function About({ signedIn }: { signedIn: boolean }) {
  return (
    <>
      <UniqueHeader
        title={pageData.header_tags.title}
        description={pageData.header_tags.description}
        canonicalLink={pageData.header_tags.canonical_link!}
        openGraph={pageData.header_tags.open_graph_tags}
      />
      <section>
        <Sidenav isSignedIn={signedIn} />
      </section>
      <div className="background">
        <img src="/imgs/background.avif" alt="background design" className="background-image"/>
      </div>

      <div className="card-container" style={{ paddingTop: "40px" }}>
        <div className="card-empty">
          <h1>About Stack</h1>
          <h5>Meet the development team behind the creation of Stack.</h5>
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
              <img src="/icons/linkedin.svg" alt="linkedin logo" width={25} height={40} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/awoldt"
              style={{ marginRight: "25px" }}
            >
              <img src="/icons/github.svg" alt="github logo" width={25} height={40} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://awoldt.com/"
            >
              <img src="/icons/globe.svg" alt="globe icon" width={25} height={40} />
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
              <img src="/icons/linkedin.svg" alt="linkedin logo" width={25} height={40} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Jdavenport3199"
              style={{ marginRight: "25px" }}
            >
              <img src="/icons/github.svg" alt="github logo" width={25} height={40} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://justindavenport.space/"
            >
              <img src="/icons/globe.svg" alt="globe icon" width={25} height={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
