/* eslint-disable @next/next/no-img-element */
import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { GetUserProfile, GetUserStacks, IsUserSignedIn } from "@/functions";
import { _PAGEDATA_profile, _stack } from "@/types";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (await IsUserSignedIn(req.cookies.uid)) {
    const profileData = await GetUserProfile(req.cookies.uid);

    const pageData: _PAGEDATA_profile = {
      header_tags: {
        title: `@${profileData!.username} | Stack`,
        canonical_link: "https://stackapp.xyz/profile",
        description: "Welcome to your stackapp profile",
        open_graph_tags: {
          title: `Your stackapp profile`,
          image: null,
          url: `https://stackapp.xyz/profile`,
        },
      },
      user_profile_data: profileData,
      user_stacks: await GetUserStacks(req.cookies.uid),
      is_signed_in_users_profile: true, //this will always be true
    };

    return {
      props: {
        page_data: pageData,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default function Profile({
  page_data,
}: {
  page_data: _PAGEDATA_profile;
}) {
  return (
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
              <img src={"/imgs/background.avif"} alt="background design" className="background-image"></img>
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

                      {page_data.user_profile_data.first_name !== null && (
                        <h1>
                          {page_data.user_profile_data.first_name}{" "}
                          {page_data.user_profile_data.last_name !== null && (
                            <>{page_data.user_profile_data.last_name}</>
                          )}
                        </h1>
                      )}

                      <h5 style={{ marginBottom: "20px" }}>
                        @{page_data.user_profile_data.username}
                      </h5>

                      {page_data.user_profile_data.bio !== null && (
                        <p style={{ marginBottom: "20px" }}>
                          {page_data.user_profile_data.bio}
                        </p>
                      )}

                      <div style={{ marginTop: "40px", marginBottom: "20px" }}>
                        <a
                          href={"/profile/edit"}
                          title="Edit your profile"
                          className="btn-create"
                        >
                          <img src="/icons/edit.svg" className="white-svg" alt="profile logo" width={25} height={15} />Edit Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* USER STACKS */}
              {page_data.user_stacks !== null && (
                <section>
                  {page_data.user_stacks === 0 && (

                    <><div
                      className="card-container"
                      style={{ paddingTop: "0px", paddingBottom: "40px" }}
                    >
                      <div className="card" style={{ textAlign: "center", paddingBottom: "80px" }}>
                        <h3>Stacks</h3>
                        <h5>
                          0 Stacks
                          <br />
                          <br />
                        </h5>
                        <a
                          href={"/create"}
                          className="btn-create"
                        >
                          <img src="/icons/create.svg" className="white-svg" alt="create logo" width={25} height={15} />Create Stack
                        </a>
                      </div>
                    </div>
                    </>
                  )}
                  {page_data.user_stacks !== 0 &&
                    page_data.user_stacks.length > 0 && (
                      <div
                        className="card-container"
                        style={{ paddingTop: "0px", paddingBottom: "40px" }}
                      >
                        <div className="card" style={{ textAlign: "center" }}>
                          <h3>Stacks</h3>
                          <h5>
                            {page_data.user_stacks.length}{" "}Stacks
                            <br />
                            <br />
                          </h5>

                          {page_data.user_stacks.map(
                            (x: Partial<_stack>, index: number) => {
                              return (
                                <a href={`/stack/${x.stack_id}`} key={index}>
                                  <div className="card-container">
                                    <div className="card-thumbnail">
                                      <img
                                        src={x.thumbnail_url!}
                                        style={{ cursor: "pointer" }}
                                        alt={`${x.name} thumbnail`}
                                      />
                                    </div>
                                  </div>
                                  <h2 style={{ marginBottom: "40px" }}>
                                    {x.name}
                                  </h2>
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
                <p>There was an error while fetching your profile details</p>
              )}
            </main>
          </section>
        )}
      </div>
    </>
  );
}
