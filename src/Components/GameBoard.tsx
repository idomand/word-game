import { useEffect, useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import QuestionWrapper from "./QuestionWrapper";
import { useGameContext } from "../lib/GameContextComponent";
import StateDashboard from "./StateDashboard";
// import EndGameScreen from "./EndGameScreen";
// import GameStateWrapper from "./GameStateWrapper";
// import FirebaseTest from "./FirebaseTest";

export default function GameBoard() {
  const [numberOfWordsInGame, setNumberOfWordsInGame] = useState(3);
  const { state, dispatch } = useGameContext();

  function startGameFunc(numberOfWords: number) {
    const randomStartingIndex = Math.floor(Math.random() * 1000);
    dispatch({
      type: "get-array-of-words",
      payload: {
        numberOfWords: numberOfWords,
        startingIndex: randomStartingIndex,
      },
    });
  }

  const checkUserAnswer = (userAnswer: "Der" | "Die" | "Das") => {
    let isCorrect = userAnswer === state.wordObject.Artikel;
    if (state.arrayOfWords.length === state.indexOfWordInArray + 1) {
      dispatch({
        type: "check-last-question",
        payload: { isAnswerCorrect: isCorrect },
      });
    } else {
      dispatch({
        type: "check-question",
        payload: { isAnswerCorrect: isCorrect },
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  border-2 border-slate-700  p-4">
      {/* <StateDashboard />
      <QuestionWrapper
        Meaning={state.wordObject.Meaning}
        Artikel={state.wordObject.Artikel}
        Plural={state.wordObject.Plural}
        word={state.wordObject.word}
      />
      <div className="border text-2xl font-bold"></div>
      <ButtonWrapper checkUserAnswer={checkUserAnswer} /> */}
    </div>
  );
}
