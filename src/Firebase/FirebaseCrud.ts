import {
  collection,
  getDocs,
  doc,
  getDoc,
  DocumentData,
  DocumentReference,
  arrayUnion,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../Firebase/firebase-config";

export async function testFunc(uid: string | null) {
  console.log("uid", uid);
  if (uid) {
    const userDocRef = await doc(db, "usersData", uid);
    const topScoreDocRef = await doc(db, "top-score-total", uid);
    await updateDoc(userDocRef, {
      topScore: 14,
    });
    await updateDoc(topScoreDocRef, {
      topScore: 14,
    });
  }
}

// export async function getScoreBoardData() {
//   const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
//   });
// }
