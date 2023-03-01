import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { GameReducer } from "./lib/gameReducer";
const Context = createContext({});

export const useGameContext = () => {
  return useContext(Context);
};

export default function GameContextComponent({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(first, second);

  const value = {};

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
