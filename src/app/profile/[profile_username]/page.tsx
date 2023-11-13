/* eslint-disable @next/next/no-img-element */
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { notFound, redirect } from "next/navigation";
import CustomNav from "../../../components/CustomNav";
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
        <CustomNav isSignedIn={true} />
      </section>
      <section>
        <div className="header-container">
          <div
            className="profile-container-header"
            style={{ marginTop: "100px" }}
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
                  <p style={{ marginTop: "20px" }}>{profile.bio}</p>
                )}
                {profile.bio === null && (
                  <p style={{ marginTop: "20px" }}>
                    This user has not yet set up their bio.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {userStacks.length !== 0 && (
        <section>
          <div
            className="card-container"
            style={{
              paddingTop: "0px",
              paddingBottom: "80px",
            }}
          >
            <div className="card" style={{ textAlign: "center" }}>
              <h2>Stacks</h2>
              <p>
                {userStacks.length} Stacks
                <br />
              </p>
              {userStacks.map((x: any, index: number) => {
                return (
                  <a href={`/stack/${x._id}`} key={index}>
                    <div className="card-container">
                      <div className="card-thumbnail">
                        <img
                          src={x.thumbnail_url}
                          alt={x.name + " stacks thumbnail picture"}
                        />
                      </div>
                    </div>
                    <span className="bold">
                      {x.name}
                      <br />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {userStacks.length === 0 && (
        <section>
          <div
            className="card-container"
            style={{
              paddingTop: "0px",
              paddingBottom: "80px",
            }}
          >
            <div className="card" style={{ textAlign: "center" }}>
              <h2>Stacks</h2>
              <p>
                This user has not posted any stacks yet
                <br />
              </p>
              {userStacks.map((x: any, index: number) => {
                return (
                  <a href={`/stack/${x._id}`} key={index}>
                    <div className="card-container">
                      <div className="card-thumbnail">
                        <img
                          src={x.thumbnail_url}
                          alt={x.name + " stacks thumbnail picture"}
                        />
                      </div>
                    </div>
                    <span className="bold">
                      {x.name}
                      <br />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
