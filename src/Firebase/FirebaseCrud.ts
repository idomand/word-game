import {
  collection,
  getDocs,
  doc,
  getDoc,
  DocumentData,
  DocumentReference,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import { db } from "../Firebase/firebase-config";

export async function testFunc(uid: string | null) {
  console.log("poop1");
  if (uid) {
    const docRef = await doc(db, "usersData", uid);

    const docData = await getDoc(docRef);
    console.log("docData", docData);

    console.log("docData.data()", docData.data());
  }
}
