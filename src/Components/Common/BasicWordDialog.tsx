import { useRef, useEffect, MouseEvent } from "react";
import { BasicWordType } from "../../global";

type StyledDialogType = BasicWordType & {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function StyledDialog({
  word,
  Artikel,
  Plural,
  Meaning,
  wordId,
  isModalOpen,
  setIsModalOpen,
}: StyledDialogType) {
  const ref = useRef<HTMLDialogElement>(null);

  function isClickInsideRectangle(e: MouseEvent, element: HTMLElement) {
    const r = element.getBoundingClientRect();
    return (
      e.clientX > r.left &&
      e.clientX < r.right &&
      e.clientY > r.top &&
      e.clientY < r.bottom
    );
  }

  useEffect(() => {
    if (isModalOpen) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  return (
    <>
      <dialog
        className="backdrop:bg-neutral-950/75 mt-44 w-96  border-4 sm:mt-60"
        ref={ref}
        onClick={(e) =>
          ref.current &&
          !isClickInsideRectangle(e, ref.current) &&
          setIsModalOpen(false)
        }
      >
        <div className="relative flex flex-col items-center justify-center">
          <p className="text-xl">
            The {Meaning} - {Artikel} {word}
          </p>
          <p className="text-lg">Plural - {Plural}</p>
        </div>

        <div className="flex">
          <button className="m-2 cursor-pointer border-2 bg-red-300 p-1">
            Add to List of Words I Know{" "}
          </button>
          <button className="m-2 cursor-pointer border-2 bg-red-300 p-1">
            Add to List of Extra Hard Words
          </button>
          <button
            className="absolute top-0 right-0 m-2 cursor-pointer rounded-full px-2 py-1 transition-all duration-200  hover:bg-gray-200"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            X
          </button>
        </div>
      </dialog>
    </>
  );
}
