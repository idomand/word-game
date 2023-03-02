import React, { useState } from "react";
import { useGameContext } from "../GameContextComponent";
import GameBoard from "./GameBoard";

type Props = {};

export default function Main({}: Props) {
  const { state, dispatch } = useGameContext();

  console.log("state :>> ", state);

  return (
    <main className="flex flex-col items-center justify-center  border-2 border-slate-700  p-4">
      <h1>Main -- the score is {state.score}</h1>

      <button
        onClick={() => {
          dispatch({
            type: "update-score",
            payload: { score: state.score + 1 },
          });
        }}
      >
        click me
      </button>

      <GameBoard />
    </main>
  );
}
