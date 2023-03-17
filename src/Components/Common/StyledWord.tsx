import React from "react";

export default function BasicWord({
  word,
  Artikel,
  Plural,
  Meaning,
}: basicWord) {
  let artikelStyle;

  switch (Artikel) {
    case "Der":
      artikelStyle =
        "border-blue-200 bg-blue-100 hover:bg-blue-300 border-blue-600";
      break;
    case "Das":
      artikelStyle =
        "border-green-200 bg-green-100 hover:bg-green-300 border-green-600";
      break;
    case "Die":
      artikelStyle =
        "border-red-200 bg-red-100 hover:bg-red-300 border-red-600";
      break;
    default:
      break;
  }

  return (
    <div>
      <div
        className={`m-1  flex justify-center rounded-md border-2 p-2 shadow-xl ${artikelStyle} `}
        key={Meaning}
      >
        <p>{`The ${Meaning} : ${Artikel} ${word}`} </p>
      </div>
    </div>
  );
}
