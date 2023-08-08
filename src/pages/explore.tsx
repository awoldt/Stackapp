import InvalidCookie from "@/components/InvalidUidCookie";
import Sidenav from "@/components/Sidenav";
import UniqueHeader from "@/components/UniqueHeaderTags";
import { GetExplorePageStacks, IsUserSignedIn } from "@/functions";
import { _PAGEDATA_explore, _stack } from "@/types";
import { GetServerSideProps } from "next";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const pageData: _PAGEDATA_explore = {
    header_tags: {
      title: "Explore Stacks | Stack",
      description:
        "View some of the most popular stacks created by users along with most recent. Visit these stacks and start discovering new content.",
      canonical_link: "https://stackapp.xyz/explore",
      open_graph_tags: {
        title: "Explore Recent and Popular Stacks",
        url: "https://stackapp.xyz/explore",
        image: null,
      },
    },
    explore_stack_categories: await GetExplorePageStacks(),
    is_signed_in: await IsUserSignedIn(req.cookies.uid),
  };

  return {
    props: {
      page_data: pageData,
    },
  };
};

export default function ExplorePage({
  page_data,
}: {
  page_data: _PAGEDATA_explore;
}) {
  const [view, setView] = useState<"trending" | "recent">("recent");

  return (
    <>
      {page_data.is_signed_in === "remove_uid_cookie" && (
        <InvalidCookie redirectUrl="/explore" />
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

          <div className="background">
            <img
              src={"/imgs/background.avif"}
              alt="background design"
              className="background-image"
            />
          </div>

          <div className="card-container-title">
            <div className="card-empty">
              <h1>Explore Stacks</h1>
              <p className="subtitle">Explore recent and trending Stacks.</p>
            </div>
          </div>

          {page_data.explore_stack_categories !== null && (
            <>
              {/* BUTTONS TO TOGGLE SECTIONS */}
              <div className="card-container">
                <button
                  className="btn-tags"
                  style={{ marginRight: "10px", minWidth: "10%" }}
                  onClick={() => {
                    if(view !== "trending") {
                      setView("trending")
                    }
                  }}
                >
                  <span style={{ color: "white" }}>
                    <img
                      className="white-svg"
                      src="/icons/trending.svg"
                      alt="globe icon"
                      width={20}
                      height={20}
                    />{" "}
                    Trending
                  </span>
                </button>

                <button
                  className="btn-tags"
                  style={{ marginLeft: "10px", minWidth: "10%" }}
                  onClick={() => {
                    if(view !== "recent") {
                      setView("recent")
                    }
                  }}
                >
                  <span style={{ color: "white" }}>
                    <img
                      className="white-svg"
                      src="/icons/recent.svg"
                      alt="globe icon"
                      width={20}
                      height={20}
                    />{" "}
                    Recent
                  </span>
                </button>
              </div>

              {view === "trending" && (
                <>
                  {/* POPULAR STACKS */}
                  {page_data.explore_stack_categories?.popular_stacks !==
                    null && (
                    <div className="card-container" id="savedStacks">
                      <div className="card" style={{ textAlign: "center" }}>
                        <h2>
                          <img
                            src="/icons/trending.svg"
                            alt="globe icon"
                            width={25}
                            height={25}
                          />{" "}
                          Trending
                        </h2>

                        {page_data.explore_stack_categories?.popular_stacks !==
                          null && (
                          <>
                            {page_data.explore_stack_categories?.popular_stacks.map(
                              (x: _stack, index: number) => {
                                return (
                                  <a key={index} href={`/stack/${x.stack_id}`}>
                                    <div className="explore-thumbnail">
                                      <img src={x.thumbnail_url} />

                                      {x.creator_details !== undefined && (
                                        <div className="user-profile-containerParent">
                                          <div
                                            className="explore-user-profile-container"
                                            style={{ marginTop: "10px" }}
                                          >
                                            <div className="explore-user-profile-margin">
                                              <span className="title">
                                                {x.name}
                                              </span>
                                            </div>
                                            <div>
                                              <img
                                                src={
                                                  x.creator_details!.profile_pic
                                                }
                                                style={{ marginTop: "2px" }}
                                                className="user-profile-img"
                                                alt={
                                                  x.creator_details!.username +
                                                  " profile picture"
                                                }
                                              />
                                            </div>

                                            <span
                                              style={{
                                                paddingLeft: "8px",
                                                paddingTop: "8px",
                                              }}
                                            >
                                              <b>
                                                {x.creator_details!.first_name}{" "}
                                                {x.creator_details!.last_name}
                                              </b>
                                              <p
                                                style={{
                                                  fontSize: "16px",
                                                  opacity: "0.85",
                                                }}
                                              >
                                                @{x.creator_details!.username}
                                              </p>
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                      <div className="user-profile-containerParent">
                                        <div
                                          className="explore-user-profile-container">
                                          <button className="btn-like">
                                            <img
                                              src="/icons/like.svg"
                                              className="white-svg"
                                              alt="likes icon"
                                              width={15}
                                              height={15}
                                            />{" "}
                                            {x.likes}
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                );
                              }
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
              {view === "recent" && (
                <>
                  {/* RECENT STACKS */}
                  {page_data.explore_stack_categories?.recent_stacks !==
                    null && (
                    <div className="card-container" id="savedStacks">
                      <div className="card" style={{ textAlign: "center" }}>
                        <h2>
                          <img
                            src="/icons/recent.svg"
                            alt="globe icon"
                            width={25}
                            height={25}
                          />{" "}
                          Recent
                        </h2>

                        {page_data.explore_stack_categories?.recent_stacks !==
                          null && (
                          <>
                            {page_data.explore_stack_categories?.recent_stacks.map(
                              (x: _stack, index: number) => {
                                return (
                                  <a key={index} href={`/stack/${x.stack_id}`}>
                                    <div className="explore-thumbnail">
                                      <img src={x.thumbnail_url} />
                                      {x.creator_details !== undefined && (
                                        <>
                                          <div className="user-profile-containerParent">
                                            <div
                                              className="explore-user-profile-container"
                                              style={{ marginTop: "10px" }}
                                            >
                                              <div className="explore-user-profile-margin">
                                                <span className="title">
                                                  {x.name}
                                                </span>
                                              </div>
                                              <div>
                                                <img
                                                  src={
                                                    x.creator_details!
                                                      .profile_pic
                                                  }
                                                  style={{ marginTop: "2px" }}
                                                  className="user-profile-img"
                                                  alt={
                                                    x.creator_details!
                                                      .username +
                                                    " profile picture"
                                                  }
                                                />
                                              </div>

                                              <span
                                                style={{
                                                  paddingLeft: "8px",
                                                  paddingTop: "8px",
                                                }}
                                              >
                                                <b>
                                                  {
                                                    x.creator_details!
                                                      .first_name
                                                  }{" "}
                                                  {x.creator_details!.last_name}
                                                </b>
                                                <p
                                                  style={{
                                                    fontSize: "16px",
                                                    opacity: "0.85",
                                                  }}
                                                >
                                                  @{x.creator_details!.username}
                                                </p>
                                              </span>
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </a>
                                );
                              }
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
          {page_data.explore_stack_categories === null && (
            <div className="card-container" style={{ paddingTop: "40px" }}>
              <div className="card-empty">
                <p>
                  <i>There was an error while getting Explore page details.</i>
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
