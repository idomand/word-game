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
      <div className="my-8 text-center text-6xl font-bold">{word}</div>
      <div className="relative mb-3 flex justify-center">
        <div className="absolute top-1/2 z-10 h-[0.10px] w-full -translate-y-1/2 transform bg-gray-500 "></div>
        <div className="z-20 mx-auto">
          <Hint Artikel={Artikel} />
        </div>
      </div>
      <div className="text-center"></div>
    </div>
  );
}
