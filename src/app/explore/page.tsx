/* eslint-disable @next/next/no-img-element */
import { IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";
import SideNav from "../../components/CustomNav";
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { Stack } from "@/models/stacks";
import { UserProfile } from "@/models/profile";
import { ObjectId } from "mongodb";

interface ExploreStackDiv {
  stackInfo: Stack;
  userInfo: UserProfile | null;
}

export default async function Page() {
  const cookieStore = cookies();
  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  const recentStacks = await stacksCollection
    .find()
    .sort({ created_on: -1 })
    .limit(12)
    .toArray();

  // loop through all stacks and only allow 1 account per stack div
  // 1 single user cannot spam all their stacks on explore page
  const featuredStacks: ExploreStackDiv[] = [];
  const usedAccounts: string[] = [];
  for (let i = 0; i < recentStacks.length; i++) {
    if (!usedAccounts.includes(recentStacks[i].aid)) {
      usedAccounts.push(recentStacks[i].aid);

      featuredStacks.push({
        stackInfo: recentStacks[i],
        userInfo: await accountsCollection.findOne({
          _id: new ObjectId(recentStacks[i].aid),
        }),
      });
    }
  }

  return (
    <>
      <section>
        <SideNav isSignedIn={account === false ? false : true} />
      </section>

      <div className="card-container-title">
        <div className="card-empty-splash">
          <h1>Explore Stacks</h1>
          <p>Explore recently created Stacks from other Stack members.</p>
        </div>
      </div>

      <div className="card-container" id="yourStacks">
        <div className="card" style={{ textAlign: "left" }}>
          <h5 style={{ opacity: "0.4" }}>RECENT STACKS</h5>

          <hr />

          {featuredStacks.map((x: any, index) => {
            return (
              <div key={index}>
                <a href={`/stack/${String(x.stackInfo._id)}`}>
                  <div className="profile-stack-container">
                    <div className="card-thumbnail">
                      <img src={x.stackInfo.thumbnail_url} />
                    </div>

                    <img
                      src={x.stackInfo.icon_url}
                      className="explore-stack-img"
                      alt="stack-img"
                    />

                    <div className="stack-description">
                      <h2>{x.stackInfo.name}</h2>

                      <p
                        style={{
                          opacity: 0.4,
                          fontSize: "14px",
                          marginTop: ".4rem",
                        }}
                      >
                        {x.stackInfo.created_on.toDateString()}
                      </p>
                      <div className="profile-explore-container">
                        <img
                          src={x.userInfo?.profile_pic_filename!}
                          className="user-profile-img"
                          alt="user-profile-img"
                          style={{ cursor: "pointer" }}
                        />
                        <p style={{ cursor: "pointer" }}>
                          <b>Test Developer</b>
                          <br />@{x.userInfo?.username}
                        </p>
                      </div>
                    </div>
                    <div className="explore-stack-icons-container">
                      <img
                        src={`/imgs/tech/${x.stackInfo.languages_used[0]}.svg`}
                        className="explore-stack-icons"
                        alt="language-logo"
                      />
                      {x.stackInfo.databases_used !== null && (
                        <img
                          src={`/imgs/tech/${x.stackInfo.databases_used[0]}.svg`}
                          className="explore-stack-icons"
                          alt="database-logo"
                        />
                      )}

                      {x.stackInfo.clouds_used !== null && (
                        <img
                          src={`/imgs/tech/${x.stackInfo.clouds_used[0]}.svg`}
                          className="explore-stack-icons"
                          alt="cloud-logo"
                        />
                      )}

                      {x.stackInfo.apis_used !== null && (
                        <img
                          src={`/imgs/tech/${x.stackInfo.apis_used[0]}.svg`}
                          className="explore-stack-icons"
                          alt="api-logo"
                        />
                      )}

                      {x.stackInfo.frameworks_used !== null && (
                        <img
                          src={`/imgs/tech/${x.stackInfo.frameworks_used[0]}.svg`}
                          className="explore-stack-icons"
                          alt="framework-logo"
                        />
                      )}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
