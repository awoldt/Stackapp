import Sidenav from "@/components/Sidenav";
import Spinner from "@/components/Spinner";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { GetRepoSelect, GetUserProfile, IsUserSignedIn } from "@/functions";
import { stackData } from "@/techstack";
import {
  _PAGEDATA_create,
  _PAGEDATA_profile,
  _repoSelectList,
  _techStackValues,
} from "@/types";
import { GetServerSideProps } from "next";
import { useRef, useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (await IsUserSignedIn(req.cookies.uid)) {
    const user = await GetUserProfile(req.cookies.uid);

    const pageData: _PAGEDATA_create = {
      header_tags: {
        title: "Create a New Stack | Stack",
        description:
          "Create a stack that showcases the technology that went into making your application. This can include things like languages, databases, apis, and more.",
        canonical_link: "https://stackapp.xyz/create",
        open_graph_tags: null,
      },
      has_authenticated_github_account:
        user === null
          ? false
          : user.github_access_token === null
          ? false
          : true,
      github_client_id:
        user === null ? undefined : process.env.GITHUB_CLIENT_ID,
      repo_select_list:
        user === null
          ? null
          : user.github_access_token === null
          ? null
          : await GetRepoSelect(
              user!.github_access_token,
              String(req.cookies.uid)
            ),
      is_signed_in: true,
    };

    return {
      props: {
        page_data: pageData,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
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
      <UniqueHeader
        title={page_data.header_tags.title}
        description={page_data.header_tags.description}
        canonicalLink={page_data.header_tags.canonical_link!}
        openGraph={page_data.header_tags.open_graph_tags}
      />

      <section>
        <Sidenav isSignedIn={page_data.is_signed_in!} />
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
          <div className="card-container" style={{ paddingTop: "40px" }}>
            <div className="card-empty">
              <h1>Create Stack</h1>
              <h5>Enter the details of your tech stack&apos;s development.</h5>
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
                />

                <textarea
                  name="app_description"
                  id="app_description"
                  cols={40}
                  rows={10}
                  required
                  placeholder="*Stack Description"
                ></textarea>

                <label htmlFor="app_icon_input" style={{ marginBottom: "0px" }}>
                  *Stack Icon
                </label>
                {showcaseIcon && <img src={showcaseIconSrc} width={500} />}
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
                        console.log(r.target?.result);
                        setShowcaseIconSrc(r.target?.result?.toString()!);
                        setShowcaseIcon(true);
                      };

                      reader.readAsDataURL(fileInput.files[0]);
                    }
                  }}
                />

                <label
                  htmlFor="app_thumbnail_input"
                  style={{ marginBottom: "0px" }}
                >
                  *Stack Thumbnail
                </label>
                {showcaseThumbnail && (
                  <img src={showcaseThumbnailSrc} width={500} />
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
                        console.log(r.target?.result);
                        setShowcaseThumbnailSrc(r.target?.result?.toString()!);
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
                    <p>Associated GitHub Repo</p>

                    <select
                      name="githubRepoId"
                      className="btn-edit"
                      style={{ display: "block", width: "100%" }}
                    >
                      <option value="null" selected>
                        None
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
                <h5 style={{ display: "inline" }}>
                  Select all Languages used in your tech stack.
                  <br />
                  <br />
                </h5>
                {stackData.languages.map((x: string, index: number) => {
                  return (
                    <label key={index}>
                      <input type="checkbox" name="languages_used" value={x} />
                      <span className="checkmark"></span>
                      {x}
                    </label>
                  );
                })}

                <img
                  src="/icons/database-fill.svg"
                  alt="database"
                  width={20}
                  height={15}
                  style={{ display: "inline" }}
                />
                <h5 style={{ display: "inline" }}>
                  Select all Databases used in your tech stack.
                  <br />
                  <br />
                </h5>
                {stackData.databases.map((x: string, index: number) => {
                  return (
                    <label key={index}>
                      <input type="checkbox" name="databases_used" value={x} />
                      <span className="checkmark"></span>
                      {x}
                    </label>
                  );
                })}

                <img
                  src="/icons/api.svg"
                  alt="api"
                  width={20}
                  height={15}
                  style={{ display: "inline" }}
                />
                <h5 style={{ display: "inline" }}>
                  Select all APIs used in your tech stack.
                  <br />
                  <br />
                </h5>
                {stackData.apis.map((x: string, index: number) => {
                  return (
                    <label key={index}>
                      <input type="checkbox" name="apis_used" value={x} />
                      <span className="checkmark"></span>
                      {x}
                    </label>
                  );
                })}

                <img
                  src="/icons/cloud-fill.svg"
                  alt="cloud"
                  width={20}
                  height={15}
                  style={{ display: "inline" }}
                />
                <h5 style={{ display: "inline" }}>
                  Select all Cloud Deployment Services used in your tech stack.
                  <br />
                  <br />
                </h5>
                {stackData.clouds.map((x: string, index: number) => {
                  return (
                    <label key={index}>
                      <input type="checkbox" name="clouds_used" value={x} />
                      <span className="checkmark"></span>
                      {x}
                    </label>
                  );
                })}

                <img
                  src="/icons/framework.svg"
                  alt="api"
                  width={20}
                  height={15}
                  style={{ display: "inline" }}
                />
                <h5 style={{ display: "inline" }}>
                  Select all Frameworks used in your tech stack.
                  <br />
                  <br />
                </h5>
                {stackData.frameworks.map((x: string, index: number) => {
                  return (
                    <label key={index}>
                      <input type="checkbox" name="frameworks_used" value={x} />
                      <span className="checkmark"></span>
                      {x}
                    </label>
                  );
                })}
              </div>
            </div>

            {!loading && (
              <>
                {disabledSubmit && (
                  <div className="card-container">
                    <div
                      className="card-empty"
                      style={{ marginTop: "0px", paddingTop: "0px" }}
                    >
                      <button
                        disabled={true}
                        id="create_stack_btn"
                        type="submit"
                        className="btn-create"
                        style={{
                          width: "100%",
                          marginBottom: "0px",
                          backgroundColor: "grey",
                          cursor: "default",
                        }}
                      >
                        Create Stack
                      </button>
                    </div>
                  </div>
                )}
                {!disabledSubmit && (
                  <div className="card-container">
                    <div
                      className="card-empty"
                      style={{ marginTop: "0px", paddingTop: "0px" }}
                    >
                      <button
                        id="create_stack_btn"
                        type="submit"
                        className="btn-create"
                        style={{ width: "100%", marginBottom: "0px" }}
                      >
                        Create Stack
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
            {loading && <Spinner />}
          </form>
        </section>
      )}

      {stackSuccessfullyCreated && (
        <>
          <section>
            <div className="background">
              <img src="/imgs/background.avif" />
            </div>

            <div
              style={{ display: "flex", alignItems: "center", height: "85vh" }}
            >
              <div style={{ width: "100%", textAlign: "center" }}>
                {" "}
                <h5>
                  Finished Stacking.
                  <br />{" "}
                  <a
                    href={`/stack/${newStackID}`}
                    className="nav-element"
                    style={{ padding: "10px" }}
                  >
                    View Stack.
                  </a>
                </h5>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
