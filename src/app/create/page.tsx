import { cookies } from "next/headers";
import CreateStackForm from "../../components/forms/CreateStack";
import { GetGitHubRepoSelectData, IsUserSignedIn } from "@/functions";

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
        <h1>Create a stack</h1>
        <CreateStackForm repoSelectList={repoSelectList} />
      </>
    );
  }
}
