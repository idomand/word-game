import React from "react";

type ButtonWrapperProps = {
  checkUserAnswer: (userAnswer: "Der" | "Die" | "Das") => void;
};

export default function ButtonWrapper({ checkUserAnswer }: ButtonWrapperProps) {
  return (
    <div className="">
      <button
        onClick={() => {
          checkUserAnswer("Der");
        }}
        className="m-3 w-24 rounded border-2 border-solid border-blue-500 text-center hover:bg-blue-100"
      >
        Der
      </button>

      <button
        onClick={() => {
          checkUserAnswer("Die");
        }}
        className="m-3 w-24 rounded border-2 border-solid border-red-500 text-center hover:bg-red-100"
      >
        Die
      </button>

      <button
        onClick={() => {
          checkUserAnswer("Das");
        }}
        className="m-3 w-24 rounded border-2 border-solid border-green-500 text-center hover:bg-green-100"
      >
        Das
      </button>
    </div>
  );
}
