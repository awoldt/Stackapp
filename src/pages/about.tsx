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
              <p className="subtitle">
                Learn the basics behind the Stack platform and creating Stacks.
              </p>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <h2 id="what_is_a_stack">What is Stack?</h2>
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
                images.
              </p>

              <h2 style={{ marginTop: "20px" }} id="what_is_a_stack">What are Stacks?</h2>
              <p>
                A Stack is a visual representation of the technologies used to
                build an app. Every application has many moving parts that work
                together to perform specific tasks, such as updating a contact
                in a database or sending out emails in mass. During the
                development process, an application can get ever so complex,
                with many different technologies being used to achieve the
                app&apos;s primary purpose. For example, there could be multiple
                databases to store information, each with a different use case.
                One of the databases could read data faster, while the other
                could write data more quickly. Multiple APIs could be used to
                get the data needed to render a page for a client, along with a
                frontend library such as Reactjs that renders an interactive UI
                for the end user. Backend servers could be written in different
                languages based on speed, reliability, readability, etc. Stack
                takes all these parts that make an app function and provides an
                easy-to-understand and informative way to see behind the curtain
                of the applications that help us in our everyday lives.
              </p>

              <h2 style={{ marginTop: "20px" }} id="what_is_a_stack">Why Stack?</h2>
              <p>
                Whether you&apos;re an individual developer looking to showcase
                your latest project or a team wanting to maintain a centralized
                repository of your technology choices, Stack provides an
                effective solution. By combining aesthetics with functionality,
                Stack enhances the communication of complex technical concepts,
                allowing developers and designers to express their ideas clearly
                and engagingly. The result is a platform that supports
                innovation and collaboration within the ever-evolving world of
                software development.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
