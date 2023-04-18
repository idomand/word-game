import React from "react";
import { useAppSelector } from "../Redux/ReduxHooks";

export default function GameStateWrapper() {
  const score = useAppSelector((state) => state.score);

  const arrayOfWords = useAppSelector((state) => state.arrayOfWords);
  const indexOfWordInArray = useAppSelector(
    (state) => state.indexOfWordInArray
  );

  return (
    <div className="flex justify-around">
      <div>score: {score}</div>
      <div>
        {indexOfWordInArray + 1}/{arrayOfWords.length}
      </div>
    </div>
  );
}
