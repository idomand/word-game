import React, { useEffect, useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import QuestionWrapper from "./QuestionWrapper";
import { useGameContext } from "../GameContextComponent";

type Props = {};

export default function GameBoard({}: Props) {
  const { state, dispatch } = useGameContext();

  const checkUserAnswer = (userAnswer: "Der" | "Die" | "Das") => {
    let isCorrect = userAnswer === state.wordObject.Artikel;

    dispatch({
      type: "check-question",
      payload: { isAnswerCorrect: isCorrect, score: state.score },
    });

    // dispatch({ type: "update-score", payload: { score: state.score + 1 } });

    // dispatch({ type: "update-word", payload: { indexOfWord: 4 } });
  };

  return (
    <>
      <QuestionWrapper
        Meaning={state.wordObject.Meaning}
        Artikel={state.wordObject.Artikel}
        Plural={state.wordObject.Plural}
        word={state.wordObject.word}
      />
      <div className="border text-2xl font-bold"></div>
      <ButtonWrapper checkUserAnswer={checkUserAnswer} />
    </>
  );
}
