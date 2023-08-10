//this component has the 2 views for explore page (recent and trending)

import { _PAGEDATA_explore, _stack } from "@/types";

export default function ExploreViewTabs({
  view,
  setView,
  pageData,
}: {
  view: "trending" | "recent";
  setView: React.Dispatch<React.SetStateAction<"trending" | "recent">>;
  pageData: _PAGEDATA_explore;
}) {
  return (
    <>
      {view === "trending" && (
        <>
          <div className="card-container">
            <button
              className="btn-tags"
              style={{ marginRight: "10px", minWidth: "10%" }}
              onClick={() => {
                setView("recent");
              }}
            >
              <span style={{ color: "white" }}>
                <img
                  className="white-svg"
                  src="/icons/recent.svg"
                  alt="globe icon"
                  width={15}
                  height={15}
                />{" "}
                Recent
              </span>
            </button>

            <button
              className="btn-tag-selected"
              style={{ marginLeft: "10px", minWidth: "10%" }}
            >
              <span style={{ color: "white" }}>
                <img
                  className="white-svg"
                  src="/icons/trending.svg"
                  alt="globe icon"
                  width={15}
                  height={15}
                />{" "}
                Trending
              </span>
            </button>
          </div>
          {/* POPULAR STACKS */}
          {pageData.explore_stack_categories?.popular_stacks !== null && (
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

                {pageData.explore_stack_categories?.popular_stacks !== null && (
                  <>
                    {pageData.explore_stack_categories?.popular_stacks.map(
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
                                      <span className="title">{x.name}</span>
                                    </div>
                                    <div>
                                      <img
                                        src={x.creator_details!.profile_pic}
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
                              {/* <div className="user-profile-containerParent">
                                            <div
                                              className="explore-user-profile-container">
                                              <p>
                                                {x.likes} likes
                                              </p>
                                            </div>
                                          </div> */}
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
          <div className="card-container">
            <button
              className="btn-tag-selected"
              style={{ marginRight: "10px", minWidth: "10%" }}
            >
              <span style={{ color: "white" }}>
                <img
                  className="white-svg"
                  src="/icons/recent.svg"
                  alt="globe icon"
                  width={15}
                  height={15}
                />{" "}
                Recent
              </span>
            </button>

            <button
              className="btn-tags"
              style={{ marginLeft: "10px", minWidth: "10%" }}
              onClick={() => {
                setView("trending");
              }}
            >
              <span style={{ color: "white" }}>
                <img
                  className="white-svg"
                  src="/icons/trending.svg"
                  alt="globe icon"
                  width={15}
                  height={15}
                />{" "}
                Trending
              </span>
            </button>
          </div>
          {/* RECENT STACKS */}
          {pageData.explore_stack_categories?.recent_stacks !== null && (
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

                {pageData.explore_stack_categories?.recent_stacks !== null && (
                  <>
                    {pageData.explore_stack_categories?.recent_stacks.map(
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
                                        <span className="title">{x.name}</span>
                                      </div>
                                      <div>
                                        <img
                                          src={x.creator_details!.profile_pic}
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
  );
}
