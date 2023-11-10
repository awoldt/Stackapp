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
import SideNav from "../../../components/CustomNav";

export const metadata: Metadata = {
  title: "[STACKNAME] | Stack",
  description: " ",

  alternates: {
    canonical: " ",
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

  return (
    <>
      <section>
        <SideNav isSignedIn={account === false ? false : true} />
      </section>

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
                  <div style={{ marginBottom: "10px" }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={stackDetails.website_url}
                      className="subtitle"
                      style={{ padding: "0px" }}
                    >
                      {new URL(stackDetails.website_url).hostname}
                    </a>
                  </div>
                )}

                <p
                  style={{
                    fontSize: "16px",
                    opacity: "0.85",
                    marginBottom: "1rem",
                  }}
                >
                  {stackDetails.created_on.toDateString()}
                </p>

                <a
                  className="profile-container"
                  href={creatorDetails?.username}
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
                    <h5>
                      <b>{creatorDetails?.first_name} {creatorDetails?.last_name}</b>
                    </h5>
                    <p
                      style={{
                        fontSize: "16px",
                        opacity: "0.85",
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
            <p style={{ opacity: "0.4" }}>
              DESCRIPTION
            </p>
            <hr />
            <p>{stackDetails.description}</p>
          </div>
        </div>
      </section>

      <StackTechGrid stackDetails={stackDetails} />
      <StackCommitLogs commitLogs={commitLogs} />
    </>
  );
}
