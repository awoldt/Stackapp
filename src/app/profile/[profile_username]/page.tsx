/* eslint-disable @next/next/no-img-element */
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import { GetPublicProfilepageData, IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const username = params.profile_username;
  const cookieStore = cookies();

  const pageData = await GetPublicProfilepageData(
    username,
    cookieStore.get("a_id")
  );

  if (pageData === "same_as_signedin_user") {
    redirect("/profile");
  }

  if (pageData !== null) {
    return {
      title: `${pageData?.profileData.username} Profile`,
      description: `View all the stacks that ${pageData?.profileData.username} has made`,
      alternates: {
        canonical: `https://stackapp.xyz/profile/${String(
          pageData?.profileData.username
        )}`,
      },
      openGraph: {
        type: "website",
        url: `https://stackapp.xyz/profile/${String(
          pageData?.profileData.username
        )}`,
        title: `${pageData?.profileData.username} Profile`,
        description: `View all the stacks that ${pageData?.profileData.username} has made`,
        siteName: "Stack",
        images: [
          {
            url: `${pageData?.profileData.profile_pic_filename}`,
          },
        ],
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } else {
    return {};
  }
}

export default async function ProfilePage({ params }: { params: any }) {
  const username = params.profile_username;
  const cookieStore = cookies();

  const pageData = await GetPublicProfilepageData(
    username,
    cookieStore.get("a_id")
  );

  if (pageData === "same_as_signedin_user") {
    redirect("/profile");
  }

  if (pageData === null) {
    return notFound();
  }

  return (
    <>
      <section>
        <div className="header-container" style={{ paddingBottom: "0px" }}>
          <div
            className="profile-container-header"
            style={{ marginTop: "4rem" }}
          >
            <div className="profile-header">
              <div className="header">
                {pageData.profileData.profile_pic === null && (
                  <img
                    src="/imgs/icons/noprofile.png"
                    className="profile-img"
                    alt="default profile pic"
                  />
                )}
                {pageData.profileData.profile_pic_filename !== null && (
                  <img
                    src={pageData.profileData.profile_pic_filename}
                    className="profile-img"
                    alt={pageData.profileData.username + " profile pic"}
                  />
                )}

                <h1>
                  {pageData.profileData.first_name}{" "}
                  {pageData.profileData.last_name}
                </h1>

                <span style={{ marginBottom: "20px" }}>
                  @{pageData.profileData.username}
                </span>

                {pageData.profileData.bio !== null && (
                  <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                    {pageData.profileData.bio}
                  </p>
                )}
                {pageData.profileData.bio === null && (
                  <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                    This user has not yet set up their bio.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="card-container" id="yourStacks">
        <div className="card-blank" style={{ textAlign: "left" }}>
          <section>
            {/* <h5 style={{ opacity: "0.4" }}>STACKS</h5>
            <hr /> */}
            {pageData.stackData.map((x: any, index) => {
              return (
                <div key={index}>
                  <a href={`/stack/${String(x._id)}`}>
                    <div className="profile-stack-container">
                      <div className="card-thumbnail">
                        <img src={x.thumbnail_url} />
                      </div>

                      <img
                        src={x.icon_url}
                        className="explore-stack-img"
                        alt="stack-img"
                      />

                      <div className="stack-description">
                        <h2>{x.name}</h2>

                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: "800",
                            opacity: "0.4",
                          }}
                        >
                          {x.created_on.toDateString()}
                        </p>

                        <p style={{ marginTop: "10px" }}>
                          {x.description.length > 100
                            ? x.description.slice(0, 100) + "..."
                            : x.description}
                        </p>
                      </div>
                      <div className="explore-stack-icons-container">
                        <img
                          src={`/imgs/tech/${x.languages_used[0]}.svg`}
                          className="explore-stack-icons"
                          alt="language-logo"
                        />
                        {x.databases_used !== null && (
                          <img
                            src={`/imgs/tech/${x.databases_used[0]}.svg`}
                            className="explore-stack-icons"
                            alt="database-logo"
                          />
                        )}

                        {x.clouds_used !== null && (
                          <img
                            src={`/imgs/tech/${x.clouds_used[0]}.svg`}
                            className="explore-stack-icons"
                            alt="cloud-logo"
                          />
                        )}

                        {x.apis_used !== null && (
                          <img
                            src={`/imgs/tech/${x.apis_used[0]}.svg`}
                            className="explore-stack-icons"
                            alt="api-logo"
                          />
                        )}

                        {x.frameworks_used !== null && (
                          <img
                            src={`/imgs/tech/${x.frameworks_used[0]}.svg`}
                            className="explore-stack-icons"
                            alt="framework-logo"
                          />
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}
