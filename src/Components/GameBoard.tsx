import React, { useEffect, useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import QuestionWrapper from "./QuestionWrapper";
import data from "../German-words-data.json";

type Props = {};

export default function GameBoard({}: Props) {
  const [FullWord, setFullWord] = useState({
    word: "",
    Meaning: "",
    Artikel: "",
    Plural: "",
  });

  useEffect(() => {
    let firstWordIndex = Math.floor(Math.random() * 1000);
    setFullWord(data[firstWordIndex]);
  }, []);

  return (
    <>
      <QuestionWrapper FullWord={FullWord} />
      <ButtonWrapper />
    </>
  );
}
