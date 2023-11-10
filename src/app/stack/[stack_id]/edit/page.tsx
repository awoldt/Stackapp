/* eslint-disable @next/next/no-img-element */
import {
  GetGitHubRepoSelectData,
  IsValidAccountCookie,
  RepoSelectList,
} from "@/functions";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { stacksCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import CustomNav from "../../../../components/CustomNav";
import EditStackForm from "../../../../components/forms/EditStack";

export default async function Edit({ params }: { params: any }) {
  const cookieStore = cookies();
  const stackID = params.stack_id;

  // make sure stack id is valid
  if (!ObjectId.isValid(stackID)) {
    return <>not a valid stack</>;
  }

  const account = await IsValidAccountCookie(cookieStore.get("a_id"));
  if (account === false) {
    redirect(`/stack/${stackID}`);
  }

  // get stack data
  const stackDetails = await stacksCollection.findOne({
    _id: new ObjectId(stackID),
  });
  if (stackDetails === null) {
    notFound();
  }

  // make sure signed in user actually owns stack
  if (stackDetails.aid !== String(account._id)) {
    redirect(`/stack/${stackID}`);
  }

  // if user has github account associated with stack account
  // render repo select for stack
  let repoSelect = null;
  if (account.github_access_token !== null) {
    repoSelect = await GetGitHubRepoSelectData(
      account.github_access_token,
      String(account._id)
    );
  }

  return (
    <>
      <section>
        <CustomNav isSignedIn={true} />
      </section>
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
            <h1>Edit Stack</h1>
            <p className="subtitle">
              Edit or change your Stack&apos;s current details.
            </p>
            <EditStackForm
              stackDetails={stackDetails}
              stackID={String(stackDetails._id)}
              repoSelectData={repoSelect}
            />
          </div>
        </div>
      </section>
    </>
  );
}
