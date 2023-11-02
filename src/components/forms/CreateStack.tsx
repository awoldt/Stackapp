/* eslint-disable @next/next/no-img-element */
"use client";

import { FormEvent, useRef } from "react";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  async function FormSubmit(
    event: FormEvent<HTMLFormElement>,
    form: HTMLFormElement
  ) {
    event.preventDefault();

    try {
      const req = await fetch("/api/create-stack", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await req.json();
      console.log(data);
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
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
              placeholder="*Title"
              required
              maxLength={100}
            />

            <div style={{ textAlign: "right" }}>
              <textarea />
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
              accept="image/*"
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
              accept="image/*"
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

            <p>IF USER HAS AUTH GITHUB HERE</p>

            <input
              type="url"
              id="website_url"
              name="website_url"
              placeholder="URL"
            />

            <img
              src="/icons/code.svg"
              alt="language"
              width={20}
              height={15}
              style={{ display: "inline" }}
            />
            <p
              className="subtitle"
              style={{ display: "inline", marginTop: "10px" }}
            >
              Select all Languages used in your tech stack.
            </p>
            <p>EVERY LANGUAGE HERE</p>

            <br />
            <img
              src="/icons/database-fill.svg"
              alt="database"
              width={20}
              height={15}
              style={{ display: "inline" }}
            />
            <p className="subtitle" style={{ display: "inline" }}>
              Select all Databases used in your tech stack.
            </p>
            <p>EVERY DATABASE HERE</p>

            <br />
            <img
              src="/icons/api.svg"
              alt="api"
              width={20}
              height={15}
              style={{ display: "inline" }}
            />
            <p className="subtitle" style={{ display: "inline" }}>
              Select all APIs used in your tech stack.
            </p>
            <p>EVERY API HERE</p>

            <br />
            <img
              src="/icons/cloud-fill.svg"
              alt="cloud"
              width={20}
              height={15}
              style={{ display: "inline" }}
            />
            <p className="subtitle" style={{ display: "inline" }}>
              Select all Cloud Deployment Services used in your tech stack.
            </p>
            <p>EVERY CLOUD HERE</p>

            <br />
            <img
              src="/icons/framework.svg"
              alt="api"
              width={20}
              height={15}
              style={{ display: "inline" }}
            />
            <p className="subtitle" style={{ display: "inline" }}>
              Select all Frameworks used in your tech stack.
            </p>
            <p>EVERY FRAMEWORK HERE</p>

            <div className="card-container">
              <button
                id="create_stack_btn"
                type="submit"
                className="btn-create"
                style={{
                  width: "100%",
                  marginBottom: "0px",
                  marginTop: "40px",
                  backgroundColor: "grey",
                  cursor: "default",
                }}
              >
                {/* <img
                                    src="/icons/create.svg"
                                    className="white-svg"
                                    alt="create logo"
                                    width={15}
                                    height={15}
                                  />{" "} */}
                Create Stack
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
