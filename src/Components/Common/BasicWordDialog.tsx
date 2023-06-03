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
        className="backdrop:bg-neutral-950/75 w-96 border-4"
        ref={ref}
        onClick={(e) =>
          ref.current &&
          !isClickInsideRectangle(e, ref.current) &&
          setIsModalOpen(false)
        }
      >
        <div className="flex flex-col items-center justify-center">
          <p>
            {Meaning}:{Artikel} {word}
          </p>
          <p>Plural :{Plural}</p>
        </div>
        <button
          className="cursor-pointer border-2 bg-red-300"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          close
        </button>
      </dialog>
    </>
  );
}
