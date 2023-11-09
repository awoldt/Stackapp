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
}: {
  repoSelectList:
    | RepoSelectList[]
    | null
    | "must_connect_github_account"
    | "error";
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
          await FormSubmit(e, formRef.current!);
        }}
      >
        <div className="card-container">
          <div className="create-content">
            <input
              type="text"
              id="app_title"
              name="app_name"
              placeholder="* Title"
              required
              maxLength={100}
            />

            <div style={{ textAlign: "right" }}>
              <textarea
                name="app_description"
                placeholder="* App description"
                maxLength={2000}
                required
              />
            </div>

            <label
              className="subtitle"
              htmlFor="app_icon_input"
              style={{ marginBottom: "0px", paddingBottom: "0px" }}
            >
              *Icon
            </label>

            <input
              type="file"
              name="stack_icon"
              accept="image/png, image/jpeg, image/webp, image/avif, image/tiff"
              required
              onChange={async (e) => {
                const fileInput = e.target;
                if (fileInput.files && fileInput.files[0]) {
                  const reader = new FileReader();

                  reader.onload = (r) => {
                    console.log(r);
                  };

                  reader.readAsDataURL(fileInput.files[0]);
                }
              }}
            />

            <label
              className="subtitle"
              htmlFor="app_thumbnail_input"
              style={{ marginBottom: "0px", paddingBottom: "0px" }}
            >
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

                  reader.onload = (r) => {
                    console.log(r);
                  };

                  reader.readAsDataURL(fileInput.files[0]);
                }
              }}
            />

            {}

            <input
              type="url"
              id="website_url"
              name="website_url"
              placeholder="URL"
            />

            <RepoSelect repoData={repoSelectList} />

            <Tech />

            <div className="card-container">
              {!loading && (
                <button id="create_stack_btn" type="submit" className="btn">
                  Create Stack
                </button>
              )}
              {loading && <div>CREATING STACK OK!......</div>}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
