import InvalidCookie from "@/components/InvalidUidCookie";
import Sidenav from "@/components/Sidenav";
import { GetExplorePageStacks, IsUserSignedIn } from "@/functions";
import { _PAGEDATA_explore, _stack } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const pageData: _PAGEDATA_explore = {
    header_tags: {
      title: "Explore Recent and Popular Stacks",
      description:
        "View some of the hottest stacks created by users along with most recent. Visit these stacks and start discovering new content.",
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

export default function explorePage({
  page_data,
}: {
  page_data: _PAGEDATA_explore;
}) {
  return (
    <>
      {page_data.is_signed_in === "remove_uid_cookie" && (
        <InvalidCookie redirectUrl="/explore" />
      )}
      {page_data.is_signed_in !== "remove_uid_cookie" && (
        <>
          <section>
            {page_data.is_signed_in && <Sidenav isSignedIn={true} />}
            {!page_data.is_signed_in && <Sidenav isSignedIn={false} />}
          </section>
          <div className="card-container" style={{ paddingTop: "40px" }}>
            <div className="card-empty">
              <h1>Explore Stacks</h1>
              <h5>Explore recent and trending Stack&apos;s.</h5>
            </div>
          </div>

          {page_data.explore_stack_categories !== null && (
            <>

              {/* BUTTONS TO TOGGLE SECTIONS */}
              {/* <div className="card-container">
                <button
                  id="btn-yourStacks"
                  className="nav-element"
                  style={{
                    marginRight: "10px",
                    marginBottom: "0px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (view !== "stacks") {
                      setView("stacks");
                    }
                  }}
                >
                  <h4>
                    <img
                      src="/icons/trending.svg"
                      alt="globe icon"
                      width={20}
                      height={20}
                    />{" "}
                    Trending
                  </h4>
                </button>
                <button
                  id="btn-savedStacks"
                  className="nav-element"
                  style={{
                    marginRight: "10px",
                    marginBottom: "0px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (view !== "liked_stacks") {
                      setView("liked_stacks");
                    }
                  }}
                >
                  <h4>
                    <img
                      src="/icons/recent.svg"
                      alt="globe icon"
                      width={20}
                      height={20}
                    />{" "}
                    Recent
                  </h4>
                </button>
              </div> */}

              {/* POPULAR STACKS */}
              {page_data.explore_stack_categories?.popular_stacks !== null && (
                <div className="card-container" id="savedStacks">
                  <div className="card" style={{ textAlign: "center", paddingBottom: "80px" }}>
                    <h3>
                      <img
                        src="/icons/trending.svg"
                        alt="globe icon"
                        width={35}
                        height={35}
                      />{" "}
                      Trending
                    </h3>
                    <div className="explore-container">
                      {page_data.explore_stack_categories?.popular_stacks !==
                        null && (
                          <>
                            {page_data.explore_stack_categories?.popular_stacks.map(
                              (x: _stack, index: number) => {
                                return (
                                  <a key={index} href={`/stack/${x.stack_id}`}>
                                    <div className="explore-item">
                                      <img src={x.thumbnail_url} />

                                      {x.creator_details !== undefined && (
                                        <div className="user-profile-containerParent">
                                          <div className="user-profile-container">
                                            <h2>{x.name}</h2>
                                          </div>
                                          <div className="user-profile-container">
                                            <div>
                                              <img
                                                src={x.creator_details!.profile_pic}
                                                className="user-profile-img"
                                                alt={x.creator_details!.username +
                                                  " profile picture"} />
                                            </div>

                                            {x.creator_details!.first_name !== null && (
                                              <span
                                                style={{
                                                  paddingLeft: "8px", paddingTop: "6px"
                                                }}
                                              >
                                                <b>
                                                  {x.creator_details!.first_name}{" "}
                                                  {x.creator_details!.last_name !==
                                                    null && (
                                                      <>{x.creator_details!.last_name}</>
                                                    )}
                                                </b>
                                                <p
                                                  style={{
                                                    textAlign: "left",
                                                    fontSize: "16px",
                                                    opacity: "0.85"
                                                  }}
                                                >
                                                  @{x.creator_details!.username}
                                                </p>
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      )}
                                      <div className="user-profile-containerParent">
                                        <div className="user-profile-container" style={{ paddingTop: "10px" }}>
                                          <button className="btn-like">
                                            <img
                                              src="/icons/like.svg"
                                              className="white-svg"
                                              alt="likes icon"
                                              width={15}
                                              height={15} /> {x.likes}
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
                </div>
              )}

              {/* RECENT STACKS */}
              {page_data.explore_stack_categories?.recent_stacks !== null && (
                <div className="card-container" id="savedStacks">
                  <div className="card" style={{ textAlign: "center", paddingBottom: "80px" }}>
                    <h3>
                      <img
                        src="/icons/recent.svg"
                        alt="globe icon"
                        width={35}
                        height={35}
                      />{" "}
                      Recent
                    </h3>
                    <div className="explore-container">
                      {page_data.explore_stack_categories?.recent_stacks !==
                        null && (
                          <>
                            {page_data.explore_stack_categories?.recent_stacks.map(
                              (x: _stack, index: number) => {
                                return (
                                  <a key={index} href={`/stack/${x.stack_id}`}>
                                    <div className="explore-item">
                                      <img src={x.thumbnail_url} />
                                      {x.creator_details !== undefined && (
                                        <>
                                          <div className="user-profile-containerParent">
                                            <div className="user-profile-container">
                                              <h2>{x.name}</h2>
                                            </div>
                                            <div className="user-profile-container">
                                              <div>
                                                <img
                                                  src={x.creator_details!.profile_pic}
                                                  className="user-profile-img"
                                                  alt={x.creator_details!.username +
                                                    " profile picture"} />
                                              </div>

                                              {x.creator_details!.first_name !== null && (
                                                <span
                                                  style={{
                                                    paddingLeft: "8px", paddingTop: "6px"
                                                  }}
                                                >
                                                  <b>
                                                    {x.creator_details!.first_name}{" "}
                                                    {x.creator_details!.last_name !==
                                                      null && (
                                                        <>{x.creator_details!.last_name}</>
                                                      )}
                                                  </b>
                                                  <p
                                                    style={{
                                                      textAlign: "left",
                                                      fontSize: "16px",
                                                      opacity: "0.85"
                                                    }}
                                                  >
                                                    @{x.creator_details!.username}
                                                  </p>
                                                </span>
                                              )}
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
                </div>
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
