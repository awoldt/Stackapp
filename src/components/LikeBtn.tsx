import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function LikeBtn({
  isSignedIn,
  isSignedInUsersStack,
  stackID,
  currentNumOfLikes,
  hasSignedInUserAlreadyLikedStack,
}: {
  isSignedIn: boolean;
  isSignedInUsersStack: boolean;
  stackID: string;
  currentNumOfLikes: number;
  hasSignedInUserAlreadyLikedStack: boolean | "current_signed_in_users_stack";
}) {
  const [submittingLike, setSubmittingLike] = useState(false); //when true, btn will be disabled while fetch
  const [likesAmount, setLikesAmount] = useState<number>(currentNumOfLikes);
  const [submissionType, setSubmissionType] = useState<"like" | "unlike">(
    hasSignedInUserAlreadyLikedStack !== "current_signed_in_users_stack" &&
      hasSignedInUserAlreadyLikedStack
      ? "unlike"
      : "like"
  );

  return (
    <div>


      {/* not signed in */}
      {/* {!isSignedIn &&
        <>
          <div className="btn-container-like">
            <button className="btn-postlike">
              <img
                className="white-svg"
                src="/icons/like.svg"
                alt="likes icon"
                width={20}
                height={20} /> Like
            </button>
          </div>
        </>
      } */}


      {/* signed in.... but its signed in user's stack (cannot like) */}
      {/* {isSignedIn && isSignedInUsersStack && (
        <>
          <div className="btn-container-like">
            <button className="btn-postlike">
              <img
                className="white-svg"
                src="/icons/like.svg"
                alt="likes icon"
                width={20}
                height={20} /> Like
            </button>
          </div>
        </>
      )} */}


      {/* ALLOW USER SIGNED IN TO LIKE/UNLIKE STACK */}
      {isSignedIn && !isSignedInUsersStack && (
        <>
          {/* LIKE */}
          {submissionType === "like" && (
            <>
              {/* default view, before submitting like */}
              {!submittingLike && (
                <div className="btn-container-like">
                  <button
                    className="btn-like"
                    onClick={async () => {
                      setSubmittingLike(true);
                      try {
                        const req = await fetch("/api/like", {
                          method: "POST",
                          body: JSON.stringify({
                            sid: stackID,
                            nl: likesAmount + 1,
                            method: "like",
                          }),
                        });
                        const data = await req.json();

                        if (req.status === 200) {
                          setLikesAmount(data.newNumberOfLikes);
                          setSubmissionType("unlike");
                        } else {
                          alert(data.msg);
                        }
                        setSubmittingLike(false);
                      } catch (e) {
                        console.log(e);
                        alert("Error while liking stack");
                        setSubmittingLike(false);
                      }
                    }}
                  >
                    <img
                      className="white-svg"
                      src="/icons/prelike.svg"
                      alt="likes icon"
                      width={20}
                      height={20} /> Like
                  </button>
                  <p style={{ paddingLeft: "8px", fontSize: "16px" }}>
                    <b>{likesAmount} Likes</b>
                  </p>
                </div>
              )}
              {/* while submitting like*/}
              {submittingLike && (
                <div className="btn-container-like">
                  <button className="btn-postlike" disabled>
                    <img
                      className="white-svg"
                      src="/icons/like.svg"
                      alt="likes icon"
                      width={20}
                      height={20} /> Unlike
                  </button>
                  <p style={{ paddingLeft: "8px", fontSize: "16px" }}>
                    <b>{likesAmount} Likes</b>
                  </p>
                </div>
              )}
            </>
          )}

          {/* UNLIKE */}
          {submissionType === "unlike" && (
            <>
              {/* default view, before removing like */}
              {!submittingLike && (
                <>
                  <div className="btn-container-like" style={{ textAlign: "left" }}>
                    <button
                      className="btn-postlike"
                      onClick={async () => {
                        setSubmittingLike(true);
                        try {
                          const req = await fetch("/api/like", {
                            method: "POST",
                            body: JSON.stringify({
                              sid: stackID,
                              nl: likesAmount - 1,
                              method: "unlike",
                            }),
                          });
                          const data = await req.json();

                          if (req.status === 200) {
                            setLikesAmount(data.newNumberOfLikes);
                            setSubmissionType("like");
                          } else {
                            alert(data.msg);
                          }
                          setSubmittingLike(false);
                        } catch (e) {
                          console.log(e);
                          alert("Error while liking stack");
                          setSubmittingLike(false);
                        }
                      }}
                    >
                      <img
                        className="white-svg"
                        src="/icons/like.svg"
                        alt="likes icon"
                        width={20}
                        height={20} /> Unlike
                    </button>
                    <p style={{ paddingLeft: "8px", fontSize: "16px", width: "fit-content" }}>
                      <b>{likesAmount} Likes</b>
                      <br />
                      You Like this Stack.
                    </p>
                  </div>
                </>
              )}
              {/* while removing like*/}
              {submittingLike && (
                <div className="btn-container-like">
                  <button className="btn-like" disabled>
                    <img
                      className="white-svg"
                      src="/icons/prelike.svg"
                      alt="likes icon"
                      width={20}
                      height={20} /> Like
                  </button>
                  <p style={{ paddingLeft: "8px", fontSize: "16px" }}>
                    <b>{likesAmount} Likes</b>
                  </p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
