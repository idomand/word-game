import { useEffect, useState } from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  numberOfPages: number;
};

export default function Pagination({
  currentPage,
  setCurrentPage,
  numberOfPages,
}: PaginationProps) {
  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  const [buttonsToShow, setButtonsToShow] = useState<number[]>([]);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  function buttonsToShowFunc() {
    let screenSize = window.innerWidth;
    let newArrayOfButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (currentPage < 10) {
      setButtonsToShow(newArrayOfButtons);
    } else if (currentPage + 9 > numberOfPages) {
      newArrayOfButtons = [];
      for (let index = numberOfPages; index > numberOfPages - 10; index--) {
        newArrayOfButtons.unshift(index);
      }
      setButtonsToShow(newArrayOfButtons);
    } else {
      newArrayOfButtons = newArrayOfButtons.map(
        (element) => element + currentPage - 5
      );
      setButtonsToShow(newArrayOfButtons);
    }
  }

  useEffect(() => {
    buttonsToShowFunc();
  }, [currentPage]);

  return (
    <ul className="flex justify-center">
      {currentPage !== 1 && (
        <>
          <li>
            <button
              disabled={currentPage === 1}
              className="m-1 border-2 p-2 hover:bg-zinc-500"
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              {"<<<"}
            </button>
          </li>
          <li>
            <button
              disabled={currentPage === 1}
              className="m-1 border-2 p-2 hover:bg-zinc-500 "
              onClick={() => {
                prevPage();
              }}
            >
              {"<"}
            </button>
          </li>
        </>
      )}

      {buttonsToShow.map((element) => {
        return (
          <li key={element}>
            <button
              disabled={currentPage === element}
              className={`m-1 border-2 p-2 hover:bg-zinc-500  ${
                currentPage === element ? "bg-yellow-300" : "bg-green-300"
              }`}
              onClick={() => {
                setCurrentPage(element);
              }}
            >
              {element}
            </button>
          </li>
        );
      })}

      {currentPage !== numberOfPages && (
        <>
          <li>
            <button
              disabled={currentPage === numberOfPages}
              className="m-1 border-2 p-2 hover:bg-zinc-500 "
              onClick={() => {
                nextPage();
              }}
            >
              {">>"}
            </button>
          </li>
          <li>
            <button
              disabled={currentPage === numberOfPages}
              className="m-1 border-2 p-2 hover:bg-zinc-500"
              onClick={() => {
                setCurrentPage(numberOfPages);
              }}
            >
              {">>>"}
            </button>
          </li>
        </>
      )}
    </ul>
  );
}
