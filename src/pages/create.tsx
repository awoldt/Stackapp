import InvalidCookie from "@/components/InvalidUidCookie";
import Sidenav from "@/components/Sidenav";
import Spinner from "@/components/Spinner";
import StackDesctiptionTextarea from "@/components/StackDescriptionTextarea";
import UniqueHeader from "@/components/UniqueHeaderTags";
import {
  GetRepoSelect,
  GetUserProfile,
  IsUserSignedIn,
  ReadTechValuesFromS3,
} from "@/functions";

import {
  _PAGEDATA_create,
  _PAGEDATA_profile,
  _repoSelectList,
  _techStackValues,
} from "@/types";
import { GetServerSideProps } from "next";
import { useRef, useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const user = await GetUserProfile(req.cookies.uid);

  const pageData: _PAGEDATA_create = {
    header_tags: {
      title: "Create a Stack | Stack",
      description:
        "Create a stack that showcases the technology that went into making your application. This can include things like languages, databases, apis, and more.",
      canonical_link: "https://stackapp.xyz/create",
      open_graph_tags: null,
    },
    has_authenticated_github_account:
      user === null ? false : user.github_access_token === null ? false : true,
    github_client_id: user === null ? null : process.env.GITHUB_CLIENT_ID!,
    repo_select_list:
      user === null
        ? null
        : user.github_access_token === null
          ? null
          : await GetRepoSelect(
            user!.github_access_token,
            String(req.cookies.uid)
          ),
    tech_values: await ReadTechValuesFromS3(),
    is_signed_in: await IsUserSignedIn(req.cookies.uid),
  };

  return {
    props: {
      page_data: pageData,
    },
  };
};

export default function Create({ page_data }: { page_data: _PAGEDATA_create }) {
  const [loading, setLoading] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const [stackSuccessfullyCreated, setStackSuccessfullyCreated] =
    useState(false);
  const [newStackID, setNewStackID] = useState<null | string>(null);

  const [showcaseIconSrc, setShowcaseIconSrc] = useState("");
  const [showcaseIcon, setShowcaseIcon] = useState(false);

  const [showcaseThumbnailSrc, setShowcaseThumbnailSrc] = useState("");
  const [showcaseThumbnail, setShowcaseThumbnail] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

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
            {page_data.is_signed_in && <Sidenav isSignedIn={true} />}
            {!page_data.is_signed_in && <Sidenav isSignedIn={false} />}
          </section>
          {!stackSuccessfullyCreated && (
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
                  <h1>Create Stack</h1>
                  <p className="subtitle">
                    Enter the details of your tech stack. Select all Languages,
                    Databases, APIs, Frameworks, and Cloud Deployment Services
                    used. Read more about what a Stack is <a href={"/about#what_is_a_stack"} style={{ padding: '0px' }}>here</a>.
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

                  setLoading(true);

                  try {
                    const req = await fetch("/api/create-stack", {
                      method: "POST",
                      body: new FormData(formRef.current!),
                    });
                    const data = await req.json();
                    setLoading(false);
                    if (req.status === 200) {
                      setNewStackID(data.stackId);
                      setStackSuccessfullyCreated(true);
                    } else {
                      alert(data.msg);
                    }
                  } catch (e) {
                    console.log(e);
                    setLoading(false);
                  }
                }}
                encType="multipart/form-data"
              >
                <div className="card-container">
                  <div className="create-content">
                    <input
                      type="text"
                      id="app_title"
                      name="app_name"
                      placeholder="*Stack Title"
                      required
                      maxLength={100}
                    />

                    <div style={{ textAlign: "right" }}>
                      <StackDesctiptionTextarea />
                      <br />
                      <br />
                    </div>

                    <label className="subtitle"
                      htmlFor="app_icon_input"
                      style={{ marginBottom: "0px" }}
                    >
                      *<img
                        src="/icons/fileimage.svg"
                        alt="fileimage logo"
                        width={25}
                        height={15}
                      />
                      Stack Icon
                    </label>
                    {showcaseIcon && (
                      <img
                        src={showcaseIconSrc}
                        width={500}
                        className="profile-img"
                        style={{
                          display: "block",
                          marginBottom: "20px",
                          marginTop: "0px",
                        }}
                      />
                    )}
                    <input
                      type="file"
                      name="stack_icon"
                      accept="image/*"
                      required
                      onChange={async (e) => {
                        const fileInput = e.target;
                        if (fileInput.files && fileInput.files[0]) {
                          const reader = new FileReader();

                          reader.onload = (r) => {
                            setShowcaseIconSrc(r.target?.result?.toString()!);
                            setShowcaseIcon(true);
                          };

                          reader.readAsDataURL(fileInput.files[0]);
                        }
                      }}
                    />

                    <label className="subtitle"
                      htmlFor="app_thumbnail_input"
                      style={{ marginBottom: "0px" }}
                    >
                      *<img
                        src="/icons/fileimage.svg"
                        alt="fileimage logo"
                        width={25}
                        height={15}
                      />
                      Stack Thumbnail
                    </label>
                    {showcaseThumbnail && (
                      <img
                        src={showcaseThumbnailSrc}
                        width={500}
                        style={{
                          width: "100%",
                          display: "block",
                          marginBottom: "20px",
                          borderRadius: "4px",
                        }}
                      />
                    )}
                    <input
                      type="file"
                      name="stack_thumbnail"
                      accept="image/*"
                      id="app_thumbnail_input"
                      required
                      onChange={async (e) => {
                        const fileInput = e.target;
                        if (fileInput.files && fileInput.files[0]) {
                          const reader = new FileReader();

                          reader.onload = (r) => {
                            setShowcaseThumbnailSrc(
                              r.target?.result?.toString()!
                            );
                            setShowcaseThumbnail(true);
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
                    />

                    {page_data.has_authenticated_github_account && (
                      <>
                        <p className="subtitle">
                          <img
                            src="/icons/github.svg"
                            alt="github logo" /> Select an associated GitHub Repo.
                        </p>
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

                    <img
                      src="/icons/code.svg"
                      alt="language"
                      width={20}
                      height={15}
                      style={{ display: "inline" }}
                    />
                    <p className="subtitle" style={{ display: "inline" }}>
                      Select all Languages used in your tech stack.
                      <br />
                      <br />
                    </p>
                    {page_data.tech_values.languages.map(
                      (x: string, index: number) => {
                        return (
                          <label key={index}>
                            <input
                              type="checkbox"
                              name="languages_used"
                              value={x}
                            />
                            <span className="checkmark"></span>
                            {x}
                          </label>
                        );
                      }
                    )}

                    <img
                      src="/icons/database-fill.svg"
                      alt="database"
                      width={20}
                      height={15}
                      style={{ display: "inline" }}
                    />
                    <p className="subtitle" style={{ display: "inline" }}>
                      Select all Databases used in your tech stack.
                      <br />
                      <br />
                    </p>
                    {page_data.tech_values.databases.map(
                      (x: string, index: number) => {
                        return (
                          <label key={index}>
                            <input
                              type="checkbox"
                              name="databases_used"
                              value={x}
                            />
                            <span className="checkmark"></span>
                            {x}
                          </label>
                        );
                      }
                    )}

                    <img
                      src="/icons/api.svg"
                      alt="api"
                      width={20}
                      height={15}
                      style={{ display: "inline" }}
                    />
                    <p className="subtitle" style={{ display: "inline" }}>
                      Select all APIs used in your tech stack.
                      <br />
                      <br />
                    </p>
                    {page_data.tech_values.apis.map(
                      (x: string, index: number) => {
                        return (
                          <label key={index}>
                            <input type="checkbox" name="apis_used" value={x} />
                            <span className="checkmark"></span>
                            {x}
                          </label>
                        );
                      }
                    )}

                    <img
                      src="/icons/cloud-fill.svg"
                      alt="cloud"
                      width={20}
                      height={15}
                      style={{ display: "inline" }}
                    />
                    <p className="subtitle" style={{ display: "inline" }}>
                      Select all Cloud Deployment Services used in your tech
                      stack.
                      <br />
                      <br />
                    </p>
                    {page_data.tech_values.clouds.map(
                      (x: string, index: number) => {
                        return (
                          <label key={index}>
                            <input
                              type="checkbox"
                              name="clouds_used"
                              value={x}
                            />
                            <span className="checkmark"></span>
                            {x}
                          </label>
                        );
                      }
                    )}

                    <img
                      src="/icons/framework.svg"
                      alt="api"
                      width={20}
                      height={15}
                      style={{ display: "inline" }}
                    />
                    <p className="subtitle" style={{ display: "inline" }}>
                      Select all Frameworks used in your tech stack.
                      <br />
                      <br />
                    </p>
                    {page_data.tech_values.frameworks.map(
                      (x: string, index: number) => {
                        return (
                          <label key={index}>
                            <input
                              type="checkbox"
                              name="frameworks_used"
                              value={x}
                            />
                            <span className="checkmark"></span>
                            {x}
                          </label>
                        );
                      }
                    )}

                    {page_data.is_signed_in && (
                      <>
                        {!loading && (
                          <>
                            {disabledSubmit && (
                              <div className="card-container">
                                <button
                                  disabled={true}
                                  id="create_stack_btn"
                                  type="submit"
                                  className="btn-create"
                                  style={{
                                    width: "100%",
                                    marginBottom: "0px",
                                    marginTop: "40px",
                                    backgroundColor: "grey",
                                    cursor: "default",
                                  }}
                                >
                                  <img
                                    src="/icons/create.svg"
                                    className="white-svg"
                                    alt="create logo"
                                    width={15}
                                    height={15}
                                  />{" "}
                                  Create Stack
                                </button>
                              </div>
                            )}
                            {!disabledSubmit && (
                              <div className="card-container">
                                <button
                                  id="create_stack_btn"
                                  type="submit"
                                  className="btn-create"
                                  style={{
                                    width: "100%",
                                    marginTop: "40px",
                                    marginBottom: "0px",
                                  }}
                                >
                                  <img
                                    src="/icons/create.svg"
                                    className="white-svg"
                                    alt="create logo"
                                    width={15}
                                    height={15}
                                  />{" "}
                                  Create Stack
                                </button>
                              </div>
                            )}
                          </>
                        )}
                        {loading && <Spinner />}
                      </>
                    )}
                  </div>
                </div>
              </form>

              <div className="card-container">
                <div className="card-empty" style={{ paddingTop: "20px" }}>
                  {!page_data.is_signed_in && (
                    <>
                      <h3>Start Stacking</h3>
                      <div className="subtitle" style={{ display: "inline" }}>
                        <a
                          href={"/signin"}
                          className="nav-element"
                          title="Sign into stack account"
                        >
                          <img
                            src="/icons/signin.svg"
                            alt="signin logo"
                            width={15}
                            height={15}
                          />{" "}
                          Sign In
                        </a>
                      </div>
                      <div className="subtitle" style={{ display: "inline" }}>
                        <a
                          href={"/signup"}
                          className="nav-element"
                          title="Create a stack account"
                        >
                          <img
                            src="/icons/signup.svg"
                            alt="signup logo"
                            width={15}
                            height={15}
                          />{" "}
                          Sign Up
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          )}

          {stackSuccessfullyCreated && (
            <>
              <section>
                <div className="background">
                  <img
                    src="/imgs/background.avif"
                    className="background-image"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "85vh",
                  }}
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
                    {" "}
                    <h3>
                      Stack Successfully Created
                      <br />{" "}
                      <a href={`/stack/${newStackID}`} className="btn-create">
                        View Stack
                      </a>
                    </h3>
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
}
