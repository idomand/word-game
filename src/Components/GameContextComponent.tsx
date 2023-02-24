import React, { createContext, useContext, useState } from "react";
import { basicWord } from "../Types/basicWord";

type GameContextType = {
  userName: string;
  wordObject: basicWord;
  score: number;
};

let defaultData = {
  userName: "ido",
  score: 0,
  wordObject: {
    word: "",
    Meaning: "",
    Artikel: "",
    Plural: "",
  },
};
export const useTheme = () => {
  return useContext(gameContextProvider);
};
const gameContextProvider = createContext<GameContextType>(defaultData);
export default function GameContextComponent({ children }: any) {
  const [gameBasicData, setGameBasicData] = useState(defaultData);

  const value = { gameBasicData, setGameBasicData };

  return (
    <gameContextProvider.Provider value={value}>
      {children}
    </gameContextProvider.Provider>
  );
}
