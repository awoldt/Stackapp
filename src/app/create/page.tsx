import { Metadata } from "next";
import { cookies } from "next/headers";
import CreateStackForm from "../../components/forms/CreateStack";
import { GetGitHubRepoSelectData, IsValidAccountCookie } from "@/functions";
import SideNav from "../../components/CustomNav";

export const metadata: Metadata = {
  title: "Create Stack | Stack",
  description: " ",

  alternates: {
    canonical: " ",
  },
};

export default async function Page() {
  const cookieStore = cookies();

  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  if (account === false) {
    return <p>You must be signed in to create a stack</p>;
  } else {
    // if github access token is not null
    // fetch repo select data

    const repoSelectList = await GetGitHubRepoSelectData(
      account.github_access_token,
      String(account._id)
    );

    return (
      <>
        <section>
          <SideNav isSignedIn={true} />
        </section>

        <div className="card-container" style={{ paddingTop: "4rem" }}>
          <div className="card-empty">
            <h1>Create Stack</h1>
            {/* <p>Change the details of your profile.</p> */}
          </div>
        </div>

        <CreateStackForm repoSelectList={repoSelectList} />
      </>
    );
  }
}
