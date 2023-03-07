import React, { useEffect, useState } from "react";
import data from "../German-words-data.json";

type Props = {};

export default function AllWords({}: Props) {
  const [smallDataSet, setSmallDataSet] = useState<basicWord[]>([]);

  const myFunc = () => {
    let foo = [];
    for (let i = 0; i < 25; i++) {
      console.log("data[i]", data[i]);
      foo.push(data[i]);
    }
    setSmallDataSet(foo);
  };

  useEffect(() => {
    myFunc();
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
      <div className="mx-10 grid grid-cols-5  gap-4">
        {smallDataSet.map((element) => {
          let elementColor = pickColorBasedOnArtikel(element.Artikel);
          console.log("elementColor", elementColor);

          return (
            <div
              className={`flex justify-center border-4 hover:font-bold  ${elementColor} `}
              key={element.Meaning}
            >
              <p>
                {`The ${element.Meaning} : ${element.Artikel} ${element.word}`}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
