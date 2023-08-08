import { useState } from "react";
import { BasicWordType } from "../../global";
import BasicWordDialog from "./BasicWordDialog";

export default function BasicWordElement({
  word,
  Artikel,
  Plural,
  Meaning,
  wordId,
}: BasicWordType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div
      className={`m-1 flex justify-center  rounded-md border-2 text-sm shadow-xl  sm:text-base ${artikelStyle}`}
    >
      <BasicWordDialog
        Artikel={Artikel}
        Meaning={Meaning}
        Plural={Plural}
        word={word}
        wordId={wordId}
        key={wordId}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <button
        className="w-full border-2 p-2"
        onClick={() => {
          setIsModalOpen(true);
        }}
        key={Meaning}
      >
        <p>{`The ${Meaning} : ${Artikel} ${word}`} </p>
      </button>
    </div>
  );
}
