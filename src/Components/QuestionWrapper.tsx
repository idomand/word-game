import React, { useContext } from "react";

import { basicWord } from "../Types/basicWord";

export default function QuestionWrapper({
  word,
  Artikel,
  Meaning,
  Plural,
}: basicWord) {
  return (
    <div>
      <h2 className="text-center">what's the artikel of the word {word}?</h2>
      <p>the meaning of the word is {Meaning}</p>
      <p>the Artikel is {Artikel} </p>
    </div>
  );
}
