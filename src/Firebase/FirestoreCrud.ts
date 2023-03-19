import { db } from "./firebase-config";

import { sampleSize } from "lodash";

import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

export async function getArrayOfWordsFromFirebase(numberOfWords: number) {
  const docRef = doc(db, "words", "wQ34fPOPNlwVXdcNA7GU");
  const docSnap = await getDoc(docRef);
  let allWords = docSnap.data();
  let smallArray;
  if (allWords) {
    smallArray = sampleSize(allWords.words, numberOfWords);
    return smallArray;
  }
}
