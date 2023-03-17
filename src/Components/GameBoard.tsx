import { useEffect, useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import QuestionWrapper from "./QuestionWrapper";
import { useGameContext } from "../lib/GameContextComponent";
import StateDashboard from "./StateDashboard";
import EndGameScreen from "./EndGameScreen";
import GameStateWrapper from "./GameStateWrapper";

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

  // useEffect(() => {
  //   const randomStartingIndex = Math.floor(Math.random() * 1000);
  //   dispatch({
  //     type: "get-array-of-words",
  //     payload: { numberOfWords: 6, startingIndex: randomStartingIndex },
  //   });
  // }, []);

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
    <div className="flex flex-col items-center justify-center  border-2 border-slate-700  p-2">
      {/* <div className="mb-10"><StateDashboard /></div> */}

      {state.isGameStated == false && state.isGameEnded == false && (
        <div>
          <form
            onSubmit={() => {
              startGameFunc(numberOfWordsInGame);
            }}
          >
            <label htmlFor="numberOfWords">
              <input
                id="numberOfWords"
                type="number"
                value={numberOfWordsInGame}
                onChange={(e) => {
                  setNumberOfWordsInGame(e.target.valueAsNumber);
                }}
              />
            </label>
            <input type="submit" />
          </form>

          {/* <button onClick={startGameFunc}>start game</button> */}
        </div>
      )}

      {state.isGameStated == true && state.isGameEnded == false && (
        <section className="border-4">
          <GameStateWrapper />
          <QuestionWrapper
            Meaning={state.wordObject.Meaning}
            Artikel={state.wordObject.Artikel}
            Plural={state.wordObject.Plural}
            word={state.wordObject.word}
          />
          <div className="border text-2xl font-bold"></div>
          <ButtonWrapper checkUserAnswer={checkUserAnswer} />
        </section>
      )}

      {state.isGameStated == false && state.isGameEnded && <EndGameScreen />}
    </div>
  );
}
