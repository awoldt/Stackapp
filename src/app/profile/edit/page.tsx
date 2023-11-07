/* eslint-disable @next/next/no-img-element */
import { IsUserSignedIn } from "@/functions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EditProfileForm from "../../../components/forms/EditProfile";

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
          <div className="background">
            <img
              src={"/imgs/background.avif"}
              alt="background design"
              className="background-image"
            ></img>
          </div>
          <div className="card-container-title">
            <div className="card-empty">
              <h1>Edit Profile</h1>
              <p className="subtitle">Change the details of your profile.</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-edit">
              <EditProfileForm user={user}/>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
