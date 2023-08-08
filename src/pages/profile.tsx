/* eslint-disable @next/next/no-img-element */
import InvalidCookie from "@/components/InvalidUidCookie";
import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import {
  GetUserProfile,
  GetUserStacks,
  GetUsersLikedStacks,
  IsUserSignedIn,
} from "@/functions";
import { _PAGEDATA_profile, _stack } from "@/types";
import { GetServerSideProps } from "next";
import { useState } from "react";

//MUST BE SIGNED IN TO VIEW THIS PAGE

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!(await IsUserSignedIn(req.cookies.uid))) {
    return {
      redirect: {
        destination: `/signin`,
        permanent: false,
      },
    };
  }

  const profileData = await GetUserProfile(req.cookies.uid);
  if (profileData === null) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const pageData: _PAGEDATA_profile = {
    header_tags: {
      title: `@${profileData!.username} | Stack`,
      canonical_link: "https://stackapp.xyz/profile",
      description: "Welcome to your Stack Profile.",
      open_graph_tags: {
        title: `Your stackapp profile`,
        image: null,
        url: `https://stackapp.xyz/profile`,
      },
    },
    user_profile_data: profileData,
    user_stacks: await GetUserStacks(req.cookies.uid),
    is_signed_in_users_profile: true, //this will always be true
    users_liked_stacks: await GetUsersLikedStacks(req.cookies.uid!),
    is_signed_in: await IsUserSignedIn(req.cookies.uid),
  };

  return {
    props: {
      page_data: pageData,
    },
  };
};

export default function Profile({
  page_data,
}: {
  page_data: _PAGEDATA_profile;
}) {
  const [view, setView] = useState<"stacks" | "liked_stacks">("stacks"); //default view is stacks

  return (
    <>
      {page_data.is_signed_in === "remove_uid_cookie" && (
        <InvalidCookie redirectUrl="/signup" />
      )}
      {page_data.is_signed_in !== "remove_uid_cookie" && (
        <>
          <UniqueHeader
            title={page_data.header_tags.title}
            description={page_data.header_tags.description}
            canonicalLink={page_data.header_tags.canonical_link!}
            openGraph={page_data.header_tags.open_graph_tags}
          />
          <div>
            <section>
              <Sidenav isSignedIn={true} />
            </section>

            {/* USER PROFILE */}
            {page_data.user_profile_data !== null && (
              <section>
                <div className="background">
                  <img
                    src={"/imgs/background.avif"}
                    alt="background design"
                    className="background-image"
                  ></img>
                </div>
                <main>
                  <div className="header-container">
                    <div className="profile-container-header">
                      <div className="profile-header">
                        <div className="header">
                          {page_data.user_profile_data.profile_pic !== null && (
                            <img
                              src={page_data.user_profile_data.profile_pic}
                              className="profile-img"
                              alt={`${page_data.user_profile_data.username}'s profile pic`}
                            />
                          )}
                          {page_data.user_profile_data.profile_pic === null && (
                            <img
                              src="/icons/noprofile.png"
                              className="profile-img"
                              alt="basic profile pic"
                            />
                          )}

                          <h1>
                            {page_data.user_profile_data.first_name}{" "}
                            {page_data.user_profile_data.last_name !== null && (
                              <>{page_data.user_profile_data.last_name}</>
                            )}
                          </h1>

                          <span>
                            @{page_data.user_profile_data.username}
                          </span>

                          {page_data.user_profile_data.bio !== null && (
                            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                              {page_data.user_profile_data.bio}
                            </p>
                          )}

                          <div
                            style={{ marginTop: "40px", marginBottom: "20px" }}
                          >
                            <a
                              href={"/profile/edit"}
                              title="Edit your profile"
                              className="btn-create"
                            >
                              <img
                                src="/icons/edit.svg"
                                className="white-svg"
                                alt="profile logo"
                                width={15}
                                height={15}
                              />{" "}
                              Edit Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-container">
                    <button
                      id="btn-yourStacks"
                      className="btn-tags"
                      style={{ marginRight: "10px", minWidth: "10%" }}
                      onClick={() => {
                        if (view !== "stacks") {
                          setView("stacks");
                        }
                      }}
                    >
                      <span style={{ color: "white" }}>
                        <img
                          className="white-svg"
                          src="/icons/stack.svg"
                          alt="globe icon"
                          width={15}
                          height={15}
                        />{" "}
                        Stacks
                      </span>
                    </button>
                    <button
                      id="btn-savedStacks"
                      className="btn-tags"
                      style={{ marginLeft: "10px", minWidth: "10%" }}
                      onClick={() => {
                        if (view !== "liked_stacks") {
                          setView("liked_stacks");
                        }
                      }}
                    >
                      <span style={{ color: "white" }}>
                        <img
                          className="white-svg"
                          src="/icons/like.svg"
                          alt="globe icon"
                          width={15}
                          height={15}
                        />{" "}
                        Liked
                      </span>
                    </button>
                  </div>

                  {view === "stacks" && (
                    <>
                      {page_data.user_stacks !== null && (
                        <section>
                          {page_data.user_stacks === 0 && (
                            <>
                              <div
                                className="card-container"
                                style={{
                                  paddingTop: "0px",
                                  paddingBottom: "40px",
                                }}
                              >
                                <div
                                  className="card"
                                  style={{
                                    textAlign: "center",
                                    paddingBottom: "80px",
                                  }}
                                >
                                  <h2>
                                    <img
                                      src="/icons/stack.svg"
                                      alt="globe icon"
                                      width={35}
                                      height={35}
                                    />{" "}
                                    Stacks
                                  </h2>
                                  <span className="subtitle">
                                    0 Stacks
                                    <br />
                                    <br />
                                  </span>
                                  <a href={"/create"} className="btn-create">
                                    <img
                                      src="/icons/create.svg"
                                      className="white-svg"
                                      alt="create logo"
                                      width={15}
                                      height={15}
                                    />{" "}
                                    Create Stack
                                  </a>
                                </div>
                              </div>
                            </>
                          )}
                          {page_data.user_stacks !== 0 &&
                            page_data.user_stacks.length > 0 && (
                              <div
                                className="card-container"
                                style={{
                                  paddingTop: "0px",
                                  paddingBottom: "80px",
                                }}
                              >
                                <div
                                  className="card"
                                  style={{ textAlign: "center" }}
                                >
                                  <h2>
                                    <img
                                      src="/icons/stack.svg"
                                      alt="globe icon"
                                      width={25}
                                      height={25}
                                    />{" "}
                                    Stacks
                                  </h2>
                                  <span className="subtitle">
                                    {page_data.user_stacks.length} Stacks
                                    <br />
                                    <br />
                                  </span>

                                  {page_data.user_stacks.map(
                                    (x: Partial<_stack>, index: number) => {
                                      return (
                                        <a
                                          href={`/stack/${x.stack_id}`}
                                          key={index}
                                        >
                                          <div className="card-container">
                                            <div className="card-thumbnail">
                                              <img
                                                src={x.thumbnail_url!}
                                                style={{ cursor: "pointer" }}
                                                alt={`${x.name} thumbnail`}
                                              />
                                            </div>
                                          </div>
                                          <span className="bold">
                                            {x.name}
                                          </span>
                                        </a>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            )}
                        </section>
                      )}
                      {page_data.user_stacks === null && (
                        <p>There was an error while fetching your Stacks.</p>
                      )}
                      {page_data.user_profile_data === null && (
                        <p>
                          There was an error while fetching your profile details
                        </p>
                      )}
                    </>
                  )}

                  {view === "liked_stacks" && (
                    <div
                      className="card-container"
                      id="savedStacks"
                      style={{
                        paddingTop: "0px",
                        paddingBottom: "40px",
                      }}
                    >
                      <div
                        className="card"
                        style={{ textAlign: "center", paddingBottom: "80px" }}
                      >
                        <h2>
                          <img
                            src="/icons/like.svg"
                            alt="globe icon"
                            width={25}
                            height={25}
                          />{" "}
                          Liked
                        </h2>
                        <span className="subtitle">
                          Only you can see what you&apos;ve Liked.
                          <br />
                          <br />
                        </span>

                        {page_data.users_liked_stacks !== "no_liked_stacks" &&
                          page_data.users_liked_stacks !== null && (
                            <>
                              <div
                                className="stack-container"
                                style={{
                                  paddingTop: "40px",
                                }}
                              >
                                {page_data.users_liked_stacks.map(
                                  (x: _stack, index: number) => {
                                    return (
                                      <a
                                        href={`/stack/${x.stack_id}`}
                                        key={index}
                                      >
                                        <div className="stack-item">
                                          <img src={x.thumbnail_url} />
                                          <span className="bold">
                                            {x.name}
                                          </span>
                                        </div>
                                      </a>
                                    );
                                  }
                                )}
                              </div>
                            </>
                          )}
                        {page_data.users_liked_stacks === "no_liked_stacks" && (
                          <a href={"/explore"} className="btn-create">
                            <img
                              src="/icons/explore.svg"
                              className="white-svg"
                              alt="explore logo"
                              width={15}
                              height={15}
                            />{" "}
                            Explore Stacks
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </main>
              </section>
            )}
          </div>
        </>
      )}
    </>
  );
}
