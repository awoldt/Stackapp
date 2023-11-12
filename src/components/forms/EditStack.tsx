/* eslint-disable @next/next/no-img-element */
"use client";

import { EditStackTechCheckboxs, RepoSelectList } from "@/functions";
import { Stack } from "@/models/stacks";
import { useRef, useState } from "react";
import RepoSelect from "../../components/GitHubRepoSelect";
import StackCheckboxs from "../../components/EditStackTechCheckboxs";

export default function Edit({
  stackDetails,
  stackID,
  repoSelectData,
  editStackCheckboxs,
}: {
  stackDetails: Stack;
  stackID: string;
  repoSelectData:
    | "error"
    | RepoSelectList[]
    | "must_connect_github_account"
    | null;
  editStackCheckboxs: EditStackTechCheckboxs;
}) {
  const [iconImgSrc, setIconImgSrc] = useState(stackDetails.icon_url);
  const [thumbnailImgSrc, setThumbnailImgSrc] = useState(
    stackDetails.thumbnail_url
  );
  const [loading, setLoading] = useState(false);
  const [deleteStackLoading, setDeleteStackLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();

        setLoading(true);

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
            setLoading(false);
          }
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      }}
    >
      <div className="card-container">
        <div className="create-content">
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="app_title" style={{ width: "100%", padding: "0" }}>
              App name
            </label>
            <input
              type="text"
              id="app_title"
              name="stack_name"
              style={{ marginBottom: "0px" }}
              defaultValue={stackDetails.name}
              placeholder="*Title"
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="app_description"
              style={{ width: "100%", padding: "0" }}
            >
              App description
            </label>
            <textarea
              name="stack_description"
              placeholder="*Description"
              cols={44}
              rows={10}
              style={{ marginBottom: "0" }}
              required
              defaultValue={stackDetails.description}
              id="app_description"
            />
          </div>

          <div style={{ marginBottom: "50px" }}>
            <label htmlFor="stack_icon_input">Icon</label>
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
              id="stack_icon_input"
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
          </div>

          <div style={{ marginBottom: "50px" }}>
            <label htmlFor="stack_thumbnail_input">Thumbnail</label>
            <img
              src={thumbnailImgSrc}
              style={{
                width: "100%",
                display: "block",
                marginBottom: ".4rem",
                paddingBottom: "0px",
                borderRadius: "4px",
                boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.025)",
              }}
            />
            <input
              id="stack_thumbnail_input"
              type="file"
              name="stack_thumbnail"
              accept="image/*"
              style={{
                marginBottom: "1rem",
              }}
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
          </div>

          {stackDetails.github_repo_name !== null && (
            <span>
              Currently have <i>{stackDetails.github_repo_name}</i> selected
            </span>
          )}
          <RepoSelect repoData={repoSelectData} />

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="website_url">App URL</label>
            <input
              type="url"
              id="website_url"
              name="website_url"
              placeholder="https://----.com"
              defaultValue={stackDetails.website_url!}
            />
          </div>

          <StackCheckboxs stackData={editStackCheckboxs} />

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

          {!loading && (
            <div
              className="card-container"
              style={{
                paddingBottom: "0px",
                marginBottom: "0px",
              }}
            >
              <button
                className="btn"
                type="submit"
                style={{
                  width: "100%",
                  marginBottom: "0px",
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
          )}

          {loading && (
            <div
              className="card-container"
              style={{
                paddingBottom: "0px",
                marginBottom: "0px",
              }}
            >
              <div className="lds-dual-ring"></div>
            </div>
          )}

          {!deleteStackLoading && (
            <button
              type="button"
              className="btn"
              id="delete_stack_btn"
              style={{
                marginTop: "50px",
                marginBottom: "1rem",
              }}
              onClick={async () => {
                try {
                  setDeleteStackLoading(true);
                  const req = await fetch(
                    "/api/delete-stack?stack_id=" + stackID
                  );
                  if (req.status === 200) {
                    alert("Stack successfully deleted");
                    window.location.assign("/profile");
                  }
                  setDeleteStackLoading(false);
                } catch (e) {
                  console.log(e);
                  alert("Error while deleting stack");
                  setDeleteStackLoading(false);
                }
              }}
            >
              <img
                src="/imgs/icons/delete.svg"
                className="white-svg"
                alt="delete icon"
                width={15}
                height={15}
              />{" "}
              Delete Stack
            </button>
          )}
          {deleteStackLoading && <div className="lds-dual-ring"></div>}
        </div>
      </div>
    </form>
  );
}
