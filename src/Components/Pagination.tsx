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
    let newArrayOfButtons = [1, 2, 3, 4, 5];
    if (currentPage < 5) {
      setButtonsToShow(newArrayOfButtons);
    } else if (currentPage + 4 > numberOfPages) {
      newArrayOfButtons = [];
      for (let index = numberOfPages; index > numberOfPages - 5; index--) {
        newArrayOfButtons.unshift(index);
      }
      setButtonsToShow(newArrayOfButtons);
    } else {
      newArrayOfButtons = newArrayOfButtons.map(
        (element) => element + currentPage - 3
      );
      setButtonsToShow(newArrayOfButtons);
    }
  }

  useEffect(() => {
    buttonsToShowFunc();
  }, [currentPage]);

  return (
    <ul className="flex justify-center">
      <li>
        <button
          disabled={currentPage === 1}
          className="m-1 border-2 p-1 hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-gray-300 sm:p-2"
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          {"<<"}
        </button>
      </li>
      <li>
        <button
          disabled={currentPage === 1}
          className="m-1 border-2 p-1 hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-75 sm:p-2 "
          onClick={() => {
            prevPage();
          }}
        >
          {"<"}
        </button>
      </li>

      {buttonsToShow.map((element) => {
        return (
          <li key={element}>
            <button
              disabled={currentPage === element}
              className={`m-1 border-2 p-1 hover:bg-green-400 disabled:cursor-not-allowed disabled:bg-green-600 sm:p-2  ${
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

      <li>
        <button
          disabled={currentPage === numberOfPages}
          className="m-1 border-2 p-1 hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-gray-300 sm:p-2"
          onClick={() => {
            nextPage();
          }}
        >
          {">"}
        </button>
      </li>
      <li>
        <button
          disabled={currentPage === numberOfPages}
          className="m-1 border-2 p-1 hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-gray-300 sm:p-2"
          onClick={() => {
            setCurrentPage(numberOfPages);
          }}
        >
          {">>"}
        </button>
      </li>
    </ul>
  );
}
