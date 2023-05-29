import { H2 } from "./Common/StyledText";
import { BasicWordType } from "../global";
export default function QuestionWrapper({
  word,
  Artikel,
  Meaning,
  Plural,
  wordId,
}: BasicWordType) {
  return (
    <div className="rounded-t-lg border-t-2 border-white bg-white">
      <H2>what's the artikel of this word: </H2>
      <div className=" text-center font-bold">
        <span className="m-1 rounded bg-red-200  p-1">{word}</span>
      </div>
      <div className="text-center">
        <p>the meaning of the word is {Meaning}</p>
        <p className="text-sm">Hint: the Artikel is {Artikel} </p>
      </div>
    </div>
  );
}
