/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { IsValidAccountCookie } from "@/functions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EditProfileForm from "../../../components/forms/EditProfile";
import SideNav from "../../../components/CustomNav";

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
          <SideNav isSignedIn={true} />
        </section>

        <section>
          <div className="card-container-title">
            <div className="card-empty" style={{ marginTop: "75px" }}>
              <h1>Edit Profile</h1>
              {/* <p>Change the details of your profile.</p> */}
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
