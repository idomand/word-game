import React from "react";

// type Props = {};

export default function ButtonWrapper() {
  function clickButton(artikel: "Der" | "Die" | "Das") {
    console.log("artikel", artikel);
  }

  return (
    <div className="">
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
