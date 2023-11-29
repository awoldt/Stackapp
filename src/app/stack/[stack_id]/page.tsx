/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import StackTechGrid from "../../../components/StackTechGrid";
import {
  GetRepoCommitLogs,
  IsValidAccountCookie,
  RepoCommitLogs,
} from "@/functions";
import StackCommitLogs from "../../../components/StackCommitLogs";

export const metadata: Metadata = {
  title: null,
  description: null,
  alternates: {
    canonical: null,
  },
  openGraph: {
    type: "website",
    url: "",
    title: "",
    description: "",
    siteName: "Stack",
    images: [
      {
        url: "",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default async function Page({ params }: { params: any }) {
  const cookieStore = cookies();

  // make sure stack id is valid
  if (!ObjectId.isValid(params.stack_id)) {
    notFound();
  }

  // check to see if stack exists
  const stackDetails = await stacksCollection.findOne({
    _id: new ObjectId(params.stack_id),
  });
  if (stackDetails === null) {
    notFound();
  }

  // get user who created stack details
  let creatorDetails = await accountsCollection.findOne({
    _id: new ObjectId(stackDetails.aid),
  });

  // stack has github repo id associated with it, get commit logs
  let commitLogs: null | "error" | RepoCommitLogs[] | "too_many_requests" =
    null;

  if (creatorDetails) {
    if (
      stackDetails.github_repo_id !== null &&
      creatorDetails.github_access_token !== null
    ) {
      commitLogs = await GetRepoCommitLogs(
        stackDetails.github_repo_id,
        creatorDetails.github_access_token
      );
    }
  }

  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  const isUsersStack =
    cookieStore.get("a_id") === undefined
      ? false
      : cookieStore.get("a_id")!.value !== stackDetails.aid
      ? false
      : true;

  metadata.title = `${stackDetails.name} | Stack`;
  metadata.description = `See the technology that went into building ${stackDetails.name}, including programming languages, databases, frameworks, and more`;
  metadata.alternates!.canonical = `https://stackapp.xyz/stack/${String(
    stackDetails._id
  )}`;
  metadata.openGraph!.title = `${stackDetails.name} Tech Stack Visualized`;
  metadata.openGraph!.description = `See the technology that went into building ${stackDetails.name}, including programming languages, databases, frameworks, and more`;
  metadata.openGraph!.url = `https://stackapp.xyz/stack/${String(
    stackDetails._id
  )}`;
  metadata.openGraph!.siteName = `Stack`;

  const i: {
    url: string;
  }[] = [{ url: `${stackDetails.thumbnail_url}` }];
  metadata.openGraph!.images = i;

  return (
    <>
      <section>
        <div className="header-container">
          <div className="title-container-header" style={{ marginTop: "4rem" }}>
            <div className="title-header">
              <div className="header">
                <img
                  src={stackDetails.icon_url}
                  className="profile-img"
                  alt={stackDetails.name + " icon"}
                />

                <h1>{`${stackDetails.name}`}</h1>

                {stackDetails.website_url !== null && (
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={stackDetails.website_url}
                      className="nav-element"
                      style={{ padding: "0px" }}
                    >
                      {new URL(stackDetails.website_url).hostname}
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
                  {stackDetails.created_on.toDateString()}
                </p> */}

                <a
                  style={{ marginTop: "10px" }}
                  className="profile-container"
                  href={`/profile/${creatorDetails?.username}`}
                >
                  <img
                    src={
                      creatorDetails?.profile_pic_filename! === null
                        ? "/imgs/icons/noprofile.png"
                        : creatorDetails?.profile_pic_filename!
                    }
                    className="user-profile-img"
                    alt={"img"}
                  />

                  <span>
                    <h5 style={{ fontWeight: 800 }}>
                      {creatorDetails?.first_name} {creatorDetails?.last_name}
                    </h5>
                    <p
                      style={{
                        opacity: "0.8",
                      }}
                    >
                      @{creatorDetails?.username}
                    </p>
                  </span>
                </a>

                {isUsersStack && (
                  <>
                    <div style={{ marginBottom: "2rem", marginTop: "2rem" }}>
                      <a
                        href={`/stack/${stackDetails._id}/edit`}
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
                  src={stackDetails.thumbnail_url}
                  alt={stackDetails.name + " thumbnail"}
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
            <p>{stackDetails.description}</p>
          </div>
        </div>
      </section>

      <StackTechGrid stackDetails={stackDetails} />

      <StackCommitLogs
        commitLogs={commitLogs}
        repoName={stackDetails.github_repo_name}
      />
    </>
  );
}
