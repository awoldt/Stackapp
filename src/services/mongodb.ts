import { UserProfile } from "@/models/profile";
import { Stack } from "@/models/stacks";
import { MongoClient } from "mongodb";

export const unverifiedAccountsColleciton = new MongoClient(
  process.env.MONGODB_KEY!
)
  .db(process.env.DB!)
  .collection<UserProfile>("unverified-accounts");

export const accountsCollection = new MongoClient(process.env.MONGODB_KEY!)
  .db(process.env.DB!)
  .collection<UserProfile>("accounts");

export const stacksCollection = new MongoClient(process.env.MONGODB_KEY!)
  .db(process.env.DB!)
  .collection<Stack>("stacks");
