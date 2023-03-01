import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

import GameReducer, { firstWord, GameReducerActions } from "./lib/gameReducer";

const initialState = {
  word: firstWord,
  score: 0,
  userName: "ido",
};

type GameContextType = {
  state: {
    word: {
      word: string;
      Meaning: string;
      Artikel: string;
      Plural: string;
    };
    score: number;
    userName: string;
  };
  dispatch: Dispatch<GameReducerActions>;
};

const Context = createContext({} as GameContextType);

export const useGameContext = () => {
  return useContext(Context);
};

export default function GameContextComponent({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
