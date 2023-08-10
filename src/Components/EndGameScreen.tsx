import { RestartGame } from "../Redux/GameDataSlice";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import BasicWordElement from "./Common/BasicWordElement";
import { H1, H2 } from "./Common/StyledText";

export default function EndGameScreen() {
  const score = useAppSelector((state) => state.GameData.score);
  const arrayOfWords = useAppSelector((state) => state.GameData.arrayOfWords);
  const arrayOfWordsRightAnswer = useAppSelector(
    (state) => state.GameData.arrayOfWordsRightAnswer
  );
  const arrayOfWordsWrongAnswer = useAppSelector(
    (state) => state.GameData.arrayOfWordsWrongAnswer
  );

  const dispatch = useAppDispatch();

  return (
    <div className=" w-full sm:w-3/4 md:w-2/4 ">
      <H1>End Game Screen</H1>

      <H2>
        your score is {score} out of {arrayOfWords.length}
      </H2>

      <div className="flex w-full justify-around rounded-lg border-2 ">
        <div className="">
          <H2>Right Answers</H2>
          <div className="grid grid-cols-1 gap-1">
            {arrayOfWordsRightAnswer.map((element) => {
              return (
                <BasicWordElement
                  key={element.word}
                  word={element.word}
                  Plural={element.Plural}
                  Meaning={element.Meaning}
                  Artikel={element.Artikel}
                  wordId={element.wordId}
                />
              );
            })}
          </div>
        </div>
        <div>
          <H2>Wrong Answers</H2>
          <div className="grid grid-cols-1 gap-1">
            {arrayOfWordsWrongAnswer.map((element) => {
              return (
                <BasicWordElement
                  key={element.word}
                  word={element.word}
                  Plural={element.Plural}
                  Meaning={element.Meaning}
                  Artikel={element.Artikel}
                  wordId={element.wordId}
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
