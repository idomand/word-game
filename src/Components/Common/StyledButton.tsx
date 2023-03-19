import React, { PropsWithChildren } from "react";

type QuestionButtonTypes = {
  children?: React.ReactNode;
  Artikel: string;
};

export function QuestionButton({ Artikel, children }: QuestionButtonTypes) {
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
    <button
      className={`m-3 w-24 transform rounded border-2 text-center shadow-lg outline-none transition-transform  focus:ring-4 active:scale-50 ${artikelStyle}`}
    >
      {children}
    </button>
  );
}
