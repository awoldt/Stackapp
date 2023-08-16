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
      {!isSignedIn && (
        <>
          <div className="btn-container-like"
            style={{ marginTop: "20px", marginBottom: "10px" }}>
            <p className="subtitle">
              <b>{currentNumOfLikes}</b>
            </p>
            <p className="subtitle"
              style={{ opacity: "0.85" }}>
              &nbsp;likes
            </p>
          </div>

          <div className="btn-container-like">
            <button
              className="btn-like"
              onClick={() => {
                // alert("A Stack account is required to like Stacks.");
                document.location = '/signin';
              }}
            >
              <img
                src="/icons/prelike.svg"
                alt="likes icon"
                width={30}
                height={30}
              />{" "}
            </button>
          </div>
        </>
      )}

      {/* signed in.... but its signed in user's stack (cannot like) */}
      {isSignedIn && isSignedInUsersStack && (
        <>
          <p className="subtitle">Your Stack has <b>{currentNumOfLikes}</b> likes.</p>
        </>
      )}

      {/* ALLOW USER SIGNED IN TO LIKE/UNLIKE STACK */}
      {isSignedIn && !isSignedInUsersStack && (
        <>
          {/* LIKE */}
          {submissionType === "like" && (
            <>
              {/* default view, before submitting like */}
              {!submittingLike && (
                <>
                  <div className="btn-container-like"
                    style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <p className="subtitle">
                      <b>{likesAmount}</b>
                    </p>
                    <p className="subtitle"
                      style={{ opacity: "0.85" }}>
                      &nbsp;likes
                    </p>
                  </div>
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
                        src="/icons/prelike.svg"
                        alt="likes icon"
                        width={30}
                        height={30} />{" "}
                    </button>
                  </div>
                </>
              )}
              {/* while submitting like*/}
              {submittingLike && (
                <>
                  <div className="btn-container-like"
                    style={{ marginTop: "20px" }}>
                    <p className="subtitle">
                      <b>{likesAmount}</b>
                    </p>
                    <p className="subtitle"
                      style={{ opacity: "0.85" }}>
                      &nbsp;likes
                    </p>
                  </div>
                  <div className="btn-container-like" style={{ marginTop: "0px", marginBottom: "10px" }}>
                    <p className="subtitle"
                      style={{ opacity: "0.85" }}>
                      You like this Stack.
                    </p>
                  </div>
                  <div className="btn-container-like">
                    <button
                      className="btn-postlike" disabled>
                      <img
                        className="white-svg"
                        src="/icons/like.svg"
                        alt="likes icon"
                        width={30}
                        height={30} />{" "}
                    </button>
                  </div>
                </>
              )}
            </>
          )}

          {/* UNLIKE */}
          {submissionType === "unlike" && (
            <>
              {/* default view, before removing like */}
              {!submittingLike && (
                <>
                  <div className="btn-container-like"
                    style={{ marginTop: "20px" }}>
                    <p className="subtitle">
                      <b>{likesAmount}</b>
                    </p>
                    <p className="subtitle"
                      style={{ opacity: "0.85" }}>
                      &nbsp;likes
                    </p>
                  </div>
                  <div className="btn-container-like" style={{ marginTop: "0px", marginBottom: "10px" }}>
                    <p className="subtitle"
                      style={{ opacity: "0.85" }}>
                      You like this Stack.
                    </p>
                  </div>
                  <div
                    className="btn-container-like"
                    style={{ textAlign: "left" }}
                  >
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
                        width={30}
                        height={30}
                      />{" "}
                    </button>
                  </div>
                </>
              )}
              {/* while removing like*/}
              {submittingLike && (
                <>
                  <div className="btn-container-like"
                    style={{ marginTop: "20px", marginBottom: "10px" }}>
                    <p className="subtitle">
                      <b>{likesAmount}</b>
                    </p>
                    <p className="subtitle"
                      style={{ opacity: "0.85" }}>
                      &nbsp;likes
                    </p>
                  </div><div className="btn-container-like">
                    <button
                      className="btn-like" disabled>
                      <img
                        src="/icons/prelike.svg"
                        alt="likes icon"
                        width={30}
                        height={30} />{" "}
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
