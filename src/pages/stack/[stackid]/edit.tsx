/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { _PAGEDATA_editstack, _repoSelectList } from "@/types";
import {
  GetRepoDetails,
  GetRepoSelect,
  GetStackDataEditPage,
  GetUserProfile,
  IsUserSignedIn,
  ReadTechValuesFromS3,
} from "@/functions";
import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { useEffect, useRef, useState } from "react";
import Spinner from "@/components/Spinner";
import StackDesctiptionTextarea from "@/components/StackDescriptionTextarea";
import InvalidCookie from "@/components/InvalidUidCookie";
import StackCheckboxs from "@/components/EditStackCheckboxs";

//MUST BE SIGNED IN TO VIEW THIS PAGE

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (!(await IsUserSignedIn(req.cookies.uid))) {
    return {
      redirect: {
        destination: `/stack/${req.url?.split("/")[2]!}`,
        permanent: false,
      },
    };
  }

  const stackData = await GetStackDataEditPage(
    req.url?.split("/")[2]!,
    req.cookies.uid!
  );
  //error while getting stack data
  if (stackData === null) {
    console.log("error getting stack data for edit page");
    return {
      redirect: {
        destination: `/stack/${req.url?.split("/")[2]!}`,
        permanent: false,
      },
    };
  }

  const userProfile = await GetUserProfile(req.cookies.uid);

  //make sure signed in user accessing page
  //actually owns the stack being edited
  if (userProfile?.uid !== stackData?.uid) {
    res.statusCode = 401;
    console.log("this user does not own this stack");
    return {
      redirect: {
        destination: `/stack/${req.url?.split("/")[2]!}`,
        permanent: false,
      },
    };
  }

  const pageData: _PAGEDATA_editstack = {
    header_tags: {
      title: `Edit ${stackData?.name} | Stack`,
      description: "Edit stack",
      open_graph_tags: null,
      canonical_link: `https://stackapp.xyz/stack/${stackData?.stack_id}/edit`,
    },
    saved_stack_data: stackData,
    repo_select_list:
      userProfile.github_access_token === null
        ? null
        : await GetRepoSelect(
          userProfile.github_access_token!,
          userProfile!.uid!
        ),
    current_repo_details:
      stackData!.github_repo_id === null
        ? null
        : await GetRepoDetails(
          userProfile.github_access_token!,
          stackData!.github_repo_id!
        ),
    tech_values: await ReadTechValuesFromS3(),
    is_signed_in: await IsUserSignedIn(req.cookies.uid),
    has_authenticated_github_account:
      userProfile === null
        ? false
        : userProfile.github_access_token === null
          ? false
          : true,
  };

  return {
    props: {
      page_data: pageData,
    },
  };
};

export default function EditStackpage({
  page_data,
}: {
  page_data: _PAGEDATA_editstack;
}) {
  const [updateStackLoading, setUpdateStackLoading] = useState(false);
  const [deleteStackLoading, setDeleteStackLoading] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const [iconImgSrc, setIconImgSrc] = useState(
    page_data.saved_stack_data?.icon_url
  );
  const [thumbnailImgSrc, setThumbnailImgSrc] = useState(
    page_data.saved_stack_data?.thumbnail_url
  );

  const [formSubmitted, setFormSubmitted] = useState<[boolean, string | null]>([
    false,
    null,
  ]); //[showMessage, msg]

  const formRef = useRef<HTMLFormElement>(null);

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
                <h1>Edit Stack</h1>
                <p className="subtitle">
                  Edit or change your Stack&apos;s current details.
                </p>
              </div>
            </div>
            <form
              onChange={(e) => {
                if (disabledSubmit) {
                  setDisabledSubmit(false);
                }
              }}
              ref={formRef}
              onSubmit={async (e) => {
                e.preventDefault();
                setUpdateStackLoading(true);
                try {
                  const req = await fetch(
                    `/api/edit-stack?stack_id=${window.location.pathname.split("/")[2]
                    }`,
                    {
                      method: "POST",
                      body: new FormData(formRef.current!),
                    }
                  );
                  const res = await req.json();
                  setFormSubmitted([true, res.msg]);
                  setUpdateStackLoading(false);
                } catch (e) {
                  console.log(e);
                  setFormSubmitted([true, "Error"]);
                  setUpdateStackLoading(false);
                }
              }}
            >
              <div className="card-container">
                <div className="create-content">
                  <label htmlFor="app_title" style={{ width: "100%" }}>
                    <input
                      type="text"
                      id="app_title"
                      name="app_name"
                      style={{ marginBottom: "0px" }}
                      defaultValue={page_data.saved_stack_data?.name}
                      placeholder="*Stack Title"
                      required
                    />
                  </label>

                  <label htmlFor="app_description" style={{ width: "100%" }}>
                    <div style={{ textAlign: "right" }}>
                      <StackDesctiptionTextarea
                        defaultText={page_data.saved_stack_data?.description}
                      />
                    </div>
                  </label>

                  <p className="subtitle">
                    *<img
                      src="/icons/fileimage.svg"
                      alt="fileimage logo"
                      width={25}
                      height={15}
                    />
                    Stack Icon
                  </p>
                  <img
                    src={iconImgSrc}
                    style={{
                      display: "block",
                      marginBottom: "20px",
                      marginTop: "0px",
                    }}
                    className="profile-img"
                  />
                  <input
                    type="file"
                    name="stack_icon"
                    accept="image/*"
                    onChange={async (e) => {
                      const fileInput = e.target;
                      if (fileInput.files && fileInput.files[0]) {
                        const reader = new FileReader();

                        reader.onload = (r) => {
                          setIconImgSrc(r.target?.result?.toString()!);
                        };

                        reader.readAsDataURL(fileInput.files[0]);
                      }
                    }}
                  />

                  <p className="subtitle">
                    *<img
                      src="/icons/fileimage.svg"
                      alt="fileimage logo"
                      width={25}
                      height={15}
                    />
                    Stack Thumbnail
                  </p>
                  <img
                    src={thumbnailImgSrc}
                    style={{
                      width: "100%",
                      display: "block",
                      marginBottom: "20px",
                      borderRadius: "4px",
                      boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.075)"
                    }}
                  />
                  <input
                    type="file"
                    name="stack_thumbnail"
                    accept="image/*"
                    onChange={async (e) => {
                      const fileInput = e.target;
                      if (fileInput.files && fileInput.files[0]) {
                        const reader = new FileReader();

                        reader.onload = (r) => {
                          setThumbnailImgSrc(r.target?.result?.toString()!);
                        };

                        reader.readAsDataURL(fileInput.files[0]);
                      }
                    }}
                  />

                  <input
                    type="url"
                    id="website_url"
                    name="website_url"
                    placeholder="Application URL"
                    defaultValue={page_data.saved_stack_data?.website_url!}
                  />

                  {page_data.has_authenticated_github_account && (
                    <>
                      {page_data.current_repo_details !== null && (
                        <>
                          <p className="subtitle">
                            <img src="/icons/github.svg" alt="github logo" />
                            <b> {page_data.current_repo_details.name}</b> is
                            linked to this Stack.
                          </p>
                        </>
                      )}
                      {page_data.current_repo_details === null && (
                        <p className="subtitle">
                          <img
                            src="/icons/github.svg"
                            alt="github logo" /> Associated GitHub Repo
                        </p>
                      )}

                      <select
                        name="githubRepoId"
                        className="btn-extra"
                        style={{ display: "block", width: "100%" }}
                      >
                        <option value="null" selected>
                          Choose Repo
                        </option>
                        {Array.isArray(page_data.repo_select_list) &&
                          page_data.repo_select_list.map(
                            (x: _repoSelectList, index: number) => {
                              return (
                                <option value={x.id} key={index}>
                                  {x.name}
                                </option>
                              );
                            }
                          )}
                      </select>
                    </>
                  )}

                  <StackCheckboxs
                    savedStackData={page_data.saved_stack_data}
                    techValues={page_data.tech_values}
                  />

                  <p className="subtitle">
                    <br />
                    <img
                      src="/icons/delete.svg"
                      alt="delete logo"
                      width={20}
                      height={15}
                    />
                    This action is irreversible, Stacks are not recoverable.
                  </p>
                  {!deleteStackLoading && (
                    <button
                      type="button"
                      className="btn-delete"
                      id="delete_stack_btn"
                      style={{
                        marginTop: "10px",
                        marginBottom: "0px",
                        width: "100%",
                      }}
                      onClick={async () => {
                        try {
                          setDeleteStackLoading(true);
                          const req = await fetch("/api/delete-stack");
                          if (req.status === 200) {
                            alert("Stack successfully deleted");
                            window.location.assign("/profile");
                          }
                          setDeleteStackLoading(false);
                        } catch (e) {
                          console.log(e);
                          alert("Error while deleting stack");
                          setDeleteStackLoading(false);
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
                      Delete Stack
                    </button>
                  )}
                  <div style={{ width: "100%", marginTop: "20px", marginBottom: "40px" }}>
                    {deleteStackLoading && <Spinner />}
                  </div>
                  {!formSubmitted[0] && (
                    <>
                      {!updateStackLoading && (
                        <>
                          {disabledSubmit && (
                            <div className="card-container"
                              style={{
                                paddingBottom: "0px",
                                marginBottom: "0px"
                              }}>
                              <button
                                disabled={true}
                                className="btn-edit"
                                type="submit"
                                style={{
                                  width: "100%",
                                  marginBottom: "0px",
                                  backgroundColor: "grey",
                                  cursor: "default"
                                }}
                              >
                                <img
                                  src="/icons/update.svg"
                                  className="white-svg"
                                  alt="update logo"
                                  width={15}
                                  height={15}
                                />{" "}
                                Update Stack
                              </button>
                            </div>
                          )}
                          {!disabledSubmit && (
                            <div className="card-container"
                              style={{
                                paddingBottom: "0px",
                                marginBottom: "0px"
                              }}>
                              <button
                                className="btn-create"
                                type="submit"
                                style={{
                                  width: "100%",
                                  marginBottom: "0px"
                                }}
                              >
                                <img
                                  src="/icons/update.svg"
                                  className="white-svg"
                                  alt="update logo"
                                  width={15}
                                  height={15}
                                />{" "}
                                Update Stack
                              </button>
                            </div>
                          )}
                        </>
                      )}
                      <div style={{ width: "100%", marginTop: "40px" }}>
                        {updateStackLoading && <Spinner />}</div>
                    </>
                  )}
                  {formSubmitted[0] && <p className="subtitle" style={{ textAlign: "center" }}>{formSubmitted[1]}</p>}
                </div>
              </div>
            </form>
          </section>
        </>
      )}
    </>
  );
}
