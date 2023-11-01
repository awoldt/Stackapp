"use client";

import { FormEvent, useRef, useState } from "react";

export default function Form() {
  const emailUsernameRef = useRef<HTMLInputElement>(null);

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

  async function FormSubmit(
    event: FormEvent<HTMLFormElement>,
    emailUsernameString: string
  ) {
    event.preventDefault();
    setFormDisabled(true);
    try {
      const req = await fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify({
          email_username_input: emailUsernameString,
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
      {formSubmission === null && (
        <>
          <form
            onSubmit={(e) => {
              FormSubmit(e, emailUsernameRef.current!.value);
            }}
          >
            <input
              type="text"
              placeholder="Email or Username"
              name="email_username_input"
              ref={emailUsernameRef}
              required
              disabled={formDisabled}
            />

            <button type="submit" disabled={formDisabled}>
              Sign in
            </button>
          </form>
        </>
      )}
    </>
  );
}
