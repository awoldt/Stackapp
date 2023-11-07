import { Metadata } from "next";
import { cookies } from "next/headers";
import CreateStackForm from "../../components/forms/CreateStack";
import { GetGitHubRepoSelectData, IsUserSignedIn } from "@/functions";
import SideNav from "../../components/SideNav";

export const metadata: Metadata = {
  title: "Create Stack | Stack",
  description:
    " ",

  alternates: {
    canonical: " ",
  },
};

export default async function Page() {
  const cookieStore = cookies();

  const account: any = await IsUserSignedIn(cookieStore.get("a_id"));

  if (account === null || account === false) {
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
          <SideNav />
        </section>
        
        <div className="card-container-title">
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
