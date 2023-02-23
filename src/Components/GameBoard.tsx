import React from "react";

type Props = {};

export default function GameBoard({}: Props) {
  function clickButton(word: "Der" | "Die" | "Das") {
    console.log("word :>> ", word);
  }

  return (
    <div className="">
      <h2 className="text-center">what's the artikal?</h2>

      <button
        onClick={() => {
          clickButton("Der");
        }}
        className="m-3 w-24 rounded border-2 border-solid border-blue-500 text-center hover:bg-blue-100"
      >
        Der
      </button>

      <button
        onClick={() => {
          clickButton("Die");
        }}
        className="m-3 w-24 rounded border-2 border-solid border-red-500 text-center hover:bg-red-100"
      >
        Die
      </button>

      <button
        onClick={() => {
          clickButton("Das");
        }}
        className="m-3 w-24 rounded border-2 border-solid border-green-500 text-center hover:bg-green-100"
      >
        Das
      </button>
    </div>
  );
}
