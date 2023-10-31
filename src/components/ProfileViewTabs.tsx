/* eslint-disable @next/next/no-img-element */
//this component contains the 2 view btns (stacks and liked)

import { _PAGEDATA_profile, _stack } from "@/types";

export default function ProfileTabViews({
  view,
  setView,
  pageData,
}: {
  view: "stacks" | "liked_stacks";
  setView: React.Dispatch<React.SetStateAction<"stacks" | "liked_stacks">>;
  pageData: _PAGEDATA_profile;
}) {
  return (
    <>
      {view === "stacks" && (
        <>
          {/* <div className="card-container">
            <button
              id="btn-yourStacks"
              className="btn-tag-selected"
              style={{ marginRight: "10px", minWidth: "15%" }}
            >
              <span style={{ color: "white" }}>
                <img
                  className="white-svg"
                  src="/icons/stack.svg"
                  alt="globe icon"
                  width={15}
                  height={15}
                />{" "}
                Stacks
              </span>
            </button>
            <button
              id="btn-savedStacks"
              className="btn-tags"
              style={{ marginLeft: "10px", minWidth: "15%" }}
              onClick={() => {
                setView("liked_stacks");
              }}
            >
              <span style={{ color: "white" }}>
                <img
                  className="white-svg"
                  src="/icons/like.svg"
                  alt="globe icon"
                  width={15}
                  height={15}
                />{" "}
                Liked
              </span>
            </button>
          </div> */}
          {pageData.user_stacks !== null && (
            <section>
              {pageData.user_stacks === 0 && (
                <>
                  <div
                    className="card-container"
                    style={{
                      paddingTop: "0px",
                      paddingBottom: "40px",
                    }}
                  >
                    <div
                      className="card"
                      style={{
                        textAlign: "center",
                        paddingBottom: "80px",
                      }}
                    >
                      <h2>
                        Stacks
                      </h2>
                      <span className="subtitle">
                        0 Stacks
                        <br />
                        <br />
                      </span>
                      <a href={"/create"} className="btn-create">
                        Create Stack
                      </a>
                    </div>
                  </div>
                </>
              )}
              {pageData.user_stacks !== 0 &&
                pageData.user_stacks.length > 0 && (
                  <div
                    className="card-container"
                    style={{
                      paddingTop: "0px",
                      paddingBottom: "80px",
                    }}
                  >
                    <div className="card" style={{ textAlign: "center" }}>
                      <h2>
                        {/* <img
                          src="/icons/stack.svg"
                          alt="globe icon"
                          width={25}
                          height={25}
                        />{" "} */}
                        Stacks
                      </h2>
                      <span className="subtitle">
                        {pageData.user_stacks.length} Stacks
                        <br />
                      </span>

                      {pageData.user_stacks.map(
                        (x: Partial<_stack>, index: number) => {
                          return (
                            <a href={`/stack/${x.stack_id}`} key={index}>
                              <div className="card-container">
                                <div className="card-thumbnail">
                                  <img
                                    src={x.thumbnail_url!}
                                    style={{ cursor: "pointer" }}
                                    alt={`${x.name} thumbnail`}
                                  />
                                </div>
                              </div>
                              <span className="bold">{x.name}</span>
                            </a>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
            </section>
          )}
          {pageData.user_stacks === null && (
            <p>There was an error while fetching your Stacks.</p>
          )}
          {pageData.user_profile_data === null && (
            <p>There was an error while fetching your profile details</p>
          )}
        </>
      )}

      {view === "liked_stacks" && (
        <>
          <div className="card-container">
            <button
              id="btn-yourStacks"
              className="btn-tags"
              style={{ marginRight: "10px", minWidth: "15%" }}
              onClick={() => {
                setView("stacks");
              }}
            >
              <span style={{ color: "white" }}>
                <img
                  className="white-svg"
                  src="/icons/stack.svg"
                  alt="globe icon"
                  width={15}
                  height={15}
                />{" "}
                Stacks
              </span>
            </button>
            <button
              id="btn-savedStacks"
              className="btn-tag-selected"
              style={{ marginLeft: "10px", minWidth: "15%" }}
            >
              <span style={{ color: "white" }}>
                <img
                  className="white-svg"
                  src="/icons/like.svg"
                  alt="globe icon"
                  width={15}
                  height={15}
                />{" "}
                Liked
              </span>
            </button>
          </div>
          <div
            className="card-container"
            id="savedStacks"
            style={{
              paddingTop: "0px",
              paddingBottom: "20px",
            }}
          >
            <div
              className="card"
              style={{ textAlign: "center", paddingBottom: "80px" }}
            >
              <h2>
                {/* <img
                  src="/icons/like.svg"
                  alt="globe icon"
                  width={25}
                  height={25}
                />{" "} */}
                Liked
              </h2>
              <span className="subtitle">
                Only you can see what you&apos;ve Liked.
                <br />
              </span>
              {pageData.users_liked_stacks !== null && (
                <>
                  {pageData.users_liked_stacks !== "no_liked_stacks" && (
                    <>
                      <div
                        className="stack-container"
                        style={{
                          paddingTop: "0px"
                        }}
                      >
                        {pageData.users_liked_stacks.map(
                          (x: _stack, index: number) => {
                            return (
                              <a href={`/stack/${x.stack_id}`} key={index}>
                                <div className="stack-item">
                                  <img src={x.thumbnail_url} />
                                  <span className="bold">{x.name}</span>
                                </div>
                              </a>
                            );
                          }
                        )}
                      </div>
                    </>
                  )}
                  {pageData.users_liked_stacks === "no_liked_stacks" ||
                    (pageData.users_liked_stacks.length === 0 && (
                      <a href={"/explore"} className="btn-create">
                        <img
                          src="/icons/explore.svg"
                          className="white-svg"
                          alt="explore logo"
                          width={15}
                          height={15}
                        />{" "}
                        Explore Stacks
                      </a>
                    ))}
                </>
              )}
              {pageData.users_liked_stacks === null && (
                <p>There was an error while fetching your liked stacks</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
