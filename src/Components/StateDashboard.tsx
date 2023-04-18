import React from "react";
import { useAppSelector } from "../Redux/ReduxHooks";
type Props = {};

export default function StateDashboard({}: Props) {
  const score = useAppSelector((state) => state.score);
  const isGameEnded = useAppSelector((state) => state.isGameEnded);
  const indexOfWordInAllData = useAppSelector(
    (state) => state.indexOfWordInAllData
  );
  const isGameStated = useAppSelector((state) => state.isGameStated);
  const indexOfWordInArray = useAppSelector(
    (state) => state.indexOfWordInArray
  );
  const wordObject = useAppSelector((state) => state.wordObject);
  const arrayOfWords = useAppSelector((state) => state.arrayOfWords);

  return (
    <div>
      <div className=" border-2 border-black px-5 py-2">
        <div>
          <div className="font-bold"> state of the app:</div>
          <div>score: {score}</div>
          <div>indexOfWordInAllData: {indexOfWordInAllData}</div>
          <div>indexOfWordInArray: {indexOfWordInArray}</div>
          <div>
            word: {wordObject.Meaning}= {wordObject.word}
          </div>
          <div>did game start: {isGameStated ? "true" : "false"}</div>
          <div>did game end: {isGameEnded ? "true" : "false"}</div>
        </div>
        <div>
          <span className="underline">
            array of {arrayOfWords.length} words:
          </span>
          {arrayOfWords.map((element) => {
            return <span key={element.word}>{element.word}, </span>;
          })}
        </div>
      </div>
    </div>
  );
}
