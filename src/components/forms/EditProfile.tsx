/* eslint-disable @next/next/no-img-element */
"use client";

import { UserProfile } from "@/models/profile";
import { FormEvent, useRef, useState } from "react";

export default function Form({ user }: { user: UserProfile }) {
  const [firstName, setFirstName] = useState<string>(user.first_name);
  const [lastName, setLastName] = useState<string>(user.last_name);
  const [bio, setBio] = useState<string>(
    user.bio === null ? "No bio yet" : user.bio
  );
  const [profileImgSrc, setProfileImgSrc] = useState(
    user.profile_pic_filename === null
      ? "/imgs/icons/noprofile.png"
      : user.profile_pic_filename
  );

  const formRef = useRef<HTMLFormElement>(null);

  async function FormSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const req = await fetch("/api/update-profile", {
        method: "POST",
        body: new FormData(formRef.current!),
      });
      if (req.ok) {
        alert("Profile successfully updated");
      }
    } catch (e) {
      alert("Error while submitting form");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        await FormSubmit(e);
      }}
    >
      <img src={profileImgSrc} className="profile-img" alt="Proflie picture" />
      <div style={{ marginBottom: "25px" }}>
        <div>
          <span>
            {firstName} {lastName}
          </span>
        </div>
        <div>
          <span>@{user.username}</span>
        </div>
        <div style={{ marginTop: "5px" }}>
          <span>{bio}</span>
        </div>
      </div>

      <input
        type="file"
        name="profile_icon"
        accept="image/png, image/jpeg, image/webp, image/avif, image/tiff"
        style={{ marginBottom: "50px" }}
        onChange={async (e) => {
          const fileInput = e.target;
          if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();

            reader.onload = (r) => {
              setProfileImgSrc(r.target?.result?.toString()!);
            };

            reader.readAsDataURL(fileInput.files[0]);
          }
        }}
      />

      <input
        type="text"
        defaultValue={user.first_name}
        name="fname"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <input
        type="text"
        defaultValue={user.last_name}
        name="lname"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <div>
        <textarea
          defaultValue={user.bio === null ? "" : user.bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
          name="bio_input"
        />
      </div>

      {/* HAS GITHUB CONNECTED */}
      {user.github_account_id !== null && (
        <>
          <p>You currently have your GitHub account connected</p>
          <button
            type="button"
            onClick={async () => {
              try {
                const req = await fetch("/api/disconnect-github", {
                  method: "POST",
                });
                const res = await req.json();
                alert(res.message);
                if (req.ok) {
                  window.location.href = "/profile/edit";
                }
              } catch (err) {
                alert("Error while disconnecting GitHub account");
              }
            }}
          >
            Disconnect GitHub Account
          </button>
        </>
      )}
      {/* DOES NOT HAVE GITHUB CONNECTED */}
      {user.github_account_id === null && (
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
          title="Authorize Stack to connect to your GitHub Account"
        >
          <div className="btn">Connect Github</div>
        </a>
      )}

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button className="btn" type="submit">
          Update
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          className="btn"
          type="button"
          onClick={() => {
            document.cookie =
              "a_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.assign("/");
          }}
        >
          Sign Out
        </button>
      </div>

      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          className="btn"
          type="button"
          onClick={async () => {
            const c1 = confirm(
              "Are you sure you want to delete your Stack account?"
            );
            if (c1) {
              const c2 = confirm(
                "This action is irreversible. Would you like to continue?"
              );
              if (c2) {
                const c3 = confirm(
                  "Account deletion is permanant. In order to use Stack again you will need to create a new account. I understand, delete my account."
                );

                if (c3) {
                  try {
                    const req = await fetch("/api/delete-account");
                    if (req.ok) {
                      alert(
                        "Account and all associated stacks have been successfully deleted."
                      );

                      //this expression will remove cookie from browser
                      document.cookie =
                        "a_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                      window.location.assign("/");
                    }
                  } catch (e) {
                    console.log(e);
                    alert(
                      "An error occurred while attempting to delete your account."
                    );
                  }
                }
              }
            }
          }}
        >
          Delete Account
        </button>
      </div>
    </form>
  );
}
