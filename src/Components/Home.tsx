import React, { useEffect, useState } from "react";
import { useGameContext } from "../GameContextComponent";
import GameBoard from "./GameBoard";

type Props = {};

export default function Home({}: Props) {
  const { state, dispatch } = useGameContext();

  useEffect(() => {
    const randomStartingIndex = Math.floor(Math.random() * 1000);
    dispatch({
      type: "get-array-of-words",
      payload: { numberOfWords: 5, startingIndex: randomStartingIndex },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center  border-2 border-slate-700  p-4">
      <div className=" border-2 border-black px-5 py-2">
        <div>
          <div className="font-bold"> state of the app:</div>
          <div>score: {state.score}</div>
          <div>indexOfWordInAllData: {state.indexOfWordInAllData}</div>
          <div>indexOfWordInArray: {state.indexOfWordInArray}</div>
          <div>
            word: {state.wordObject.Meaning}= {state.wordObject.word}
          </div>
        </div>
        <div>
          <span className="underline"> array of five words: </span>
          {state.arrayOfWords.map((element) => {
            return <span key={element.word}>{element.word}, </span>;
          })}
        </div>
      </div>
      <GameBoard />
    </main>
  );
}
