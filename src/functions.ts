import { ObjectId } from "mongodb";
import { accountsCollection, UserAccount } from "./services/mongodb";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function IsUserSignedIn(
  accountId: RequestCookie | undefined
): Promise<false | null | UserAccount> {
  try {
    if (accountId === undefined) {
      return false;
    }

    // check if this account id is a valid object id
    if (!ObjectId.isValid(accountId.value)) {
      return false;
    }

    // see if account id exists in db
    const account = await accountsCollection.findOne({
      _id: new ObjectId(accountId.value),
    });
    if (!account) {
      return false;
    }

    // account exists!
    // return account details to display on frontend
    return account;
  } catch (err) {
    console.log(err);
    return null;
  }
}
