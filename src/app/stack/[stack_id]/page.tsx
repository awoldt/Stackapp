/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";

import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import StackTechGrid from "../../../components/StackTechGrid";
import { GetStackpageData } from "@/functions";
import StackCommitLogs from "../../../components/StackCommitLogs";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const data = await GetStackpageData(params.stack_id);

  return {
    title: `${data?.stackData.name} Tech Stack`,
    description: `See the technology that went into building ${data?.stackData.name}, including programming languages, databases, frameworks, and more`,
    alternates: {
      canonical: `https://stackapp.xyz/stack/${String(data?.stackData._id)}`,
    },
    openGraph: {
      type: "website",
      url: `https://stackapp.xyz/stack/${String(data?.stackData._id)}`,
      title: `${data?.stackData.name} Tech Stack`,
      description: `See the technology that went into building ${data?.stackData.name}, including programming languages, databases, frameworks, and more`,
      siteName: "Stack",
      images: [
        {
          url: `${data?.stackData.thumbnail_url}`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: { params: any }) {
  const pageData = await GetStackpageData(params.stack_id);
  if (pageData === null) {
    return notFound();
  }

  const cookieStore = cookies();
  const isUsersStack =
    cookieStore.get("a_id") === undefined
      ? false
      : cookieStore.get("a_id")!.value !== pageData.stackData.aid
      ? false
      : true;

  return (
    <>
      <section>
        <div className="header-container">
          <div className="title-container-header" style={{ marginTop: "4rem" }}>
            <div className="title-header">
              <div className="header">
                <img
                  src={pageData.stackData.icon_url}
                  className="profile-img"
                  alt={pageData.stackData.name + " icon"}
                />

                <h1>{`${pageData.stackData.name}`}</h1>

                {pageData.stackData.website_url !== null && (
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={pageData.stackData.website_url}
                      className="nav-element"
                      style={{ padding: "0px" }}
                    >
                      {new URL(pageData.stackData.website_url).hostname}
                    </a>
                  </div>
                )}

                {/* <p
                  style={{
                    fontSize: "14px",
                    opacity: "0.8",
                    marginBottom: "1rem",
                  }}
                >
                  {pageData.stackData.created_on.toDateString()}
                </p> */}

                {pageData.creatorData === null && (
                  <p>There was an error while fetching creator data</p>
                )}
                {pageData.creatorData !== null && (
                  <>
                    <a
                      style={{ marginTop: "10px" }}
                      className="profile-container"
                      href={`/profile/${pageData.creatorData.username}`}
                    >
                      <img
                        src={
                          pageData.creatorData.profile_pic_filename! === null
                            ? "/imgs/icons/noprofile.png"
                            : pageData.creatorData.profile_pic_filename!
                        }
                        className="user-profile-img"
                        alt={"img"}
                      />

                      <span>
                        <span style={{ fontWeight: 800 }}>
                          {pageData.creatorData.first_name}{" "}
                          {pageData.creatorData.last_name}
                        </span>
                        <p
                          style={{
                            opacity: "0.8",
                          }}
                        >
                          @{pageData.creatorData.username}
                        </p>
                      </span>
                    </a>
                  </>
                )}

                {isUsersStack && (
                  <>
                    <div style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      <a
                        href={`/stack/${pageData.stackData._id}/edit`}
                        className="btn"
                      >
                        Edit Stack
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div
              className="card-container"
              style={{
                paddingBottom: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                width: "100%",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <div className="thumbnail">
                <img
                  src={pageData.stackData.thumbnail_url}
                  alt={pageData.stackData.name + " thumbnail"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="card-container">
          <div className="card">
            {/* <p style={{ opacity: "0.4" }}>DESCRIPTION</p>
            <hr /> */}
            <p>{pageData.stackData.description}</p>
          </div>
        </div>
      </section>

      <StackTechGrid stackDetails={pageData.stackData} />

      <StackCommitLogs
        commitLogs={pageData.commitLogsData}
        repoName={pageData.stackData.github_repo_name}
      />
    </>
  );
}
