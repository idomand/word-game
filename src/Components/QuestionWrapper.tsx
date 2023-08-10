import { H2 } from "./Common/StyledText";
import { BasicWordType } from "../global";
import Hint from "./Hint";
export default function QuestionWrapper({
  word,
  Artikel,
  Meaning,
  Plural,
  wordId,
}: BasicWordType) {
  return (
    <div className="rounded-t-lg border-t-2 border-white bg-white">
      <h2 className="mt-4 text-center text-lg sm:text-2xl">
        What’s the correct article for…{" "}
      </h2>
      <Hint Artikel={Artikel} word={word} Meaning={Meaning} />

      <div className="my-9 text-center text-6xl font-bold">{word}</div>
    </div>
  );
}
