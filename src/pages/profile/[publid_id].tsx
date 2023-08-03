/* eslint-disable @next/next/no-img-element */
import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import {
  GetPublicProfile,
  GetUserProfile,
  GetUserStacks,
  IsUserSignedIn,
} from "@/functions";
import {
  _PAGEDATA_profile,
  _PAGEDATA_stackpage,
  _stack,
  _userProfile,
} from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const profileData = await GetPublicProfile(req.url?.split("/")[2]!);
  if (profileData === null) {
    res.statusCode = 404;
    return {
      props: {
        error: true,
      },
    };
  }

  //redirect users to profile page if signed in account is public profile being viewed
  if (req.cookies.uid !== undefined) {
    const signedInUsersProfile = await GetUserProfile(req.cookies.uid);

    if (profileData.uid === signedInUsersProfile!.uid) {
      res.statusCode = 302;
      return {
        redirect: {
          destination: "/profile",
          permanent: false,
        },
      };
    }
  }

  const pageData: _PAGEDATA_profile = {
    header_tags: {
      title: `@${profileData?.username} | Stack`,
      canonical_link: `https://stackapp.xyz/profile/${profileData?.username}`,
      open_graph_tags: {
        title: `${profileData?.username} Profile`,
        url: `https://stackapp.xyz/profile/${profileData!.username}`,
        image: profileData?.profile_pic!,
      },
      description: `View ${profileData?.username} stackapp account along with all their created stacks`,
    },
    user_profile_data: profileData,
    user_stacks: await GetUserStacks(profileData!.uid),
    is_signed_in:
      (await IsUserSignedIn(req.cookies.uid)) === null ? false : true,
    is_signed_in_users_profile: false,
  };

  return {
    props: {
      page_data: pageData,
    },
  };
};

export default function Profilepage({
  page_data,
  error,
}: {
  page_data: _PAGEDATA_profile;
  error?: boolean;
}) {
  return (
    <>
      {error && <p>Profile does not exist</p>}
      {error === undefined && (
        <>
          <UniqueHeader
            title={page_data.header_tags.title}
            description={page_data.header_tags.description}
            canonicalLink={page_data.header_tags.canonical_link!}
            openGraph={page_data.header_tags.open_graph_tags}
          />
          <section>
            <Sidenav isSignedIn={page_data.is_signed_in!} />
          </section>
          <section>
            <div className="background">
              <img
                src={"/imgs/background.avif"}
                alt="background design"
                className="background-image"
              ></img>
            </div>
            <div className="header-container">
              <div className="profile-container-header">
                <div className="profile-header">
                  <div className="header">
                    {page_data.user_profile_data?.profile_pic === null && (
                      <img
                        src="/icons/noprofile.png"
                        className="profile-img"
                        alt="default profile pic"
                      />
                    )}
                    {page_data.user_profile_data?.profile_pic !== null && (
                      <img
                        src={page_data.user_profile_data!.profile_pic}
                        className="profile-img"
                        alt={
                          page_data.user_profile_data?.username + " profile pic"
                        }
                      />
                    )}

                    {page_data.user_profile_data!.first_name !== null && (
                      <h1>
                        {page_data.user_profile_data!.first_name}{" "}
                        {page_data.user_profile_data!.last_name !== null && (
                          <>{page_data.user_profile_data!.last_name}</>
                        )}
                      </h1>
                    )}

                    <h5 style={{ marginBottom: "20px" }}>
                      @{page_data.user_profile_data!.username}
                    </h5>

                    {page_data.user_profile_data!.bio !== null && (
                      <p style={{ marginBottom: "20px" }}>
                        {page_data.user_profile_data!.bio}
                      </p>
                    )}
                    {page_data.user_profile_data?.bio === null && (
                      <p>This user has not yet set up their bio.</p>
                    )}

                    {/* {page_data.user_stacks !== 0 && (
                  <p>
                    This user currently has {page_data.user_stacks!.length}{" "}
                    Stacks.
                  </p>
                )} */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {page_data.user_stacks !== 0 && (
            <section>
              <div className="card-container">
                <div className="card" style={{ textAlign: "center" }}>
                  <h3>Stacks</h3>
                  <h5>
                    {page_data.user_stacks!.length} Stacks
                    <br />
                    <br />
                  </h5>
                  {page_data.user_stacks!.map(
                    (x: Partial<_stack>, index: number) => {
                      return (
                        <a href={`/stack/${x.stack_id}`} key={index}>
                          <div className="card-container">
                            <div className="card-thumbnail">
                              <img
                                src={x.thumbnail_url}
                                alt={x.name + " stacks thumbnail picture"}
                              />
                            </div>
                          </div>
                          <h2 style={{ marginBottom: "40px" }}>{x.name}</h2>
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
            </section>
          )}

          {page_data.user_stacks === 0 && (
            <section>
              <div className="card-container">
                <div className="card" style={{ textAlign: "center" }}>
                  <h3>Stacks</h3>
                  <p>This user does not currently have any Stacks.</p>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
