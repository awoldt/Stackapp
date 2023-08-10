/* eslint-disable @next/next/no-img-element */
import InvalidCookie from "@/components/InvalidUidCookie";
import ProfileTabViews from "@/components/ProfileViewTabs";
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

                          <span>@{page_data.user_profile_data.username}</span>

                          {page_data.user_profile_data.bio !== null && (
                            <p
                              style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                              }}
                            >
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

                  <ProfileTabViews
                    view={view}
                    setView={setView}
                    pageData={page_data}
                  />
                </main>
              </section>
            )}
          </div>
        </>
      )}
    </>
  );
}
