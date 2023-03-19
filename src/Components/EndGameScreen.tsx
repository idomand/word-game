import { useGameContext } from "../lib/GameContextComponent";
import { H1, H2 } from "./Common/StyledText";
import BasicWord from "./Common/StyledWord";

export default function EndGameScreen() {
  const { state, dispatch } = useGameContext();

  return (
    <div className=" w-full sm:w-3/4 md:w-2/4 ">
      <H1>End Game Screen</H1>

      <H2>
        your score is {state.score} out of {state.arrayOfWords.length}
      </H2>

      <div className="flex w-full justify-around rounded-lg bg-gradient-to-r from-green-300 to-red-400 py-3">
        <div className="">
          <H2>Right Answers</H2>
          <div>
            {state.arrayOfWordsRightAnswer.map((element) => {
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
            {state.arrayOfWordsWrongAnswer.map((element) => {
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
            dispatch({
              type: "restart-game",
            });
          }}
        >
          start a new game
        </button>
      </div>
    </div>
  );
}
