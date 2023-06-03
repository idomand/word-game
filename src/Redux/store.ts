import { configureStore } from "@reduxjs/toolkit";
import GameData from "./GameDataSlice";
import firestoreApi from "./APISlice";

const store = configureStore({
  reducer: { GameData, [firestoreApi.reducerPath]: firestoreApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firestoreApi.middleware),

  //   [firestoreApi.reducerPath]: firestoreApi.reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
