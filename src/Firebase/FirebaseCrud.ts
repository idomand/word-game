import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

import { db } from "../Firebase/firebase-config";
import { topScoreDataType } from "../global";

export async function updateUserTopScore(uid: string, score: number) {
  const userDocRef = await doc(db, "usersData", uid);
  const topScoreDocRef = await doc(db, "top-score-total", uid);
  await updateDoc(userDocRef, {
    topScore: score,
    date: new Date().toLocaleDateString().replace(/\//g, "."),
  });
  await updateDoc(topScoreDocRef, {
    topScore: score,
    date: new Date().toLocaleDateString().replace(/\//g, "."),
  });
}

export async function getScoreBoard() {
  const totalTopScores: topScoreDataType[] = [];
  const totalQuerySnapshot = await getDocs(collection(db, "top-score-total"));
  totalQuerySnapshot.forEach((doc) => {
    totalTopScores.push({
      uid: doc.id,
      ...doc.data(),
    } as any);
  });

  const userTopScore: topScoreDataType[] = [];
  const userQuerySnapshot = await getDocs(collection(db, "usersData"));
  userQuerySnapshot.forEach((doc) => {
    userTopScore.push({
      uid: doc.id,
      ...doc.data(),
    } as any);
  });

  return { totalTopScores, userTopScore };
}
