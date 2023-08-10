/* eslint-disable @next/next/no-img-element */
import ExploreViewTabs from "@/components/ExploreViewTabs";
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
            <ExploreViewTabs
              view={view}
              setView={setView}
              pageData={page_data}
            />
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
