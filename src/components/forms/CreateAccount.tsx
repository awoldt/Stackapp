"use client";

import { FormEvent, useRef, useState } from "react";

export default function Form() {
  const [formSubmission, setFormSubmission] = useState<
    | {
      status: "success";
      msg: string;
    }
    | {
      status: "error";
      msg: string;
    }
    | null
  >(null);

  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameref = useRef<HTMLInputElement>(null);

  async function FormSubmit(
    event: FormEvent<HTMLFormElement>,
    email: string,
    username: string,
    firstName: string,
    lastName: string
  ) {
    event.preventDefault();
    setFormDisabled(true);
    try {
      const req = await fetch("/api/create-account", {
        method: "POST",
        body: JSON.stringify({
          bio: null,
          created_on: new Date(),
          email: email,
          first_name: firstName,
          github_access_token: null,
          github_account_id: null,
          last_name: lastName,
          liked_stacks: null,
          profile_pic: null,
          profile_pic_filename: null,
          username: username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await req.json();
      if (data.status === 200) {
        setFormSubmission({ status: "success", msg: data.message });
      } else {
        setFormSubmission({ status: "error", msg: data.message });
      }
      setFormDisabled(false);
    } catch (err) {
      alert(err);
      setFormDisabled(false);
    }
  }

  return (
    <>
      <div className="card-container" style={{ height: "100vh", alignItems: "center", flexDirection: "column" }}>
        <h1 className="splash" style={{ marginTop: "0", marginBottom: "1rem" }}>
          Stack
        </h1>

        <div className="card-registration">

          {formSubmission !== null && (
            <>
              {formSubmission.status === "success" && (
                <div>
                  <p style={{ color: "green" }}>{formSubmission.msg}</p>
                </div>
              )}
              {formSubmission.status === "error" && (
                <div>
                  <p style={{ color: "red" }}>{formSubmission.msg}</p>
                </div>
              )}
            </>
          )}

          {formSubmission?.status !== "success" && (
            <form
              onSubmit={(e) => {
                FormSubmit(
                  e,
                  emailRef.current!.value,
                  usernameRef.current!.value,
                  fnameRef.current!.value,
                  lnameref.current!.value
                );
              }}
            >
              <input
                type="email"
                placeholder="Email"
                name="email_input"
                ref={emailRef}
                disabled={formDisabled}
                required
              />
              <input
                ref={usernameRef}
                type="text"
                placeholder="Username"
                name="username_input"
                disabled={formDisabled}
                required
              />

              <input
                ref={fnameRef}
                type="text"
                placeholder="First name"
                name="fname_input"
                disabled={formDisabled}
                required
              />
              <input
                ref={lnameref}
                type="text"
                placeholder="Last name"
                name="lname_input"
                disabled={formDisabled}
                required
              />

              <div className="btn-container" style={{ margin: "auto" }}>
                <button className="btn" type="submit" disabled={formDisabled}>
                  Sign Up
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
