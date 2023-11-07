/* eslint-disable @next/next/no-img-element */
"use client";

import { UserAccount } from "@/models/account";

export default function Form({ user }: { user: UserAccount }) {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          //
        } catch (e) {
          alert(e);
        }
      }}
    >
      <img
        src={
          user.profile_pic === null
            ? "/imgs/icons/noprofile.png"
            : user.profile_pic
        }
        className="profile-img"
        alt="Proflie picture"
      />
      <div>
        <span>
          {user.first_name} {user.last_name}
        </span>
      </div>
      <div>
        {user.bio === null && (
          <p style={{ color: "grey" }}>This user has no bio yet</p>
        )}
        {user.bio !== null && <p>{user.bio}</p>}
      </div>

      <input
        type="file"
        name="profile_icon"
        accept="image/*"
        onChange={async (e) => {
          const fileInput = e.target;
          if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();

            reader.onload = (r) => {
              //
            };

            reader.readAsDataURL(fileInput.files[0]);
          }
        }}
      />

      <input type="text" defaultValue={user.first_name} name="fname" />

      <input type="text" defaultValue={user.last_name} name="lname" />

      <input
        type="text"
        name="profile_username"
        placeholder={"@" + user.username}
        maxLength={100}
      />

      <div style={{ textAlign: "right" }}>
        <p style={{ color: "orange" }}>PROFIle BIO GOES HERE</p>
        <br />
        <br />
      </div>

      {/* HAS GITHUB CONNECTED */}
      {user.github_account_id !== null && (
        <p style={{ color: "orange" }}>github connected goes here</p>
      )}
      {/* DOES NOT HAVE GITHUB CONNECTED */}
      {user.github_account_id === null && (
        <a
          style={{ margin: "0px", padding: "0px" }}
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`}
          title="Authorize Stack to connect to your GitHub Account"
        >
          <div
            style={{ width: "60%", backgroundColor: "#545d68", border: "none" }}
            className="btn-extra"
          >
            <img
              src="/imgs/icons/github.svg"
              className="white-svg"
              alt="github logo"
              width={25}
              height={25}
            />{" "}
            Connect Github
          </div>
        </a>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          className="btn-edit"
          style={{ width: "60%" }}
          type="button"
          onClick={() => {
            document.cookie =
              "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.assign(window.location.href);
          }}
        >
          {/* <img
        src="/icons/signout.svg"
        className="white-svg"
        alt="signout logo"
        width={15}
        height={15}
      />{" "} */}
          Sign Out
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
          className="btn-delete"
          type="button"
          style={{ width: "60%" }}
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
                    if (req.status === 200) {
                      alert("Account has been successfully deleted.");

                      //this expression will remove cookie from browser
                      document.cookie =
                        "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
          {/* <img
        src="/icons/delete.svg"
        className="white-svg"
        alt="delete logo"
        width={15}
        height={15}
      />{" "} */}
          Delete Account
        </button>
      </div>
    </form>
  );
}
