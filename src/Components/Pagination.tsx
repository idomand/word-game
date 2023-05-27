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

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <ul className="grid grid-cols-9">
      <li>
        <button
          disabled={currentPage === 1}
          className="m-1 border-2 p-2 hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-orange-400"
          onClick={() => {
            prevPage();
          }}
        >
          {"<<"}
        </button>
      </li>
      {pageNumbers.map((element) => {
        return (
          <li key={element}>
            <button
              disabled={currentPage === element}
              className="m-1 border-2 p-2 hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-orange-400"
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
          className="m-1 border-2 p-2 hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-orange-400"
          onClick={() => {
            nextPage();
          }}
        >
          {">>"}
        </button>
      </li>
    </ul>
  );
}
