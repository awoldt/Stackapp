/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EditProfileForm from "../../../components/forms/EditProfile";

export const metadata: Metadata = {
  title: "Edit Profile | Stack",
  description: " ",

  alternates: {
    canonical: " ",
  },
};

export default async function Page() {
  const cookieStore = cookies();
  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  if (account === false) {
    redirect("/signin");
  }

  return (
    <>
      <>
        <section>
          <div className="card-container-title">
            <div className="card-empty">
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                <img src="/imgs/icons/profile2.svg" />
                &nbsp;Edit Profile
              </h1>
              <p>Update your settings to best describe you.</p>
            </div>
          </div>

          <div className="card-container">
            <div className="card-registration">
              <EditProfileForm user={account} />
            </div>
          </div>
        </section>
      </>
    </>
  );
}
