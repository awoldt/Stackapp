/* eslint-disable @next/next/no-img-element */
import Sidenav from "@/components/Sidenav";
import Spinner from "@/components/Spinner";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { GetUserProfile, IsUserSignedIn } from "@/functions";
import { _PAGEDATA_editprofile } from "@/types";
import { GetServerSideProps } from "next";
import { useRef, useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (await IsUserSignedIn(req.cookies.uid)) {
    const userProfile = await GetUserProfile(req.cookies.uid);

    const pageData: _PAGEDATA_editprofile = {
      header_tags: {
        title: "Edit Profile | Stack",
        canonical_link: "https://stackapp.xyz/profile/edit",
        description: "Edit your stackapp profile",
        open_graph_tags: {
          title: "Edit your stackapp profile",
          url: "https://stackapp.xyz/profile/edit",
          image: null,
        },
      },
      user_data: userProfile,
      has_authenticated_github_account:
        userProfile?.github_access_token === null ? false : true,
      github_client_id:
        userProfile!.github_access_token === null
          ? process.env.GITHUB_CLIENT_ID!
          : null,
    };

    return {
      props: {
        page_data: pageData,
      },
    };
  } else {
    return {
      redirect: {
        destination: `/profile`,
        permanent: false,
      },
    };
  }
};

export default function EditProfile({
  page_data,
}: {
  page_data: _PAGEDATA_editprofile;
}) {
  const [loading, setLoading] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const formRef = useRef<HTMLFormElement>(null);
  return (
    <>
      <UniqueHeader
        title={page_data.header_tags.title}
        description={page_data.header_tags.description}
        canonicalLink={page_data.header_tags.canonical_link!}
        openGraph={page_data.header_tags.open_graph_tags}
      />
      <section>
        <Sidenav isSignedIn={true} />
      </section>
      <section>
        <div className="background">
          <img
            src={"/imgs/background.avif"}
            alt="background design"
            className="background-image"
          ></img>
        </div>
        <div className="card-container" style={{ paddingTop: "40px" }}>
          <div className="card-empty">
            <h1>Edit Profile</h1>
            <h5>Change the details of your profile.</h5>
          </div>
        </div>
        <div className="card-container" style={{ paddingBottom: "40px" }}>
          <div className="card-edit">
            <form
              ref={formRef}
              onChange={(e) => {
                if (disabledSubmit) {
                  setDisabledSubmit(false);
                }
              }}
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);

                try {
                  const req = await fetch("/api/edit-profile", {
                    method: "POST",
                    body: new FormData(formRef.current!),
                  });
                  const res = await req.json();
                  setLoading(false);

                  alert(res.msg);
                  if (req.status === 200) {
                    window.location.assign("/profile");
                  }
                } catch (e) {
                  console.log(e);
                  setLoading(false);

                  alert("Error while updating profile");
                }
              }}
            >
              <label
                htmlFor="profile_email_picture"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    page_data.user_data?.profile_pic === null
                      ? "/icons/noprofile.png"
                      : page_data.user_data?.profile_pic
                  }
                  className="profile-img"
                  alt="Proflie picture"
                />
              </label>

              <input type="file" name="profile_icon" accept="image/*" />

              <input
                type="text"
                defaultValue={
                  page_data.user_data?.first_name === null
                    ? ""
                    : page_data.user_data?.first_name
                }
                name="fname"
              />

              <input
                type="text"
                defaultValue={
                  page_data.user_data?.last_name === null
                    ? ""
                    : page_data.user_data?.last_name
                }
                name="lname"
              />

              <input
                type="text"
                name="profile_username"
                defaultValue={page_data.user_data?.username}
                maxLength={100}
              />

              <textarea
                name="profile_bio"
                id="profile_description"
                cols={40}
                rows={10}
                style={{ resize: "none" }}
                defaultValue={
                  page_data.user_data?.bio === null
                    ? ""
                    : page_data.user_data?.bio
                }
                maxLength={2500}
              ></textarea>

              {page_data.has_authenticated_github_account && (
                <p style={{ marginBottom: "20px" }}>
                  Your GitHub account is connected.
                  <br />
                  Account ID #{page_data.user_data?.github_account_id}
                </p>
              )}
              {!page_data.has_authenticated_github_account && (
                <>
                  {" "}
                  <a
                    href={`https://github.com/login/oauth/authorize?client_id=${page_data.github_client_id}`}
                    title="Authorize Stackapp to connect to your GitHub Account"
                  >
                    <p>Your GitHub account is not connected.</p>
                    <button type="button" className="btn-edit">
                      <img src="/icons/github.svg" className="white-svg" alt="github logo" width={25} height={15} />Connect Github
                    </button>
                  </a>
                </>
              )}

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn-edit"
                  type="button"
                  style={{ display: "block", background: "#F8333C" }}
                  onClick={async () => {
                    const c1 = confirm(
                      "Are you sure you want to delete your Stack account?"
                    );
                    if (c1) {
                      const c2 = confirm(
                        "This action is irreversible. Would you like to continue?"
                      );
                      if (c2) {
                        const c3 = confirm(
                          "Account deletion is permanant. In order to use Stack again you will need to create a new account. I understand, delete my account."
                        );

                        if (c3) {
                          try {
                            const req = await fetch("/api/delete-account");
                            if (req.status === 200) {
                              alert("Account has been successfully deleted.");

                              //this expression will remove cookie from browser
                              document.cookie =
                                "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                              window.location.assign("/");
                            }
                          } catch (e) {
                            console.log(e);
                            alert(
                              "An error occurred while attempting to delete your account."
                            );
                          }
                        }
                      }
                    }
                  }}
                >
                  <img src="/icons/delete.svg" className="white-svg" alt="delete logo" width={25} height={15} />Delete Account
                </button>
              </div>

              {!loading && (
                <>
                  {!disabledSubmit && (
                    <div className="modal-header">
                      <button
                        className="btn-create"
                        type="submit"
                        style={{ width: "100%", marginBottom: "0px" }}
                        id="edit_profile_btn"
                      >
                        <img src="/icons/update.svg" className="white-svg" alt="update logo" width={25} height={15} />Update Profile
                      </button>
                    </div>
                  )}
                  {disabledSubmit && (
                    <div className="modal-header">
                      <button
                        className="btn-create"
                        type="submit"
                        disabled={true}
                        style={{
                          width: "100%",
                          marginBottom: "0px",
                          backgroundColor: "grey",
                          cursor: "default",
                        }}
                        id="edit_profile_btn"
                      >
                        <img src="/icons/update.svg" className="white-svg" alt="update logo" width={25} height={15} />Update Profile
                      </button>
                    </div>
                  )}
                </>
              )}
              {loading && <Spinner />}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
