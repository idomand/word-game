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
import { topScoreDataType } from "../global";

export async function updateUserTopScore(uid: string, score: number) {
  const userDocRef = await doc(db, "usersData", uid);
  const topScoreDocRef = await doc(db, "top-score-total", uid);
  await updateDoc(userDocRef, {
    topScore: score,
  });
  await updateDoc(topScoreDocRef, {
    topScore: score,
  });
}

export async function getScoreBoard() {
  const topScores: topScoreDataType[] = [];
  const querySnapshot = await getDocs(collection(db, "top-score-total"));
  querySnapshot.forEach((doc) => {
    topScores.push({
      uid: doc.id,
      ...doc.data(),
    } as any);
  });
  return topScores;
}
