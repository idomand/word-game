import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../Firebase/firebase-config";
import { BasicWordType } from "../global";

const firestoreApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "api",
  tagTypes: ["Score"],
  endpoints: (builder) => ({
    fetchAllWordsFromFirestore: builder.query<BasicWordType[], void>({
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
            } as BasicWordType);
          });
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
