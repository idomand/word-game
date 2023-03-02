import React, { useEffect, useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import QuestionWrapper from "./QuestionWrapper";
import data from "../German-words-data.json";
import { useGameContext } from "../GameContextComponent";

type Props = {};

export default function GameBoard({}: Props) {
  const { state } = useGameContext();

  return (
    <>
      <QuestionWrapper
        word={state.word.word}
        Meaning={state.word.Meaning}
        Artikel={state.word.Artikel}
        Plural={state.word.Plural}
      />
      <div className="border text-2xl font-bold"></div>
      <ButtonWrapper />
    </>
  );
}
