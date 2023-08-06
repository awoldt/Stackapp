/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import { _PAGEDATA_editstack, _repoSelectList } from "@/types";
import {
  GetRepoSelect,
  GetStackDataEditPage,
  IsUserSignedIn,
  ReadTechValuesFromS3,
} from "@/functions";
import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { useRef, useState } from "react";
import Spinner from "@/components/Spinner";
import StackDesctiptionTextarea from "@/components/StackDescriptionTextarea";
import InvalidCookie from "@/components/InvalidUidCookie";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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

  const pageData: _PAGEDATA_editstack = {
    header_tags: {
      title: `Edit ${stackData?.name} | Stack`,
      description: "Edit stack",
      open_graph_tags: null,
      canonical_link: `https://stackapp.xyz/stack/${stackData?.stack_id}/edit`,
    },
    saved_stack_data: stackData,
    repo_select_list:
      stackData!.github_api_token_used! === null
        ? null
        : await GetRepoSelect(
            stackData?.github_api_token_used!,
            stackData!.uid!
          ),
    current_repo_id_selected:
      stackData!.github_api_token_used === null
        ? null
        : stackData?.github_repo_id!,
    tech_values: await ReadTechValuesFromS3(),
    is_signed_in: await IsUserSignedIn(req.cookies.uid),
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
                <h1>Edit Stack</h1>
                <h5>Edit or change your Stack&apos;s current details.</h5>
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
                    `/api/edit-stack?stack_id=${
                      window.location.pathname.split("/")[2]
                    }`,
                    {
                      method: "POST",
                      body: new FormData(formRef.current!),
                    }
                  );
                  const res = await req.json();
                  alert(res.msg);
                  if (req.status === 200) {
                    window.location.assign(
                      `/stack/${window.location.pathname.split("/")[2]}`
                    );
                  }
                  setUpdateStackLoading(false);
                } catch (e) {
                  console.log(e);
                  alert("There was an error while editing stack ");
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
                      placeholder="Stack Title"
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

                  <p>
                    <img
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

                  <p>
                    <img
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
                      borderRadius: "20px",
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

                  {page_data.repo_select_list !== null && (
                    <>
                      {page_data.current_repo_id_selected !== null && (
                        <p>
                          You have GitHub repo ID{" "}
                          <b>{page_data.current_repo_id_selected}</b> selected
                          for this Stack.
                        </p>
                      )}
                      {page_data.current_repo_id_selected === null && (
                        <>
                          {page_data.repo_select_list ===
                            "too_many_requests" && (
                            <p>
                              Too many requests to the GitHub API at this
                              moment.
                            </p>
                          )}
                          {page_data.repo_select_list !==
                            "too_many_requests" && (
                            <>
                              <p>
                                Select GitHub repo you would like to associate
                                with this Stack.
                              </p>
                              <select name="githubRepoId">
                                <option value="null" selected>
                                  None
                                </option>
                                {page_data.repo_select_list.map(
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
                        </>
                      )}
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
                    Languages used in your tech stack.
                    <br />
                    <br />
                  </h5>
                  {page_data.saved_stack_data?.languagesSelectedData[0].map(
                    (x: string, index: number) => {
                      return (
                        <label htmlFor={x} key={index}>
                          <input
                            type="checkbox"
                            id={x}
                            name="languages_used"
                            value={x}
                            className="language-checkboxs"
                            defaultChecked={true}
                          />
                          <span className="checkmark"></span>
                          {x}
                        </label>
                      );
                    }
                  )}
                  {page_data.saved_stack_data?.languagesSelectedData[1].map(
                    (x: string, index: number) => {
                      return (
                        <label htmlFor={x} key={index}>
                          <input
                            type="checkbox"
                            id={x}
                            name="languages_used"
                            value={x}
                            className="language-checkboxs"
                          />
                          <span className="checkmark"></span>
                          {x}
                        </label>
                      );
                    }
                  )}

                  {page_data.saved_stack_data?.databasesSelectedData !==
                    null && (
                    <>
                      <img
                        src="/icons/database-fill.svg"
                        alt="database"
                        width={20}
                        height={15}
                        style={{ display: "inline" }}
                      />
                      <h5 style={{ display: "inline" }}>
                        Databases used in your tech stack.
                        <br />
                        <br />
                      </h5>
                      {page_data.saved_stack_data?.databasesSelectedData[0].map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="databases_used"
                                value={x}
                                className="database-checkboxs"
                                defaultChecked={true}
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                      {page_data.saved_stack_data?.databasesSelectedData[1].map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="databases_used"
                                value={x}
                                className="database-checkboxs"
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                    </>
                  )}
                  {page_data.saved_stack_data!.databasesSelectedData ===
                    null && (
                    <>
                      <img
                        src="/icons/database-fill.svg"
                        alt="database"
                        width={20}
                        height={15}
                        style={{ display: "inline" }}
                      />
                      <h5 style={{ display: "inline" }}>
                        Databases used in your tech stack.
                        <br />
                        <br />
                      </h5>
                      {page_data.tech_values.databases.map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="databases_used"
                                value={x}
                                className="database-checkboxs"
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                    </>
                  )}

                  {page_data.saved_stack_data?.apisSelectedData !== null && (
                    <>
                      <img
                        src="/icons/api.svg"
                        alt="api"
                        width={20}
                        height={15}
                        style={{ display: "inline" }}
                      />
                      <h5 style={{ display: "inline" }}>
                        APIs used in your tech stack.
                        <br />
                        <br />
                      </h5>
                      {page_data.saved_stack_data?.apisSelectedData[0].map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="apis_used"
                                value={x}
                                className="api-checkboxs"
                                defaultChecked={true}
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                      {page_data.saved_stack_data?.apisSelectedData[1].map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="apis_used"
                                value={x}
                                className="api-checkboxs"
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                    </>
                  )}
                  {page_data.saved_stack_data!.apisSelectedData === null && (
                    <>
                      <img
                        src="/icons/api.svg"
                        alt="api"
                        width={20}
                        height={15}
                        style={{ display: "inline" }}
                      />
                      <h5 style={{ display: "inline" }}>
                        APIs used in your tech stack.
                        <br />
                        <br />
                      </h5>
                      {page_data.tech_values.apis.map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="apis_used"
                                value={x}
                                className="api-checkboxs"
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                    </>
                  )}

                  {page_data.saved_stack_data?.cloudsSelectedData !== null && (
                    <>
                      <img
                        src="/icons/cloud-fill.svg"
                        alt="cloud"
                        width={20}
                        height={15}
                        style={{ display: "inline" }}
                      />
                      <h5 style={{ display: "inline" }}>
                        Cloud Deployment Services used in your tech stack.
                        <br />
                        <br />
                      </h5>
                      {page_data.saved_stack_data?.cloudsSelectedData[0].map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="clouds_used"
                                value={x}
                                className="cloud-checkboxs"
                                defaultChecked={true}
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                      {page_data.saved_stack_data?.cloudsSelectedData[1].map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="clouds_used"
                                value={x}
                                className="cloud-checkboxs"
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                    </>
                  )}
                  {page_data.saved_stack_data!.cloudsSelectedData === null && (
                    <>
                      <img
                        src="/icons/cloud-fill.svg"
                        alt="cloud"
                        width={20}
                        height={15}
                        style={{ display: "inline" }}
                      />
                      <h5 style={{ display: "inline" }}>
                        Cloud Deployment Services used in your tech stack.
                        <br />
                        <br />
                      </h5>
                      {page_data.tech_values.clouds.map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="clouds_used"
                                value={x}
                                className="cloud-checkboxs"
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                    </>
                  )}

                  {page_data.saved_stack_data?.frameworksSelectedData !==
                    null && (
                    <>
                      <img
                        src="/icons/framework.svg"
                        alt="api"
                        width={20}
                        height={15}
                        style={{ display: "inline" }}
                      />
                      <h5 style={{ display: "inline" }}>
                        Frameworks used in your tech stack.
                        <br />
                        <br />
                      </h5>
                      {page_data.saved_stack_data?.frameworksSelectedData[0].map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="frameworks_used"
                                value={x}
                                className="framework-checkboxs"
                                defaultChecked={true}
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                      {page_data.saved_stack_data?.frameworksSelectedData[1].map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="frameworks_used"
                                value={x}
                                className="framework-checkboxs"
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                    </>
                  )}

                  {page_data.saved_stack_data!.frameworksSelectedData ===
                    null && (
                    <>
                      <img
                        src="/icons/framework.svg"
                        alt="api"
                        width={20}
                        height={15}
                        style={{ display: "inline" }}
                      />
                      <h5 style={{ display: "inline" }}>
                        Frameworks used in your tech stack.
                        <br />
                        <br />
                      </h5>
                      {page_data.tech_values.frameworks.map(
                        (x: string, index: number) => {
                          return (
                            <label htmlFor={x} key={index}>
                              <input
                                type="checkbox"
                                id={x}
                                name="frameworks_used"
                                value={x}
                              />
                              <span className="checkmark"></span>
                              {x}
                            </label>
                          );
                        }
                      )}
                    </>
                  )}
                  <h5>
                    <br />
                    <img
                      src="/icons/delete.svg"
                      alt="delete logo"
                      width={25}
                      height={15}
                    />
                    This action is irreversible, deleted Stacks are not
                    recoverable.
                  </h5>
                  {!deleteStackLoading && (
                    <button
                      type="button"
                      className="btn-edit"
                      id="delete_stack_btn"
                      style={{
                        marginTop: "10px",
                        marginBottom: "0px",
                        background: "#F8333C",
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
                        width={25}
                        height={15}
                      />
                      Delete Stack
                    </button>
                  )}
                  {deleteStackLoading && <Spinner />}
                </div>
              </div>
              {!updateStackLoading && (
                <>
                  {disabledSubmit && (
                    <div className="card-container">
                      <div
                        className="card-empty"
                        style={{ marginTop: "0px", paddingTop: "0px" }}
                      >
                        <button
                          disabled={true}
                          className="btn-edit"
                          type="submit"
                          style={{
                            width: "100%",
                            marginBottom: "0px",
                            backgroundColor: "grey",
                            cursor: "default",
                          }}
                        >
                          <img
                            src="/icons/update.svg"
                            className="white-svg"
                            alt="update logo"
                            width={25}
                            height={15}
                          />
                          Update Stack
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
                          className="btn-create"
                          type="submit"
                          style={{ width: "100%", marginBottom: "0px" }}
                        >
                          <img
                            src="/icons/update.svg"
                            className="white-svg"
                            alt="update logo"
                            width={25}
                            height={15}
                          />
                          Update Stack
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
              {updateStackLoading && <Spinner />}
            </form>
          </section>
        </>
      )}
    </>
  );
}
