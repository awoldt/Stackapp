/* eslint-disable @next/next/no-img-element */
"use client";

import { RepoSelectList } from "@/functions";
import { Stack } from "@/models/stacks";
import { useRef, useState } from "react";
import RepoSelect from "../../components/GitHubRepoSelect";

export default function Edit({
  stackDetails,
  stackID,
  repoSelectData,
}: {
  stackDetails: Stack;
  stackID: string;
  repoSelectData:
    | "error"
    | RepoSelectList[]
    | "must_connect_github_account"
    | null;
}) {
  const [iconImgSrc, setIconImgSrc] = useState(stackDetails.icon_url);
  const [thumbnailImgSrc, setThumbnailImgSrc] = useState(
    stackDetails.thumbnail_url
  );

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          const f = new FormData(formRef.current!);
          f.append("stack_id", stackID);
          const req = await fetch(`/api/update-stack`, {
            method: "POST",
            body: f,
          });
          if (req.ok) {
            window.location.href = `/stack/${stackID}`;
          } else {
            const res = await req.json();
            alert(res.message);
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      <div className="card-container">
        <div className="create-content">
          <label htmlFor="app_title" style={{ width: "100%" }}>
            <input
              type="text"
              id="app_title"
              name="stack_name"
              style={{ marginBottom: "0px" }}
              defaultValue={stackDetails.name}
              placeholder="*Title"
              required
            />
          </label>

          <label htmlFor="app_description" style={{ width: "100%" }}>
            <textarea
              name="stack_description"
              defaultValue={stackDetails.description}
            />
          </label>

          <p className="subtitle">*Icon</p>
          <img
            src={iconImgSrc}
            style={{
              display: "block",
              marginBottom: "20px",
              marginTop: "0px",
            }}
            className="profile-img"
          />
          <input
            type="file"
            name="stack_icon"
            accept="image/*"
            onChange={async (e) => {
              const fileInput = e.target;
              if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();

                reader.onload = (r) => {
                  setIconImgSrc(r.target?.result?.toString()!);
                };

                reader.readAsDataURL(fileInput.files[0]);
              }
            }}
          />

          <p className="subtitle">*Thumbnail</p>
          <img
            src={thumbnailImgSrc}
            style={{
              width: "100%",
              display: "block",
              marginBottom: "20px",
              borderRadius: "4px",
              boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.025)",
              border: "1px solid rgba(0, 0, 0, 0.095)",
            }}
          />
          <input
            type="file"
            name="stack_thumbnail"
            accept="image/*"
            onChange={async (e) => {
              const fileInput = e.target;
              if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();

                reader.onload = (r) => {
                  setThumbnailImgSrc(r.target?.result?.toString()!);
                };

                reader.readAsDataURL(fileInput.files[0]);
              }
            }}
          />

          <RepoSelect repoData={repoSelectData} />

          <input
            type="url"
            id="website_url"
            name="website_url"
            placeholder="URL"
            defaultValue={stackDetails.website_url!}
          />

          {/* <p className="subtitle">
          <br />
          <img
            src="/icons/delete.svg"
            alt="delete logo"
            width={20}
            height={15}
          />
          This action is irreversible, Stacks are not recoverable.
        </p> */}

          <button
            type="button"
            className="btn-delete"
            id="delete_stack_btn"
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              width: "100%",
            }}
            onClick={async () => {
              try {
                const req = await fetch("/api/delete-stack");
                if (req.status === 200) {
                  alert("Stack successfully deleted");
                  window.location.assign("/profile");
                }
              } catch (e) {
                console.log(e);
                alert("Error while deleting stack");
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
            Delete Stack
          </button>

          <div
            className="card-container"
            style={{
              paddingBottom: "0px",
              marginBottom: "0px",
            }}
          >
            <button
              className="btn-edit"
              type="submit"
              style={{
                width: "100%",
                marginBottom: "0px",
                backgroundColor: "grey",
                cursor: "default",
              }}
            >
              {/* <img
                        src="/icons/update.svg"
                        className="white-svg"
                        alt="update logo"
                        width={15}
                        height={15}
                      />{" "} */}
              Update Stack
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
