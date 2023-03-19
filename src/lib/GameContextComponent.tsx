import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

import GameReducer, { firstWord, GameReducerActions } from "./gameReducer";

const initialState = {
  wordObject: firstWord,
  score: 0,
  userName: "ido",
  indexOfWordInArray: 0,
  indexOfWordInAllData: 0,
  arrayOfWords: [],
  isGameStated: false,
  isGameEnded: false,
  arrayOfWordsWrongAnswer: [],
  arrayOfWordsRightAnswer: [],
};

type GameContextType = {
  state: GlobalState;
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
