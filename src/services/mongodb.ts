import { UserProfile } from "@/models/profile";
import { Stack } from "@/models/stacks";
import { MongoClient, ObjectId } from "mongodb";

export interface Tech {
  _id: string;
  type: "language" | "database" | "api" | "cloud" | "framework";
  description: string;
  name: string;
  site?: string;
  numOfOccurences?: number;
}

const MONGOCLIENT = new MongoClient(process.env.MONGODB_KEY!);

let isConnected = false;

const ConnectDB = async () => {
  try {
    if (!isConnected) {
      await MONGOCLIENT.connect();
      isConnected = true;
      console.log("\nSUCCESSFULLY CONNECTED TO MONGODB!\n");
    }
  } catch (err) {
    console.log(err);
  }
};

ConnectDB();

export const unverifiedAccountsColleciton = MONGOCLIENT.db(
  process.env.DB!
).collection<UserProfile>("unverified-accounts");

export const accountsCollection = MONGOCLIENT.db(
  process.env.DB!
).collection<UserProfile>("accounts");

export const stacksCollection = MONGOCLIENT.db(
  process.env.DB!
).collection<Stack>("stacks");

export const signInLinksCollection = MONGOCLIENT.db(
  process.env.DB!
).collection<{ aid: string; expires: number }>("signin-links");

export const techCollection =
  MONGOCLIENT.db("stackapp-PROD").collection<Tech>("tech-offered");
