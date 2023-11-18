/* eslint-disable @next/next/no-img-element */
import {
  GenerateEditStackTechCheckboxs,
  GetGitHubRepoSelectData,
  IsValidAccountCookie,
  RepoSelectList,
  UserSelectedTech,
} from "@/functions";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { stacksCollection } from "@/services/mongodb";
import { ObjectId } from "mongodb";
import CustomNav from "../../../../components/CustomNav";
import EditStackForm from "../../../../components/forms/EditStack";

export const metadata: Metadata = {
  title: "Edit Stack | Stack",
  description: "Edit your stack by selecting the programming language you used to make your app. You can select others features such as Databases, APIs, Frameworks, and more.",
  alternates: {
    canonical: "https://stackapp.xyz/signup",
  },
};

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

  const stackCheckboxs = GenerateEditStackTechCheckboxs({
    languages: stackDetails.languages_used,
    databases: stackDetails.databases_used,
    apis: stackDetails.apis_used,
    clouds: stackDetails.clouds_used,
    frameworks: stackDetails.frameworks_used,
  });

  return (
    <>
      <section>
        <CustomNav isSignedIn={true} />
      </section>

      <div className="card-container-title">
        <div className="card-empty">
          <h1>Edit Stack</h1>
          <p>Edit your Stack to best showcase your application.</p>
        </div>
      </div>

      <EditStackForm
        stackDetails={stackDetails}
        stackID={String(stackDetails._id)}
        repoSelectData={repoSelect}
        editStackCheckboxs={stackCheckboxs}
      />
    </>
  );
}
