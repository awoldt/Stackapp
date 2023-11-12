/* eslint-disable @next/next/no-img-element */
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { notFound } from "next/navigation";
import CustomNav from "../../../components/CustomNav";
import { Stack } from "@/models/stacks";

export default async function ProfilePage({ params }: { params: any }) {
  console.log(params);

  const username = params.profile_username;

  // see if username exists
  const profile = await accountsCollection.findOne({ username: username });
  // get users stacks
  const userStacks = await stacksCollection
    .find({ aid: String(profile?._id) })
    .sort({ created_on: -1 })
    .toArray();

  if (profile === null) {
    notFound();
  }

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
