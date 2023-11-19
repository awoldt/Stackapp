/* eslint-disable @next/next/no-img-element */
"use client";

import { FormEvent, useRef, useState } from "react";
import RepoSelect from "../../components/GitHubRepoSelect";
import { RepoSelectList } from "@/functions";
import Tech from "../Tech";

interface FormResponse {
  status: number;
  message: string;
  stack_id?: string;
}

export default function Form({
  repoSelectList,
  signedIn,
}: {
  repoSelectList:
    | RepoSelectList[]
    | null
    | "must_connect_github_account"
    | "error";
  signedIn: boolean;
}) {
  // stack submission is used only when there is an error with creating new stack
  // if successful, redirect page to /stack/${stackId}
  const [stackSubmission, setStackSubmission] = useState<null | {
    msg: string;
    stackId?: string | undefined;
  }>(null);
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  async function FormSubmit(
    event: FormEvent<HTMLFormElement>,
    form: HTMLFormElement
  ) {
    event.preventDefault();
    setLoading(true);

    try {
      const req = await fetch("/api/create-stack", {
        method: "POST",
        body: new FormData(form),
      });
      const data: FormResponse = await req.json();

      // SUCCESS
      if (req.status === 200) {
        window.location.href = `/stack/${data.stack_id}`;
      }
      // ERROR
      else {
        setStackSubmission({
          msg: data.message,
        });
        setLoading(false);
      }
    } catch (err) {
      alert(err);
      setLoading(false);
    }
  }

  return (
    <>
      {stackSubmission !== null && !loading && (
        <>
          <div className="card-container">
            <p style={{ color: "red" }}>{stackSubmission?.msg}</p>
          </div>
        </>
      )}
      <form
        ref={formRef}
        encType="multipart/form-data"
        onSubmit={async (e) => {
          if (signedIn) {
            await FormSubmit(e, formRef.current!);
          } else {
            alert("You must be signed in to create a Stack");
          }
        }}
      >
        <div className="card-container">
          <div className="create-content">
            <div>
              <label style={{ padding: "0" }} htmlFor="app_title">
                *App Name
              </label>
              <input
                type="text"
                id="app_title"
                name="app_name"
                required
                maxLength={100}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label style={{ padding: "0" }} htmlFor="app_description_input">
                *App Description
              </label>
              <textarea
                name="app_description"
                id="app_description_input"
                cols={44}
                rows={10}
                maxLength={2000}
                style={{ marginBottom: "0rem" }}
                required
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="app_icon_input" style={{ padding: "0" }}>
                *Icon
              </label>

              <input
                id="app_icon_input"
                type="file"
                name="stack_icon"
                accept="image/png, image/jpeg, image/webp, image/avif, image/tiff"
                style={{ marginBottom: "20px", paddingBottom: "0px" }}
                required
                onChange={async (e) => {
                  const fileInput = e.target;
                  if (fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();

                    reader.onload = (r) => {};

                    reader.readAsDataURL(fileInput.files[0]);
                  }
                }}
              />

              <label htmlFor="app_thumbnail_input" style={{ padding: "0" }}>
                *Thumbnail
              </label>

              <input
                type="file"
                name="stack_thumbnail"
                accept="image/png, image/jpeg, image/webp, image/avif, image/tiff"
                id="app_thumbnail_input"
                required
                onChange={async (e) => {
                  const fileInput = e.target;
                  if (fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();

                    reader.onload = (r) => {};

                    reader.readAsDataURL(fileInput.files[0]);
                  }
                }}
              />
            </div>

            <div>
              <label style={{ padding: "0" }} htmlFor="website_url">
                App URL
              </label>
              <input
                type="url"
                id="website_url"
                name="website_url"
                placeholder="https://example.com"
              />
            </div>

            {signedIn && <RepoSelect repoData={repoSelectList} />}
            {!signedIn && (
              <div
                style={{
                  margin: "25px",
                  padding: "10px",
                  border: "3px solid black",
                  borderRadius: "10px",
                }}
              >
                <img src="/imgs/icons/github.svg" />
                <p>
                  Connect your GitHub account with your Stack account and
                  showcase your app&apos;s commit history as you push code
                </p>
              </div>
            )}

            <Tech />

            {signedIn && (
              <div className="card-container">
                {!loading && (
                  <button
                    id="create_stack_btn"
                    type="submit"
                    className="btn-confirm"
                  >
                    Create Stack
                  </button>
                )}
                {loading && <div className="lds-dual-ring"></div>}
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
