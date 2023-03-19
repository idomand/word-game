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

// import data from "../German-words-data.json";

export async function getArrayOfWordsFromFirebase(numberOfWords: number) {
  const docRef = doc(db, "words", "wQ34fPOPNlwVXdcNA7GU");
  const docSnap = await getDoc(docRef);
  let allWords = docSnap.data();
  let smallArray;
  if (allWords) {
    // console.log("allWords", allWords.words);
    smallArray = sampleSize(allWords.words, numberOfWords);
    smallArray.forEach((element) => {
      console.log("element.Meaning", element.Meaning);
    });
  }
}

// async function getLiveData() {
//   onSnapshot(collection(db, "users"), (snapshot) => {
//     let newData: any = [];
//     snapshot.docs.map((element) => {
//       let newElement = { id: element.id, ...element.data() };
//       newData.push(newElement);
//     });
//     setFirebaseData(newData);
//   });
// }
