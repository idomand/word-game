import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../Firebase/firebase-config";
import { BasicWordType } from "../global";

const firestoreApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "api",
  tagTypes: ["Score"],
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
      providesTags: ["Score"],
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
  }),
});
export default firestoreApi;
export const { useFetchAllWordsFromFirestoreQuery, useGetTopScoresQuery } =
  firestoreApi;
