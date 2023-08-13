/* eslint-disable @next/next/no-img-element */
import InvalidCookie from "@/components/InvalidUidCookie";
import LikeBtn from "@/components/LikeBtn";
import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import {
  GenerateNamesWithLogos,
  GetCreatorDetails,
  GetRepoCommitLogs,
  GetStackData,
  GetUserProfile,
  HasUserAlreadyLikedThisStack,
  IsUserSignedIn,
} from "@/functions";
import {
  _PAGEDATA_stackpage,
  _nameWithLogo,
  _repoCommitLogs,
  _stack,
} from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const stackData: _stack | null | 404 = await GetStackData(
    req.url?.split("/")[2]!,
    req.cookies.uid!
  );
  if (stackData === 404) {
    res.statusCode = 404;
    return {
      props: {
        page_data: 404,
      },
    };
  }
  if (stackData === null) {
    res.statusCode = 500;
    return {
      props: {
        page_data: null,
      },
    };
  }

  const pageData: _PAGEDATA_stackpage = {
    header_tags: {
      title: `${stackData.name} | Stack`,
      canonical_link: `https://stackapp.xyz/stack/${stackData.stack_id}`,
      description: `Visualize the tech stack behind ${stackData.name}, including languages, databases, apis, clouds, and frameworks used to build the app
        `,
      open_graph_tags: {
        title: `${stackData.name} Tech Stack`,
        url: `https://stackapp.xyz/stack/${stackData.stack_id}`,
        image: stackData.icon_url,
      },
    },
    stack_num_of_likes: stackData!.likes,
    app_name: stackData!.name,
    icon: stackData!.icon_url,
    thumbnail: stackData.thumbnail_url,
    description: stackData.description,
    is_signedin_users_stack: req.cookies.uid !== stackData.uid ? false : true,
    website_url: stackData.website_url,
    languages_used: GenerateNamesWithLogos(stackData.languages_used)!,
    databases_used:
      stackData.databases_used === null
        ? null
        : GenerateNamesWithLogos(stackData.databases_used),
    apis_used:
      stackData.apis_used === null
        ? null
        : GenerateNamesWithLogos(stackData.apis_used),
    clouds_used:
      stackData.clouds_used === null
        ? null
        : GenerateNamesWithLogos(stackData.clouds_used),
    frameworks_used:
      stackData.frameworks_used === null
        ? null
        : GenerateNamesWithLogos(stackData.frameworks_used),
    commit_logs:
      stackData.github_repo_id === null
        ? null
        : await GetRepoCommitLogs(
          stackData.github_repo_id,
          String((await GetUserProfile(stackData.uid))?.github_access_token)
        ),
    creator_data: await GetCreatorDetails(stackData.uid),
    created_on: stackData.created_on,
    stack_id: stackData.stack_id!,
    is_signed_in: await IsUserSignedIn(req.cookies.uid),
    has_signed_in_user_already_liked_stack:
      req.cookies.uid !== stackData.uid
        ? (await HasUserAlreadyLikedThisStack(
          req.cookies.uid!,
          stackData.stack_id!
        ))!
        : "current_signed_in_users_stack",
  };

  return {
    props: {
      page_data: pageData,
    },
  };
};

export default function Stackpage({
  page_data,
}: {
  page_data: _PAGEDATA_stackpage | null | 404;
}) {
  return (
    <>
      {page_data === null && (
        <p>There was an error while fetching Stack data.</p>
      )}
      {page_data === 404 && (
        <>
          <div className="background">
            <img src="/imgs/background.avif" className="background-image" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", height: "85vh" }}
          >
            <div style={{ width: "100%", textAlign: "center" }}>
              {" "}
              <h2>
                This Stack does not exist.
                <br />{" "}
                <a href={`/explore`} className="btn-create">
                  <img
                    src="/icons/explore.svg"
                    className="white-svg"
                    alt="explore logo"
                    width={15}
                    height={15}
                  />{" "}
                  Explore Stacks
                </a>
              </h2>
            </div>
          </div>
        </>
      )}
      {page_data !== null && page_data !== 404 && (
        <>
          {page_data.is_signed_in === "remove_uid_cookie" && (
            <InvalidCookie redirectUrl={`/stack/${page_data.stack_id}`} />
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
              <section>
                <div className="background">
                  <img
                    src={"/imgs/background.avif"}
                    alt="background design"
                    className="background-image"
                  ></img>
                </div>
                <div className="header-container">
                  <div className="title-container-header">
                    <div className="title-header">
                      <div className="header">
                        <img
                          src={page_data.icon!}
                          className="profile-img"
                          alt={page_data.app_name + " icon"}
                        />

                        <h1>{page_data.app_name}</h1>

                        {page_data.website_url !== null && (
                          <div style={{ marginBottom: "10px" }}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={page_data.website_url}
                              className="subtitle"
                              style={{ padding: "0px" }}
                            >
                              {new URL(page_data.website_url).hostname}
                            </a>
                          </div>
                        )}

                        <p style={{
                          fontSize: "16px"
                        }}>
                          <img
                            src="/icons/date.svg"
                            alt="api"
                            width={12}
                            height={12}
                            style={{ display: "inline" }}
                          />{" "}
                          {new Date(page_data.created_on).toDateString()}
                        </p>

                        <div className="user-profile-containerParent" style={{ marginBottom: "0px", paddingBottom: "0px" }}>
                          <a href={page_data.creator_data.href} style={{ margin: "0px", padding: "0px" }}>
                            <div className="user-profile-container">
                              <img
                                src={page_data.creator_data.profile_pic!}
                                className="user-profile-img"
                                alt={
                                  page_data.creator_data.username +
                                  " profile picture"
                                }
                              />

                              <span
                                style={{
                                  paddingLeft: "8px",
                                  paddingTop: "6px",
                                }}
                              >
                                <b>
                                  {page_data.creator_data.first_name}{" "}
                                  {page_data.creator_data.last_name}
                                </b>
                                <p
                                  style={{
                                    fontSize: "16px",
                                    opacity: "0.85",
                                  }}
                                >
                                  @{page_data.creator_data.username}
                                </p>
                              </span>
                            </div>
                          </a>
                        </div>

                        {page_data.is_signedin_users_stack && (
                          <>
                            <div style={{ marginBottom: "40px", marginTop: "20px" }}>
                              <a
                                href={`/stack/${page_data.stack_id}/edit`}
                                className="btn-create"
                              >
                                <img
                                  src="/icons/edit.svg"
                                  className="white-svg"
                                  alt="edit logo"
                                  width={15}
                                  height={15}
                                  style={{ marginTop: "20px" }}
                                />{" "}
                                Edit Stack
                              </a>
                            </div>
                          </>
                        )}

                        <div style={{ marginBottom: "20px" }}>
                          <LikeBtn
                            isSignedIn={page_data.is_signed_in!}
                            isSignedInUsersStack={
                              page_data.is_signedin_users_stack
                            }
                            stackID={page_data.stack_id}
                            currentNumOfLikes={page_data.stack_num_of_likes}
                            hasSignedInUserAlreadyLikedStack={
                              page_data.has_signed_in_user_already_liked_stack
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="card-container"
                      style={{
                        paddingBottom: "0px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "right",
                      }}
                    >
                      <div className="thumbnail">
                        <img
                          src={page_data.thumbnail!}
                          alt={page_data.app_name + " thumbnail"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="card-container">
                  <div className="card">
                    <h2 style={{ textAlign: "center" }}>
                      <img
                        src="/icons/description.svg"
                        alt="api"
                        width={20}
                        height={20}
                        style={{ display: "inline" }}
                      />{" "}
                      Description
                    </h2>
                    <p style={{ paddingTop: "20px" }}>{page_data.description}</p>
                  </div>
                </div>
              </section>

              <section>
                <div
                  className="card-container"
                  style={{ paddingBottom: "40px" }}
                >
                  <div className="card">
                    <div className="container">
                      <h2 style={{ textAlign: "center" }}>
                        <img
                          src="/icons/code.svg"
                          alt="api"
                          width={25}
                          height={25}
                          style={{ display: "inline" }}
                        />{" "}
                        Languages
                      </h2>

                      <p className="subtitle" style={{ textAlign: "center" }}>
                        Languages used in the development of this tech Stack.
                      </p>
                      <div
                        className="grid-container"
                        style={{ paddingBottom: "40px" }}
                      >
                        {page_data.languages_used.map(
                          (x: _nameWithLogo, index: number) => {
                            return (
                              <div
                                className="grid-item"
                                key={index}
                                style={{
                                  marginBottom: "40px",
                                }}
                              >
                                <img
                                  src={x.logo_img_src}
                                  alt={`${x.name} logo`}
                                />
                                <span>
                                  <p
                                    style={{
                                      paddingTop: "14px",
                                      textAlign: "center",
                                    }}
                                  >
                                    {x.name}
                                  </p>
                                </span>
                              </div>
                            );
                          }
                        )}
                      </div>

                      {page_data.databases_used !== null && (
                        <>
                          <h2 style={{ textAlign: "center" }}>
                            <img
                              src="/icons/database-fill.svg"
                              alt="api"
                              width={25}
                              height={25}
                              style={{ display: "inline" }}
                            />{" "}
                            Databases
                          </h2>

                          <p
                            className="subtitle"
                            style={{ textAlign: "center" }}
                          >
                            Databases used in the development of this tech
                            Stack.
                          </p>
                          <div
                            className="grid-container"
                            style={{ paddingBottom: "40px" }}
                          >
                            {page_data.databases_used.map(
                              (x: _nameWithLogo, index: number) => {
                                return (
                                  <div
                                    className="grid-item"
                                    key={index}
                                    style={{
                                      marginBottom: "40px",
                                    }}
                                  >
                                    <img
                                      src={x.logo_img_src}
                                      alt={`${x.name} logo`}
                                    />
                                    <span>
                                      <p
                                        style={{
                                          paddingTop: "14px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {x.name}
                                      </p>
                                    </span>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </>
                      )}

                      {page_data.apis_used !== null && (
                        <>
                          <h2 style={{ textAlign: "center" }}>
                            <img
                              src="/icons/api.svg"
                              alt="api"
                              width={25}
                              height={25}
                              style={{ display: "inline" }}
                            />{" "}
                            APIs
                          </h2>

                          <p
                            className="subtitle"
                            style={{ textAlign: "center" }}
                          >
                            APIs used in the development of this tech Stack.
                          </p>
                          <div
                            className="grid-container"
                            style={{ paddingBottom: "40px" }}
                          >
                            {page_data.apis_used.map(
                              (x: _nameWithLogo, index: number) => {
                                return (
                                  <div
                                    className="grid-item"
                                    key={index}
                                    style={{
                                      marginBottom: "40px",
                                    }}
                                  >
                                    <img
                                      src={x.logo_img_src}
                                      alt={`${x.name} logo`}
                                    />
                                    <span>
                                      <p
                                        style={{
                                          paddingTop: "14px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {x.name}
                                      </p>
                                    </span>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </>
                      )}

                      {page_data.clouds_used !== null && (
                        <>
                          <h2 style={{ textAlign: "center" }}>
                            <img
                              src="/icons/cloud-fill.svg"
                              alt="api"
                              width={25}
                              height={25}
                              style={{ display: "inline" }}
                            />{" "}
                            Cloud Services
                          </h2>

                          <p
                            className="subtitle"
                            style={{ textAlign: "center" }}
                          >
                            Cloud Services used in the development of this tech
                            Stack.
                          </p>
                          <div
                            className="grid-container"
                            style={{ paddingBottom: "40px" }}
                          >
                            {page_data.clouds_used.map(
                              (x: _nameWithLogo, index: number) => {
                                return (
                                  <div
                                    className="grid-item"
                                    key={index}
                                    style={{
                                      marginBottom: "40px",
                                    }}
                                  >
                                    <img
                                      src={x.logo_img_src}
                                      alt={`${x.name} logo`}
                                    />
                                    <span>
                                      <p
                                        style={{
                                          paddingTop: "14px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {x.name}
                                      </p>
                                    </span>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </>
                      )}

                      {page_data.frameworks_used !== null && (
                        <>
                          <h2 style={{ textAlign: "center" }}>
                            <img
                              src="/icons/framework.svg"
                              alt="api"
                              width={25}
                              height={25}
                              style={{ display: "inline" }}
                            />{" "}
                            Frameworks
                          </h2>

                          <p
                            className="subtitle"
                            style={{ textAlign: "center" }}
                          >
                            Frameworks used in the development of this tech
                            Stack.
                          </p>
                          <div
                            className="grid-container"
                            style={{ paddingBottom: "40px" }}
                          >
                            {page_data.frameworks_used.map(
                              (x: _nameWithLogo, index: number) => {
                                return (
                                  <div
                                    className="grid-item"
                                    key={index}
                                    style={{
                                      marginBottom: "40px",
                                    }}
                                  >
                                    <img
                                      src={x.logo_img_src}
                                      alt={`${x.name} logo`}
                                    />
                                    <span>
                                      <p
                                        style={{
                                          paddingTop: "14px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {x.name}
                                      </p>
                                    </span>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {Array.isArray(page_data.commit_logs) && (
                <section>
                  <div className="card-container">
                    <div className="card">
                      <h2 style={{ textAlign: "center" }}>Github</h2>
                      <p
                        className="subtitle"
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        Commit history towards the development of this tech
                        Stack.
                      </p>
                      {page_data.commit_logs.map(
                        (x: _repoCommitLogs, index: number) => {
                          return (
                            <>
                              <p
                                style={{
                                  marginTop: "20px",
                                  fontSize: "16px",
                                  opacity: "0.85",
                                }}
                              >
                                {x.date_commited}
                              </p>
                              <p>
                                <b>MSG: {x.message} </b>
                              </p>
                              <p>
                                Github Commit SHA:{" "}
                                <em>
                                  <a href={x.url}>{x.sha}</a>
                                </em>
                              </p>
                            </>
                          );
                        }
                      )}
                    </div>
                  </div>
                </section>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
