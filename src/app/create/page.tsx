import { cookies } from "next/headers";
import CreateStackForm from "../../components/forms/CreateStack";
import { IsUserSignedIn } from "@/functions";

export default async function Page() {
  const cookieStore = cookies();

  const account = await IsUserSignedIn(cookieStore.get("a_id"));

  if (account === null || account === false) {
    return <p>You must be signed in to create a stack</p>;
  } else {
    return (
      <>
        <h1>Create a stack</h1>
        <CreateStackForm />
      </>
    );
  }
}
