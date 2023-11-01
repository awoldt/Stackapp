/* eslint-disable @next/next/no-img-element */
import { IsUserSignedIn } from "@/functions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SideNav from "../../components/SideNav";

export default async function Page() {
  const cookieStore = cookies();

  const account = await IsUserSignedIn(cookieStore.get("a_id"));

  if (account === null || account === false) {
    redirect("/signup");
  } else {
    return (
      <>
        <div>
          <section>
            <SideNav />
          </section>

          {/* USER PROFILE */}
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
                      {account.profile_pic === null && (
                        <img
                          src="/imgs/icons/noprofile.png"
                          className="profile-img"
                          alt="basic profile pic"
                        />
                      )}
                      {account.profile_pic !== null && (
                        <img
                          src={account.profile_pic}
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
                          marginBottom: "20px",
                        }}
                      >
                        <a
                          href={"/profile/edit"}
                          title="Edit your profile"
                          className="btn-create"
                        >
                          <img
                            src="/imgs/icons/edit.svg"
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
            </main>
          </section>
        </div>
      </>
    );
  }
}
