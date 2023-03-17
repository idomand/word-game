import React, { useEffect, useState } from "react";
import data from "../German-words-data.json";
import BasicWord from "./Common/BasicWord";

export default function AllWords() {
  const [smallDataSet, setSmallDataSet] = useState<basicWord[]>([]);

  const getListOfWOrds = () => {
    let arrayOfWords = [];
    for (let i = 0; i < 25; i++) {
      arrayOfWords.push(data[i]);
    }
    setSmallDataSet(arrayOfWords);
  };

  useEffect(() => {
    getListOfWOrds();
  }, []);

  function pickColorBasedOnArtikel(artikel: string) {
    if (artikel === "Der") {
      return `border-blue-200 bg-blue-100 hover:bg-blue-300 border-blue-600`;
    }
    if (artikel === "Das") {
      return `border-green-200 bg-green-100 hover:bg-green-300 border-green-600`;
    }
    if (artikel === "Die") {
      return `border-red-200 bg-red-100 hover:bg-red-300 border-red-600`;
    }
  }

  return (
    <div>
      <h1 className="m-5 flex justify-center">AllWords</h1>
      <div className="mx-3 grid grid-cols-2 gap-3">
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
