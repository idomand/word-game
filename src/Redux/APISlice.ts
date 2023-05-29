import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  arrayUnion,
  collection,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "../Firebase/firebase-config";
import { BasicWordType } from "../global";

const firestoreApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "api",
  tagTypes: ["Score"],
  endpoints: (builder) => ({
    fetchAllWordsFromFirestore: builder.query({
      async queryFn() {
        try {
          /*  
          const ref = collection(db, "allWords");
          const querySnapshot = await getDocs(ref);
          let scoresTables: ScoresTables = [];
          querySnapshot?.forEach((doc) => {
            scoresTables.push({ id: doc.id, ...doc.data() } as ScoresTable);
          });
          return { data: scoresTables };
        */
          const AllWordsArray: BasicWordType[] = [];
          const querySnapshot = await getDocs(collection(db, "allWords"));
          querySnapshot.forEach((doc) => {
            AllWordsArray.push({
              wordId: doc.id,
              ...doc.data(),
            } as BasicWordType);
          });
          console.log("AllWordsArray", AllWordsArray);
          return { data: AllWordsArray };
        } catch (error: any) {
          console.error(error.message);
          return { error: error.message };
        }
      },
      providesTags: ["Score"],
    }),
  }),
});
export default firestoreApi;
export const { useFetchAllWordsFromFirestoreQuery } = firestoreApi;

// import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
// import {
//   arrayUnion,
//   collection,
//   doc,
//   updateDoc,
//   getDocs,
// } from "firebase/firestore";
// import { db } from "../Firebase/firebase-config";

// export const firestoreApi = createApi({
//   baseQuery: fakeBaseQuery(),
//   tagTypes: ["Words"],
//   endpoints: (builder) => {
//     fetchAllWords: builder.query({
//       async queryFn() {
//         try {
//           const AllWordsArray: any = [];
//           const querySnapshot = await getDocs(collection(db, "allWords"));
//           querySnapshot.forEach((doc) => {
//             AllWordsArray.push({ wordId: doc.id, ...doc.data() });
//           });

//           return { data: AllWordsArray };
//         } catch (error: any) {
//           console.error(error.message);
//           return { error: error.message };
//         }
//       },
//       providesTags: ["Words"],
//     });
//     setNewWords: builder.mutation({
//       async queryFn({ newHighScore }) {
//         try {
//           await updateDoc(doc(db, "allWords", newHighScore), {
//             scores: arrayUnion(newHighScore),
//           });
//           return { data: null };
//         } catch (error: any) {
//           console.error(error.message);
//           return { error: error.message };
//         }
//       },
//       providesTags: ["Words"],
//     });
//   },
// });

// // export const {usefetchAllWords} = firestoreApi
