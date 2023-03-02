import React, { useEffect, useState } from "react";
import data from "../German-words-data.json";
import clsx from "clsx";

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
      return "blue";
    }
    if (artikel === "Das") {
      return "green";
    }
    if (artikel === "Die") {
      return "red";
    }
  }

  return (
    <div>
      <h1 className="m-5 flex justify-center">AllWords</h1>
      <div className="grid grid-cols-4 gap-4">
        {smallDataSet.map((element) => {
          let elementColor = pickColorBasedOnArtikel(element.Artikel);

          //!======================================
          // todo: add clsx to classnames to use it to pick red-blue-green
          //!======================================

          return (
            <div
              className={`flex justify-center border-4 border-${elementColor}-200 bg-${elementColor}-200 hover:bg-${elementColor}-500 hover: hover:font-bold border-${elementColor}-600`}
              key={element.Meaning}
            >
              <p>{`${element.Meaning} : ${element.word}`} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
