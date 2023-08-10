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
      artikelStyle = " hover:bg-cyan-100 text-blue-600 border-blue-600";
      break;
    case "Das":
      artikelStyle = " hover:bg-green-100 text-green-600  border-green-600";
      break;
    case "Die":
      artikelStyle = "hover:bg-red-100 text-red-600  border-red-600";
      break;
    default:
      break;
  }
  return (
    <div
      className={`flex justify-center rounded-full border-[1px]  text-xs  shadow-xl transition-all duration-200  sm:m-1 sm:text-base  ${artikelStyle}
      `}
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
        className="w-full p-2"
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
