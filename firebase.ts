import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import path from "path";

if (!getApps().length) {
  initializeApp({
    credential: cert(path.join(__dirname, "..",  "..",  "..",  "firebase-admin-key.json")),
  });
}

export const db = getFirestore();
