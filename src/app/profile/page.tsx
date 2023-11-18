/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SideNav from "../../components/CustomNav";
import { stacksCollection } from "@/services/mongodb";

export const metadata: Metadata = {
  title: null,
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Page() {
  const cookieStore = cookies();

  const account: any = await IsValidAccountCookie(cookieStore.get("a_id"));
  const userStacks = await stacksCollection
    .find({ aid: String(account._id) })
    .limit(10)
    .sort({ created_on: -1 })
    .toArray();

  metadata.title = `@${account.username} | Stack`;

  if (account === false) {
    redirect("/signup");
  } else {
    return (
      <>
        <div>
          <section>
            <SideNav isSignedIn={true} />
          </section>

          {/* USER PROFILE */}
          <section>
            <main>
              <div className="header-container">
                <div
                  className="profile-container-header"
                  style={{ marginTop: "4rem" }}
                >
                  <div className="profile-header">
                    <div className="header">
                      {account.profile_pic === null && (
                        <img
                          src="/imgs/icons/noprofile.png"
                          className="profile-img"
                          alt="basic profile pic"
                        />
                      )}
                      {account.profile_pic_filename !== null && (
                        <img
                          src={account.profile_pic_filename}
                          className="profile-img"
                          alt={`${account.username}'s profile pic`}
                        />
                      )}

                      <h1>
                        {account.first_name} {account.last_name}
                      </h1>

                      <span>@{account.username}</span>

                      {account.bio !== null && (
                        <p
                          style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        >
                          {account.bio}
                        </p>
                      )}

                      <div
                        style={{
                          marginTop: "40px",
                          marginBottom: "40px",
                        }}
                      >
                        <a
                          href={"/profile/edit"}
                          title="Edit your profile"
                          className="btn"
                        >
                          Edit Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </section>

          <div className="card-container" id="yourStacks">
            <div className="card" style={{ textAlign: "left" }}>
              <section>
                {userStacks.map((x: any, index) => {
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
                                opacity: 0.4,
                                fontSize: "14px",
                              }}
                            >
                              {x.created_on.toDateString()}
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
        </div>
      </>
    );
  }
}
