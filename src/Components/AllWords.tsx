import React, { useEffect, useState } from "react";
import { H1 } from "./Common/StyledText";
import BasicWord from "./Common/StyledWord";

// import { getArrayOfWordsFromFirebase } from "../Firebase/FirestoreCrud";
import { useGameContext } from "../lib/GameContextComponent";

export default function AllWords() {
  const { state, dispatch } = useGameContext();
  const randomStartingIndex = Math.floor(Math.random() * 1000);
  async function getListOfWOrds() {
    dispatch({
      type: "get-array-of-words",
      payload: { numberOfWords: 30, startingIndex: randomStartingIndex },
    });
  }

  useEffect(() => {
    getListOfWOrds();
  }, []);

  return (
    <div>
      <H1>All Words</H1>
      <div className="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {state.arrayOfWords.map((element) => {
          return (
            <BasicWord
              key={element.word}
              word={element.word}
              Plural={element.Plural}
              Meaning={element.Meaning}
              Artikel={element.Artikel}
            />
          );
        })}
      </div>
    </div>
  );
}
