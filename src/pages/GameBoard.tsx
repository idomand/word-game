import { useState } from "react";
import ButtonWrapper from "../Components/ButtonWrapper";
import QuestionWrapper from "../Components/QuestionWrapper";
import EndGameScreen from "../Components/EndGameScreen";
import GameStateWrapper from "../Components/GameStateWrapper";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import {
  CheckLastQuestion,
  CheckQuestion,
  GetArrayOfWords,
} from "../Redux/GameDataSlice";
export default function GameBoard() {
  const [numberOfWordsInGame, setNumberOfWordsInGame] = useState(3);

  const dispatch = useAppDispatch();
  const arrayOfWords = useAppSelector((state) => state.arrayOfWords);
  const isGameEnded = useAppSelector((state) => state.isGameEnded);
  const isGameStated = useAppSelector((state) => state.isGameStated);
  const wordObject = useAppSelector((state) => state.wordObject);
  const indexOfWordInArray = useAppSelector(
    (state) => state.indexOfWordInArray
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

          <ButtonWrapper checkUserAnswer={checkUserAnswer} />
        </section>
      )}

      {isGameStated == false && isGameEnded && <EndGameScreen />}
    </div>
  );
}
