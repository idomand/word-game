import React, { useEffect, useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import QuestionWrapper from "./QuestionWrapper";
import data from "../German-words-data.json";

type Props = {};

export default function GameBoard({}: Props) {
  const [fullWord, setFullWord] = useState({
    word: "",
    Meaning: "",
    Artikel: "",
    Plural: "",
  });

  useEffect(() => {
    const firstWordIndex = Math.floor(Math.random() * 1000);
    setFullWord(data[firstWordIndex]);
  }, []);

  function setUserAnswer(answer: string) {
    console.log("answer", answer);
    let resultDiv;
    if (answer === fullWord.Artikel) {
      console.log("right");
      resultDiv = <div>you are right</div>;
    } else {
      console.log("wrong");
      resultDiv = <div>you are wrong</div>;
    }
  }

  return (
    <>
      <QuestionWrapper
        word={fullWord.word}
        Meaning={fullWord.Meaning}
        Artikel={fullWord.Artikel}
        Plural={fullWord.Plural}
      />
      <div className="border text-2xl font-bold"></div>
      <ButtonWrapper setUserAnswer={setUserAnswer} />
    </>
  );
}
