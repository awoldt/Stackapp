import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function LikeBtn({
  stackNumOfLikes,
  isSignedIn,
  isSignedInUsersStack,
  stackID,
  currentNumOfLikes,
  hasSignedInUserAlreadyLikedStack,
}: {
  stackNumOfLikes: number;
  isSignedIn: boolean;
  isSignedInUsersStack: boolean;
  stackID: string;
  currentNumOfLikes: number;
  hasSignedInUserAlreadyLikedStack: boolean | "current_signed_in_users_stack";
}) {
  const [submittingLike, setSubmittingLike] = useState(false); //when true, disable like btn until req has returned
  const [newLikeAmount, setNewLikeAmount] = useState<number | null>(null);
  return (
    <div>
      {/* not signed in */}
      {!isSignedIn && <p>This stack has {stackNumOfLikes} likes</p>}
      {/* signed in.... but its signed in user's stack (cannot like) */}
      {isSignedIn && isSignedInUsersStack && (
        <>
          <button
            className="btn-like"
          >
            <img
              src="/icons/like.svg"
              className="white-svg"
              alt="likes icon"
              width={25}
              height={15} />
            {stackNumOfLikes}
          </button>
        </>
      )}
      {/* ALLOW USER SIGNED IN TO LIKE STACK */}
      {isSignedIn && !isSignedInUsersStack && (
        <>
          {hasSignedInUserAlreadyLikedStack !==
            "current_signed_in_users_stack" &&
            !hasSignedInUserAlreadyLikedStack && (
              <>
                {/* default view, before submitting like */}
                {!submittingLike && newLikeAmount === null && (
                  <button
                    className="btn-prelike"
                    onClick={async () => {
                      setSubmittingLike(true);
                      try {
                        const req = await fetch("/api/like", {
                          method: "POST",
                          body: JSON.stringify({
                            sid: stackID,
                            nl: currentNumOfLikes + 1,
                          }),
                        });
                        const data = await req.json();

                        if (req.status === 200) {
                          setNewLikeAmount(data.newNumberOfLikes);
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
                      src="/icons/like.svg"
                      alt="likes icon"
                      width={25}
                      height={15}
                    />
                    {stackNumOfLikes}
                  </button>
                )}
                {/* while submitting like*/}
                {submittingLike && newLikeAmount === null && (
                  <button
                    className="btn-like"
                    disabled
                  >
                    <img
                      src="/icons/like.svg"
                      className="white-svg"
                      alt="likes icon"
                      width={25}
                      height={15}
                    />
                    {stackNumOfLikes}
                  </button>
                )}
                {/* once like has been successfully submitted */}
                {newLikeAmount !== null && (
                  <button
                    className="btn-like"
                    disabled
                  >
                    <img
                      src="/icons/like.svg"
                      className="white-svg"
                      alt="likes icon"
                      width={25}
                      height={15}
                    />
                    {newLikeAmount}
                  </button>
                )}
              </>
            )}
          {/* user has already liked this stack */}
          {hasSignedInUserAlreadyLikedStack && (
            <button
              className="btn-like"
              disabled
            >
              <img
                src="/icons/like.svg"
                className="white-svg"
                alt="likes icon"
                width={25}
                height={15}
              />
              {stackNumOfLikes}
            </button>
          )}
        </>
      )}
    </div>
  );
}
