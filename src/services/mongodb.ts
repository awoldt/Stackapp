import { AccountModel } from "@/models/account";
import { MongoClient } from "mongodb";
import { z } from "zod";

export type UserAccount = z.infer<typeof AccountModel>;

export const unverifiedAccountsColleciton = new MongoClient(
  process.env.MONGODB_KEY!
)
  .db(process.env.DB!)
  .collection<UserAccount>("unverified-accounts");

export const accountsCollection = new MongoClient(process.env.MONGODB_KEY!)
  .db(process.env.DB!)
  .collection<UserAccount>("accounts");
