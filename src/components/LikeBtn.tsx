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
      {!isSignedIn &&
        <>
          <button className="btn-like">
            <img
              src="/icons/like.svg"
              className="white-svg"
              alt="likes icon"
              width={25}
              height={15} />
            {likesAmount}
          </button>
        </>
      }
      {/* signed in.... but its signed in user's stack (cannot like) */}
      {isSignedIn && isSignedInUsersStack && (
        <>
          <button className="btn-like">
            <img
              src="/icons/like.svg"
              className="white-svg"
              alt="likes icon"
              width={15}
              height={15}
            />{" "}
            {likesAmount}
          </button>
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
                    src="/icons/like.svg"
                    alt="likes icon"
                    width={25}
                    height={15}
                  />
                  {likesAmount}
                </button>
              )}
              {/* while submitting like*/}
              {submittingLike && (
                <button className="btn-like" disabled>
                  <img
                    src="/icons/like.svg"
                    className="white-svg"
                    alt="likes icon"
                    width={25}
                    height={15}
                  />
                  {likesAmount}
                </button>
              )}
            </>
          )}

          {/* UNLIKE */}
          {submissionType === "unlike" && (
            <>
              {/* default view, before removing like */}
              {!submittingLike && (
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
                    width={25}
                    height={15}
                  />
                  {likesAmount}
                </button>
              )}
              {/* while removing like*/}
              {submittingLike && (
                <button className="btn-postlike" disabled>
                  <img
                    src="/icons/like.svg"
                    className="white-svg"
                    alt="likes icon"
                    width={25}
                    height={15}
                  />
                  {likesAmount}
                </button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
