/* eslint-disable @next/next/no-img-element */
import { accountsCollection, stacksCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page({ params }: { params: any }) {
  const cookieStore = cookies();

  // make sure stack is valid
  if (!ObjectId.isValid(params.stack_id)) {
    notFound();
  }

  // check to see if stack exists
  const stackDetails = await stacksCollection.findOne({
    _id: new ObjectId(params.stack_id),
  });
  if (!stackDetails) {
    notFound();
  }
  // get user who created stack details
  let creatorDetails = await accountsCollection.findOne({
    _id: new ObjectId(stackDetails.aid),
  });
  if (!creatorDetails) {
    console.log("error while getting stack creator details :(");
    creatorDetails = null;
  }

  const isUsersStack =
    cookieStore.get("a_id") === undefined
      ? false
      : cookieStore.get("a_id")!.value !== stackDetails.aid
      ? false
      : true;

  return (
    <>
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
                  src={stackDetails.icon_url}
                  className="profile-img"
                  alt={stackDetails.name + " icon"}
                />

                <h1>{`${stackDetails.name} Tech Stack`}</h1>

                {stackDetails.website_url !== null && (
                  <div style={{ marginBottom: "10px" }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={stackDetails.website_url}
                      className="subtitle"
                      style={{ padding: "0px" }}
                    >
                      {new URL(stackDetails.website_url).hostname}
                    </a>
                  </div>
                )}

                <p
                  style={{
                    fontSize: "16px",
                  }}
                >
                  <img
                    src="/imgs/icons/calendar.svg"
                    alt="calendar icon"
                    width={12}
                    height={12}
                    style={{ display: "inline" }}
                  />{" "}
                  {stackDetails.created_on.toDateString()}
                </p>

                <div
                  className="user-profile-containerParent"
                  style={{ marginBottom: "0px", paddingBottom: "0px" }}
                >
                  <a
                    href={creatorDetails?.username}
                    style={{ margin: "0px", padding: "0px" }}
                  >
                    <div className="user-profile-container">
                      <img
                        src={creatorDetails?.profile_pic!}
                        className="user-profile-img"
                        alt={creatorDetails?.username + " profile picture"}
                      />

                      <span
                        style={{
                          paddingLeft: "8px",
                          paddingTop: "6px",
                        }}
                      >
                        <b>
                          {creatorDetails?.first_name}{" "}
                          {creatorDetails?.last_name}
                        </b>
                        <p
                          style={{
                            fontSize: "16px",
                            opacity: "0.85",
                          }}
                        >
                          @{creatorDetails?.username}
                        </p>
                      </span>
                    </div>
                  </a>
                </div>

                {isUsersStack && (
                  <>
                    <div style={{ marginBottom: "40px", marginTop: "20px" }}>
                      <a
                        href={`/stack/${stackDetails._id}/edit`}
                        className="btn-create"
                      >
                        <img
                          src="/imgs/icons/edit.svg"
                          className="white-svg"
                          alt="edit icon"
                          width={15}
                          height={15}
                          style={{ marginTop: "20px" }}
                        />{" "}
                        Edit Stack
                      </a>
                    </div>
                  </>
                )}

                {/* <div style={{ marginBottom: "20px" }}>
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
                        </div> */}
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
                  src={stackDetails.thumbnail_url}
                  alt={stackDetails.name + " thumbnail"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="card-container">
          <div className="card">
            <p>{stackDetails.description}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="card-container" style={{ paddingBottom: "40px" }}>
          <div className="card">
            <div className="container">
              <div className="grid-container" style={{ paddingBottom: "40px" }}>
                <p style={{ color: "orange" }}>languages used</p>
              </div>

              <div>
                <p style={{ color: "orange" }}>databases used</p>
              </div>

              <div>
                <p style={{ color: "orange" }}>apis used</p>
              </div>

              <div>
                <p style={{ color: "orange" }}>clouds used</p>
              </div>

              <div>
                <p style={{ color: "orange" }}>frameowrkds used</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <p style={{ color: "orange" }}>COMMIT HISTORYU</p>
      </div>
    </>
  );
}
