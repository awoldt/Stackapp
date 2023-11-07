/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { IsUserSignedIn } from "@/functions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EditProfileForm from "../../../components/forms/EditProfile";
import SideNav from "../../../components/SideNav";

export const metadata: Metadata = {
  title: "Edit Profile | Stack",
  description:
    " ",

  alternates: {
    canonical: " ",
  },
};

export default async function Page() {
  const cookieStore = cookies();
  const user = await IsUserSignedIn(cookieStore.get("a_id"));
  if (user === null || user === false) {
    redirect("/signin");
  }

  return (
    <>
      <>
        <section>
          <SideNav />
        </section>

        <section>
          <div className="card-container-title">
            <div className="card-empty">
              <h1>Edit Profile</h1>
              {/* <p>Change the details of your profile.</p> */}
            </div>
          </div>
          
          <div className="card-container">
            <div className="card-registration">
              <EditProfileForm user={user} />
            </div>
          </div>
        </section>
      </>
    </>
  );
}
