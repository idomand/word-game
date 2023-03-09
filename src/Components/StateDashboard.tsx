import React from "react";
import { useGameContext } from "../lib/GameContextComponent";

type Props = {};

export default function StateDashboard({}: Props) {
  const { state, dispatch } = useGameContext();

  return (
    <div>
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
    </div>
  );
}
