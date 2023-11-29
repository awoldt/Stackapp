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
  const [loading, setLoading] = useState(false);

  async function FormSubmit(
    event: FormEvent<HTMLFormElement>,
    emailUsernameString: string
  ) {
    event.preventDefault();
    setFormDisabled(true);
    setLoading(true);
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
      setLoading(false);
    } catch (err) {
      alert(err);
      setFormDisabled(false);
      setLoading(false);
    }
  }

  return (
    <>
      <div
        className="card-container"
        style={{
          height: "100vh",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="splash" style={{ marginTop: "0", marginBottom: "1rem" }}>
          Stack
        </h1>

        <div className="card-registration">
          {formSubmission?.status !== "success" && (
            <>
              <form
                onSubmit={(e) => {
                  FormSubmit(e, emailUsernameRef.current!.value);
                }}
              >
                <div className="input-group">
                  <input
                    className="input"
                    type="text"
                    name="email_username_input"
                    ref={emailUsernameRef}
                    required
                    disabled={formDisabled}
                  />
                  <label className="label" htmlFor="email_username_input">
                    Email or Username
                  </label>
                </div>

                {!loading && (
                  <div className="btn-container" style={{ margin: "auto" }}>
                    <button
                      className="btn"
                      type="submit"
                      disabled={formDisabled}
                    >
                      Login
                    </button>
                  </div>
                )}
                {loading && (
                  <div className="btn-container" style={{ margin: "auto" }}>
                    <div className="lds-dual-ring"></div>
                  </div>
                )}
              </form>
            </>
          )}
          {formSubmission !== null && (
            <>
              {formSubmission.status === "success" && (
                <div>
                  <p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>{formSubmission.msg}</p>
                </div>
              )}
              {formSubmission.status === "error" && (
                <div>
                  <p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>{formSubmission.msg}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
