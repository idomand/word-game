import React, { useEffect, useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import QuestionWrapper from "./QuestionWrapper";
import data from "../German-words-data.json";
import { useGameContext } from "../GameContextComponent";

type Props = {};

export default function GameBoard({}: Props) {
  const { state, dispatch } = useGameContext();

  useEffect(() => {
    const randomWordIndex = Math.floor(Math.random() * 1000);
    dispatch({
      type: "update-word",
      payload: { indexOfWord: randomWordIndex },
    });
  }, []);

  function setUserAnswer(answer: string) {
    console.log("answer", answer);
    let resultDiv;
    if (answer === state.word.Artikel) {
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
        word={state.word.word}
        Meaning={state.word.Meaning}
        Artikel={state.word.Artikel}
        Plural={state.word.Plural}
      />
      <div className="border text-2xl font-bold"></div>
      <ButtonWrapper setUserAnswer={setUserAnswer} />
    </>
  );
}
