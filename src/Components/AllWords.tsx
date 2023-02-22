import React from "react";
import data from "../German-words-data.json";

type Props = {};

export default function AllWords({}: Props) {
  return (
    <div>
      <h1>AllWords</h1>
      {data.map((element) => {
        return (
          <div className="flex" key={element.Meaning}>
            <p> {element.Meaning}</p> : <p>{element.word}</p>
          </div>
        );
      })}
    </div>
  );
}
