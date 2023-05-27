import { BasicWordType } from "../global";
import { db } from "./firebase-config";

import { collection, getDocs } from "firebase/firestore";

export async function GetAllWordsFromFirestore() {
  const AllWordsArray: BasicWordType[] = [];
  const querySnapshot = await getDocs(collection(db, "allWords"));
  querySnapshot.forEach((doc) => {
    AllWordsArray.push({ wordId: doc.id, ...doc.data() } as BasicWordType);
  });
  return AllWordsArray;
}
