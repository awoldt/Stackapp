/* eslint-disable @next/next/no-img-element */
import InvalidCookie from "@/components/InvalidUidCookie";
import ProfileBio from "@/components/ProfileBioTextarea";
import Sidenav from "@/components/Sidenav";
import Spinner from "@/components/Spinner";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { GetUserProfile, IsUserSignedIn } from "@/functions";
import { _PAGEDATA_editprofile } from "@/types";
import { GetServerSideProps } from "next";
import { useEffect, useRef, useState } from "react";

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

  const userProfile = await GetUserProfile(req.cookies.uid);
  if (userProfile === null) {
    console.log("could not get user profile");
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

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
    is_signed_in: await IsUserSignedIn(req.cookies.uid),
  };

  return {
    props: {
      page_data: pageData,
    },
  };
};

export default function EditProfile({
  page_data,
}: {
  page_data: _PAGEDATA_editprofile;
}) {
  const [loading, setLoading] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [removedGithub, setRemovedGithub] = useState(false); //only true when user revokes github access
  const [removedGithubMsg, setRemovedGithubMsg] = useState<null | string>(null);

  const [profileImgSrc, setProfileImgSrc] = useState(
    page_data.user_data?.profile_pic
  );

  const [formSubmitted, setFormSubmitted] = useState<[boolean, string | null]>([
    false,
    null,
  ]); //[showMessage, msg]

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (removedGithubMsg !== null) {
      const timer = setTimeout(() => {
        setRemovedGithubMsg(null);
      }, 2500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [removedGithubMsg]);

  useEffect(() => {
    if (formSubmitted[0]) {
      const timer = setTimeout(() => {
        setFormSubmitted([false, null]);
        setDisabledSubmit(true);
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [formSubmitted]);

  return (
    <>
      {page_data.is_signed_in === "remove_uid_cookie" && (
        <InvalidCookie redirectUrl="/signin" />
      )}
      {page_data.is_signed_in !== "remove_uid_cookie" && (
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
            <div className="card-container-title">
              <div className="card-empty">
                <h1>Edit Profile</h1>
                <p className="subtitle">Change the details of your profile.</p>
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

                      setFormSubmitted([true, res.msg]);
                    } catch (e) {
                      console.log(e);
                      setLoading(false);

                      setFormSubmitted([true, "Error"]);
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
                      src={profileImgSrc!}
                      className="profile-img"
                      alt="Proflie picture"
                    />
                  </label>

                  <input
                    type="file"
                    name="profile_icon"
                    accept="image/*"
                    onChange={async (e) => {
                      const fileInput = e.target;
                      if (fileInput.files && fileInput.files[0]) {
                        const reader = new FileReader();

                        reader.onload = (r) => {
                          setProfileImgSrc(r.target?.result?.toString()!);
                        };

                        reader.readAsDataURL(fileInput.files[0]);
                      }
                    }}
                  />

                  <input
                    type="text"
                    defaultValue={page_data.user_data?.first_name}
                    name="fname"
                  />

                  <input
                    type="text"
                    defaultValue={page_data.user_data?.last_name}
                    name="lname"
                  />

                  <input
                    type="text"
                    name="profile_username"
                    placeholder={"@" + page_data.user_data?.username}
                    maxLength={100}
                  />

                  <div style={{ textAlign: "right" }}>
                    <ProfileBio defaultText={page_data.user_data!.bio} />
                    <br />
                    <br />
                  </div>

                  {/* HAS GITHUB CONNECTED */}
                  {page_data.has_authenticated_github_account && (
                    <>
                      {!removedGithub && (
                        <>
                          <p style={{ marginBottom: "20px" }}>
                            GitHub Account connected.{" "}
                            <b>ID #{page_data.user_data?.github_account_id}</b>
                          </p>
                          <button
                            className="btn-edit"
                            type="button"
                            style={{
                              display: "block",
                              width: "100%"
                            }}
                            onClick={async () => {
                              try {
                                const req = await fetch("/api/rg", {
                                  method: "GET",
                                });
                                if (req.status === 200) {
                                  setRemovedGithub(true);
                                  setRemovedGithubMsg(
                                    "GitHub account access successfully revoked"
                                  );
                                } else {
                                  alert("Error. Please try again.");
                                }
                              } catch (e) {
                                alert("Error. Please try again.");
                              }
                            }}
                          >
                            <img
                              src="/icons/github.svg"
                              className="white-svg"
                              alt="github logo"
                            />{" "}
                            Unconnect GitHub
                          </button>
                        </>
                      )}
                      {removedGithub && (
                        <>
                          {removedGithubMsg !== null && (
                            <p style={{ marginBottom: "20px" }}>
                              <b>{removedGithubMsg}</b>
                            </p>
                          )}
                          <a
                            style={{ margin: "0px", padding: "0px" }}
                            href={`https://github.com/login/oauth/authorize?client_id=${page_data.github_client_id}`}
                            title="Authorize Stack to connect to your GitHub Account"
                          >
                            <button
                              type="button"
                              style={{ width: "100%" }}
                              className="btn-extra"
                            >
                              <img
                                src="/icons/github.svg"
                                className="white-svg"
                                alt="github logo"
                                width={15}
                                height={15}
                              />{" "}
                              Connect Github
                            </button>
                          </a>
                        </>
                      )}
                    </>
                  )}

                  {/* DOES NOT HAVE GITHUB CONNECTED */}
                  {!page_data.has_authenticated_github_account && (
                    <a
                      style={{ margin: "0px", padding: "0px" }}
                      href={`https://github.com/login/oauth/authorize?client_id=${page_data.github_client_id}`}
                      title="Authorize Stackapp to connect to your GitHub Account"
                    >
                      <button
                        type="button"
                        style={{ width: "100%" }}
                        className="btn-extra"
                      >
                        <img
                          src="/icons/github.svg"
                          className="white-svg"
                          alt="github logo"
                          width={15}
                          height={15}
                        />{" "}
                        Connect Github
                      </button>
                    </a>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}>
                    <button
                      className="btn-edit"
                      style={{ width: "100%" }}
                      type="button"
                      onClick={() => {
                        document.cookie =
                          "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        window.location.assign(window.location.href);
                      }}
                    >
                      <img
                        src="/icons/signout.svg"
                        className="white-svg"
                        alt="signout logo"
                        width={15}
                        height={15}
                      />{" "}
                      Sign Out
                    </button>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}>
                    <button
                      className="btn-delete"
                      type="button"
                      style={{ width: "100%" }}
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
                      <img
                        src="/icons/delete.svg"
                        className="white-svg"
                        alt="delete logo"
                        width={15}
                        height={15}
                      />{" "}
                      Delete Account
                    </button>
                  </div>

                  {!formSubmitted[0] && (
                    <>
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
                                <img
                                  src="/icons/update.svg"
                                  className="white-svg"
                                  alt="update logo"
                                  width={15}
                                  height={15}
                                />{" "}
                                Update Profile
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
                                <img
                                  src="/icons/update.svg"
                                  className="white-svg"
                                  alt="update logo"
                                  width={15}
                                  height={15}
                                />{" "}
                                Update Profile
                              </button>
                            </div>
                          )}
                        </>
                      )}
                      {loading && <Spinner />}
                    </>
                  )}
                  {formSubmitted[0] && <p>{formSubmitted[1]}</p>}
                </form>
              </div>
            </div>
          </section>
        </>
      )
      }
    </>
  );
}
