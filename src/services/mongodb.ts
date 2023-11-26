import { UserProfile } from "@/models/profile";
import { Stack } from "@/models/stacks";
import { MongoClient } from "mongodb";

export interface Tech {
  type: "language" | "database" | "api" | "cloud" | "framework";
  description: string;
  name: string;
  site?: string;
}

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

export const signInLinksCollection = new MongoClient(process.env.MONGODB_KEY!)
  .db(process.env.DB!)
  .collection<{ aid: string; expires: number }>("signin-links");

export const techCollection = new MongoClient(process.env.MONGODB_KEY!)
  .db(process.env.DB!)
  .collection<Tech>("tech-offered");
