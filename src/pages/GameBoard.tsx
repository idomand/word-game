import { useState } from "react";
import ButtonWrapper from "../Components/ButtonWrapper";
import EndGameScreen from "../Components/EndGameScreen";
import GameStateWrapper from "../Components/GameStateWrapper";
import QuestionWrapper from "../Components/QuestionWrapper";
import Hint from "../Components/Hint";

import {
  CheckLastQuestion,
  CheckQuestion,
  GetArrayOfWords,
} from "../Redux/GameDataSlice";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import BasicQuestionButton from "../Components/Common/BasicQuestionButton";
export default function GameBoard() {
  const [numberOfWordsInGame, setNumberOfWordsInGame] = useState(3);

  const dispatch = useAppDispatch();
  const arrayOfWords = useAppSelector((state) => state.GameData.arrayOfWords);
  const isGameEnded = useAppSelector((state) => state.GameData.isGameEnded);
  const isGameStated = useAppSelector((state) => state.GameData.isGameStated);
  const wordObject = useAppSelector((state) => state.GameData.wordObject);
  const indexOfWordInArray = useAppSelector(
    (state) => state.GameData.indexOfWordInArray
  );

  function startGameFunc() {
    const randomStartingIndex = Math.floor(Math.random() * 1000);
    dispatch(
      GetArrayOfWords({
        numberOfWords: numberOfWordsInGame,
        startingIndex: randomStartingIndex,
      })
    );
  }

  const checkUserAnswer = (userAnswer: "Der" | "Die" | "Das") => {
    let isCorrect = userAnswer === wordObject.Artikel;
    if (arrayOfWords.length === indexOfWordInArray + 1) {
      dispatch(CheckLastQuestion({ isAnswerCorrect: isCorrect }));
    } else {
      dispatch(CheckQuestion({ isAnswerCorrect: isCorrect }));
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center ">
      {isGameStated == false && isGameEnded == false && (
        <div className="mt-5">
          <form
            className="flex flex-col"
            onSubmit={() => {
              startGameFunc();
            }}
          >
            <label htmlFor="numberOfWords">
              <input
                className="rounded text-center "
                id="numberOfWords"
                type="number"
                value={numberOfWordsInGame}
                onChange={(e) => {
                  setNumberOfWordsInGame(e.target.valueAsNumber);
                }}
              />
            </label>
            <input
              className="mt-1 cursor-pointer border p-2 font-bold"
              type="submit"
              value="start"
            />
          </form>
        </div>
      )}

      {isGameStated == true && isGameEnded == false && (
        <section className="">
          <GameStateWrapper />
          <QuestionWrapper
            wordId={wordObject.wordId}
            Meaning={wordObject.Meaning}
            Artikel={wordObject.Artikel}
            Plural={wordObject.Plural}
            word={wordObject.word}
          />
          {/* <Hint Artikel={wordObject.Artikel} /> */}

          <div className="flex flex-col items-center justify-center sm:mt-8 sm:flex-row">
            <BasicQuestionButton
              artikel="Der"
              checkUserAnswer={checkUserAnswer}
            />
            <BasicQuestionButton
              artikel="Die"
              checkUserAnswer={checkUserAnswer}
            />
            <BasicQuestionButton
              artikel="Das"
              checkUserAnswer={checkUserAnswer}
            />
          </div>
        </section>
      )}

      {isGameStated == false && isGameEnded && <EndGameScreen />}
    </div>
  );
}
