import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serviceaccount } from "../serviceaccount.js";

initializeApp({
  credential: cert(serviceaccount),
})

export const db= getFirestore()
