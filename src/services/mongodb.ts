import { UserAccount } from "@/models/account";
import { Stack } from "@/models/stacks";
import { MongoClient } from "mongodb";

export const unverifiedAccountsColleciton = new MongoClient(
  process.env.MONGODB_KEY!
)
  .db(process.env.DB!)
  .collection<UserAccount>("unverified-accounts");

export const accountsCollection = new MongoClient(process.env.MONGODB_KEY!)
  .db(process.env.DB!)
  .collection<UserAccount>("accounts");

export const stacksCollection = new MongoClient(process.env.MONGODB_KEY!)
  .db(process.env.DB!)
  .collection<Stack>("stacks");
