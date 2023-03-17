import { H2 } from "./Common/StyledText";

export default function QuestionWrapper({
  word,
  Artikel,
  Meaning,
  Plural,
}: basicWord) {
  return (
    <div className="rounded-t-lg border-t-2 border-white bg-white">
      <H2>
        what's the artikel of the word:{" "}
        <span className="font-bold underline">{word}</span> ?
      </H2>
      <p>the meaning of the word is {Meaning}</p>
      <p>the Artikel is {Artikel} </p>
    </div>
  );
}
