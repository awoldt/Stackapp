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
              <p>Enter the details of your tech stack&apos;s development.</p>
            </div>
          </div>

          {page_data.explore_stack_categories !== null && (
            <>
              {/* RECENT STACKS */}
              {page_data.explore_stack_categories?.recent_stacks !== null && (
                <div className="card-container" id="savedStacks">
                  <div className="card" style={{ textAlign: "center" }}>
                    <h2>Recent Stacks</h2>
                    <div className="stack-container">
                      {page_data.explore_stack_categories?.recent_stacks !==
                        null && (
                        <>
                          {page_data.explore_stack_categories?.recent_stacks.map(
                            (x: _stack, index: number) => {
                              return (
                                <a key={index} href={`/stack/${x.stack_id}`}>
                                  <div className="stack-item">
                                    <img src={x.thumbnail_url} />
                                    <span>{x.name}</span>
                                    {x.creator_details !== undefined && (
                                      <div>
                                        <div>creator details</div>

                                        <img
                                          src={x.creator_details!.profile_pic}
                                          width={20}
                                          height={20}
                                        />
                                        {x.creator_details!.username}
                                      </div>
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

              {/* POPULAR STACKS */}
              {page_data.explore_stack_categories?.popular_stacks !== null && (
                <div className="card-container" id="savedStacks">
                  <div className="card" style={{ textAlign: "center" }}>
                    <h2>Popular Stacks</h2>
                    <div className="stack-container">
                      {page_data.explore_stack_categories?.popular_stacks !==
                        null && (
                        <>
                          {page_data.explore_stack_categories?.popular_stacks.map(
                            (x: _stack, index: number) => {
                              return (
                                <a key={index} href={`/stack/${x.stack_id}`}>
                                  <div className="stack-item">
                                    <img src={x.thumbnail_url} />
                                    <span>{x.name}</span>
                                    {x.creator_details !== undefined && (
                                      <div>
                                        <div>creator details</div>

                                        <img
                                          src={x.creator_details!.profile_pic}
                                          width={20}
                                          height={20}
                                        />
                                        {x.creator_details!.username}
                                      </div>
                                    )}
                                    <p>This stack has {x.likes} likes!</p>
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
                  <i>There was an error while getting explore page details</i>
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
