import React from "react";

import { basicWord } from "../Types/basicWord";

export default function QuestionWrapper(FullWord: basicWord) {
  console.log("FullWord :>> ", FullWord);
  return (
    <div>
      <h2 className="text-center">
        what's the artikel of the word {FullWord.word}?
      </h2>
      <p>the meaning of the word is {FullWord.Meaning}</p>
    </div>
  );
}
