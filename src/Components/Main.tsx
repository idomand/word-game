import React, { useEffect, useState } from "react";
import { useGameContext } from "../GameContextComponent";
import GameBoard from "./GameBoard";

type Props = {};

export default function Main({}: Props) {
  const { state, dispatch } = useGameContext();
  console.log("state.arrayOfWords[0]", state.arrayOfWords[0]);
  useEffect(() => {
    const randomStartingIndex = Math.floor(Math.random() * 1000);

    dispatch({
      type: "get-array-of-words",
      payload: { numberOfWords: 5, startingIndex: randomStartingIndex },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center  border-2 border-slate-700  p-4">
      <h1>your score is {state.score}</h1>

      <GameBoard />
    </main>
  );
}
