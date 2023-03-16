import { useGameContext } from "../lib/GameContextComponent";

export default function EndGameScreen() {
  const { state, dispatch } = useGameContext();

  return (
    <div>
      <h1 className="mb-3 text-center text-2xl font-bold">End Game Screen</h1>
      <h2 className="text-1xl mb-3 text-center font-bold">
        your score is {state.score} out of {state.arrayOfWords.length}
      </h2>

      <div className="flex">
        <div className="mr-10 border-red-500 bg-red-200 p-5">
          <h1 className="mb-2 font-bold underline">Right Answers</h1>
          <div>
            {state.arrayOfWordsRightAnswer.map((element) => {
              return (
                <div key={element.word}>
                  {element.Artikel} {element.word} = {element.Meaning}
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-green-500 bg-green-200 p-5">
          <h1 className="mb-2 font-bold underline">Wrong Answers</h1>
          <div>
            {state.arrayOfWordsRightAnswer.map((element) => {
              return (
                <div key={element.word}>
                  {element.Artikel} {element.word} = {element.Meaning}
                </div>
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
