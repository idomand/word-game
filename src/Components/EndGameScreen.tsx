// import { useGameContext } from "../lib/GameContextComponent";
import { H1, H2 } from "./Common/StyledText";
import BasicWord from "./Common/StyledWord";

import { RestartGame } from "../Redux/GameDataSlice";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";

export default function EndGameScreen() {
  const score = useAppSelector((state) => state.score);
  const arrayOfWords = useAppSelector((state) => state.arrayOfWords);
  const arrayOfWordsRightAnswer = useAppSelector(
    (state) => state.arrayOfWordsRightAnswer
  );
  const arrayOfWordsWrongAnswer = useAppSelector(
    (state) => state.arrayOfWordsWrongAnswer
  );

  const dispatch = useAppDispatch();

  return (
    <div className=" w-full sm:w-3/4 md:w-2/4 ">
      <H1>End Game Screen</H1>

      <H2>
        your score is {score} out of {arrayOfWords.length}
      </H2>

      <div className="flex w-full justify-around rounded-lg bg-gradient-to-r from-green-300 to-red-400 py-3">
        <div className="">
          <H2>Right Answers</H2>
          <div>
            {arrayOfWordsRightAnswer.map((element) => {
              return (
                <BasicWord
                  key={element.word}
                  word={element.word}
                  Plural={element.Plural}
                  Meaning={element.Meaning}
                  Artikel={element.Artikel}
                />
              );
            })}
          </div>
        </div>
        <div>
          <H2>Wrong Answers</H2>
          <div>
            {arrayOfWordsWrongAnswer.map((element) => {
              return (
                <BasicWord
                  key={element.word}
                  word={element.word}
                  Plural={element.Plural}
                  Meaning={element.Meaning}
                  Artikel={element.Artikel}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className=" mt-3 flex justify-center">
        <button
          className="cursor-pointer border-4 bg-orange-400 p-4 hover:bg-orange-300 hover:underline"
          onClick={() => {
            dispatch(RestartGame());
          }}
        >
          start a new game
        </button>
      </div>
    </div>
  );
}
