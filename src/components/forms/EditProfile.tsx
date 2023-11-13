/* eslint-disable @next/next/no-img-element */
"use client";

import { UserProfile } from "@/models/profile";
import { FormEvent, useRef, useState } from "react";

export default function Form({ user }: { user: UserProfile }) {
  const [profileImgSrc, setProfileImgSrc] = useState(
    user.profile_pic_filename === null
      ? "/imgs/icons/noprofile.png"
      : user.profile_pic_filename
  );
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  async function FormSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setLoading(true);

      const req = await fetch("/api/update-profile", {
        method: "POST",
        body: new FormData(formRef.current!),
      });
      if (req.ok) {
        alert("Profile successfully updated");
        setLoading(false);
      }
    } catch (e) {
      alert("Error while submitting form");
      setLoading(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        await FormSubmit(e);
      }}
    >
      <img src={profileImgSrc} style={{ marginTop: "0" }} className="profile-img" alt="Proflie picture" />
      {/* <div style={{ marginBottom: "25px" }}>
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
      </div> */}
      <br />
      <br />

      <input
        type="file"
        name="profile_icon"
        accept="image/png, image/jpeg, image/webp, image/avif, image/tiff"
        style={{ marginBottom: "20px" }}
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

      <div>
        <label style={{ padding: 0 }} htmlFor="user_bio">Bio</label>
        <textarea
          defaultValue={user.bio === null ? "" : user.bio}
          name="bio_input"
          id="user_bio"
          style={{ marginBottom: "20px" }}
        />
      </div>



      {/* HAS GITHUB CONNECTED */}
      {user.github_account_id !== null && (
        <>
          <p><b>Your GitHub Account is Connected.</b></p>
          <button
            type="button"
            className="btn"
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
            Disconnect
          </button>
        </>
      )}
      {/* DOES NOT HAVE GITHUB CONNECTED */}
      {user.github_account_id === null && (
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
          title="Authorize Stack to connect to your GitHub Account"
          className="btn"
        >
          Connect Github
          <br />
        </a>
      )}
      <br />
      <br />

      <button
        className="btn"
        type="button"
        style={{ marginBottom: "20px" }}
        onClick={() => {
          document.cookie =
            "a_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.location.assign("/");
        }}
      >
        Sign Out
      </button>
      <br />

      <button
        className="btn"
        type="button"
        style={{ marginBottom: "20px" }}
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
      <br />

      <div className="card-container">
        {!loading && (
          <button className="btn" type="submit">
            Update Profile
          </button>
        )}
        {loading && <div className="lds-dual-ring"></div>}
      </div>
    </form>
  );
}
