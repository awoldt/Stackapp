/* eslint-disable @next/next/no-img-element */
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import { IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Create a Stack",
  description:
    "Create you first stack by choosing the programming language you used to make the app. Then you can select others features such as databases, apis, frameworks, and more.",
  alternates: {
    canonical: "https://stackapp.xyz/create",
  },
  openGraph: {
    type: "website",
    url: "https://stackapp.xyz/create",
    title: "Create a Tech Stack Visualization",
    description:
      "Showcase how you built your app and the technology that went into building it",
    siteName: "Stack",
    images: [
      {
        url: "https://stackapp.xyz/imgs/splash/image.png",
      },
    ],
  },
};

export default async function ProfilePage({ params }: { params: any }) {
  const username = params.profile_username;
  const cookieStore = cookies();

  // see if username exists
  const profile = await accountsCollection.findOne({
    username_lowercase: username.toLowerCase(),
  });

  // if profile is currently signed in user, redirect
  const account = await IsValidAccountCookie(cookieStore.get("a_id"));
  if (account !== false && String(account._id) === String(profile?._id)) {
    redirect("/profile");
  }

  // get users stacks
  const userStacks = await stacksCollection
    .find({ aid: String(profile?._id) })
    .sort({ created_on: -1 })
    .toArray();

  if (profile === null) {
    notFound();
  }

  metadata.title = `@${profile.username} Profile | Stack`;
  metadata.alternates!.canonical = `https://stackapp.xyz/profile/${profile.username}`;
  metadata.openGraph!.title = `@${profile.username} Profile | Stack`;
  metadata.openGraph!.url = `https://stackapp.xyz/profile/${profile.username}`;
  metadata.openGraph!.siteName = `Stack`;

  const i: {
    url: string;
  }[] = [{ url: `${profile.profile_pic_filename}` }];
  metadata.openGraph!.images = i;

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
                {profile.profile_pic === null && (
                  <img
                    src="/imgs/icons/noprofile.png"
                    className="profile-img"
                    alt="default profile pic"
                  />
                )}
                {profile.profile_pic_filename !== null && (
                  <img
                    src={profile.profile_pic_filename}
                    className="profile-img"
                    alt={profile.username + " profile pic"}
                  />
                )}

                <h1>
                  {profile.first_name} {profile.last_name}
                </h1>

                <span style={{ marginBottom: "20px" }}>
                  @{profile.username}
                </span>

                {profile.bio !== null && (
                  <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                    {profile.bio}
                  </p>
                )}
                {profile.bio === null && (
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
                            fontSize: "12px",
                            fontWeight: "800",
                            opacity: "0.4"
                          }}
                        >
                          {x.created_on.toDateString()}
                        </p>
                        <p style={{ marginTop: "10px" }}>{x.description}</p>
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
