import React from "react";
import { useGameContext } from "../lib/GameContextComponent";

export default function GameStateWrapper() {
  const { state, dispatch } = useGameContext();

  return (
    <div className="flex justify-around">
      <div>score: {state.score}</div>
      <div>
        {state.indexOfWordInArray + 1}/{state.arrayOfWords.length}
      </div>
    </div>
  );
}
