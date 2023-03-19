import React, { useEffect, useState } from "react";
// import data from "../German-words-data.json";
import { H1 } from "./Common/StyledText";
import BasicWord from "./Common/StyledWord";

import { getArrayOfWordsFromFirebase } from "../Firebase/FirestoreCrud";
import { useGameContext } from "../lib/GameContextComponent";

export default function AllWords() {
  const [smallDataSet, setSmallDataSet] = useState<basicWord[]>([]);
  const { state, dispatch } = useGameContext();

  async function getListOfWOrds() {
    dispatch({
      type: "get-array-of-words",
      payload: { numberOfWords: 15, startingIndex: 5 },
    });

    // let response = await getArrayOfWordsFromFirebase(15);
    // if (response) {
    //   setSmallDataSet(response);
    // }
  }

  useEffect(() => {
    getListOfWOrds();
  }, []);

  return (
    <div>
      <H1>All Words</H1>
      <div className="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {smallDataSet.map((element) => {
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
