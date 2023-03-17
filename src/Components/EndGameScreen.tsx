import { useGameContext } from "../lib/GameContextComponent";
import { H1, H2 } from "./Common/StyledText";
import BasicWord from "./Common/StyledWord";

export default function EndGameScreen() {
  const { state, dispatch } = useGameContext();

  return (
    <div className="w-full ">
      {/* <h1 className="mb-3 text-center text-2xl font-bold">End Game Screen</h1> */}
      <H1>End Game Screen</H1>
      {/* <h2 className="text-1xl mb-3 text-center font-bold">
        your score is {state.score} out of {state.arrayOfWords.length}
      </h2> */}
      <H2>
        your score is {state.score} out of {state.arrayOfWords.length}
      </H2>

      <div className="flex w-full justify-center rounded-lg bg-gradient-to-r from-green-300 to-red-400 py-3">
        <div className="border-r border-dashed">
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
