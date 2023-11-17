import { Metadata } from "next";
import { cookies } from "next/headers";
import CreateStackForm from "../../components/forms/CreateStack";
import { GetGitHubRepoSelectData, IsValidAccountCookie } from "@/functions";
import SideNav from "../../components/CustomNav";

export const metadata: Metadata = {
  title: "Create a Stack | Stack",
  description:
    "Create you first stack by selecting the programming language you used to make your app. You can select others features such as Databases, APIs, Frameworks, and more.",
  alternates: {
    canonical: "https://stackapp.xyz/create",
  },
  openGraph: {
    type: "website",
    url: "https://stackapp.xyz/create",
    title: "Create a Tech Stack Visualization",
    description:
      "Showcase how you built your app and the technology that went into building it.",
    siteName: "Stack",
    images: [
      {
        url: "https://stackapp.xyz/imgs/splash/image.png",
      },
    ],
  },
};

export default async function Page() {
  const cookieStore = cookies();

  const account = await IsValidAccountCookie(cookieStore.get("a_id"));

  if (account === false) {
    return <p>You must be signed in to create Stacks.</p>;
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

        <div className="card-container-title">
          <div className="card-empty">
            <h1>Create Stack</h1>
            <p>Create custom Stacks that showcase your applications.</p>
          </div>
        </div>

        <CreateStackForm repoSelectList={repoSelectList} />
      </>
    );
  }
}
