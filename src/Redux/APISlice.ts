import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
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
import { BasicWordType } from "../global";

const firestoreApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "api",
  tagTypes: ["Score", "Words"],
  endpoints: (builder) => ({
    fetchAllWordsFromFirestore: builder.query<any, void>({
      async queryFn() {
        try {
          const AllWordsArray: BasicWordType[] = [];
          const querySnapshot = await getDocs(
            collection(db, "allWordsInOneObject")
          );
          querySnapshot.forEach((doc) => {
            AllWordsArray.push({
              wordId: doc.id,
              ...doc.data(),
            } as any);
          });
          return { data: AllWordsArray };
        } catch (error: any) {
          console.error(error.message);
          return { error: error.message };
        }
      },
      providesTags: ["Words"],
    }),
    GetTopScores: builder.query<any, void>({
      async queryFn() {
        try {
          const topScores: any = [];
          console.log("topScores", topScores);
          const querySnapshot = await getDocs(
            collection(db, "top-score-total")
          );
          querySnapshot.forEach((doc) => {
            topScores.push({
              topScoreData: doc.id,
              ...doc.data(),
            } as any);
          });
          return { data: topScores };
        } catch (error: any) {
          console.error(error.message);

          return { error: error.message };
        }
      },
      providesTags: ["Score"],
    }),

    GetUserScoresAndWords: builder.query<any, void>({
      async queryFn() {
        try {
          const AllUserData: any = [];
          const querySnapshot = await getDocs(collection(db, "usersData"));
          querySnapshot.forEach((doc) => {
            AllUserData.push({
              userId: doc.id,
              ...doc.data(),
            } as any);
          });
          return { data: AllUserData };
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
export const {
  useFetchAllWordsFromFirestoreQuery,
  useGetTopScoresQuery,
  useGetUserScoresAndWordsQuery,
} = firestoreApi;
