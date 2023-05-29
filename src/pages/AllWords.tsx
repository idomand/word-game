import { useEffect, useState } from "react";
import { H1 } from "../Components/Common/StyledText";
import BasicWord from "../Components/Common/StyledWord";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { GetArrayOfWords } from "../Redux/GameDataSlice";
import Pagination from "../Components/Pagination";
export default function AllWords() {
  const dispatch = useAppDispatch();

  const arrayOfWords = useAppSelector((state) => state.arrayOfWords);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [recordsPerPage] = useState(20);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const wordsToShow = arrayOfWords.slice(indexOfFirstRecord, indexOfLastRecord);

  async function getListOfWOrds() {
    await dispatch(
      GetArrayOfWords({
        numberOfWords: 2000,
        startingIndex: 1,
      })
    );
  }
  useEffect(() => {
    getListOfWOrds();
  }, []);

  useEffect(() => {
    setNumberOfPages(Math.ceil(arrayOfWords.length / recordsPerPage));
  }, [arrayOfWords]);

  return (
    <div>
      <H1>All Words - page {currentPage}</H1>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />
      <div className="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {wordsToShow.map((element) => {
          return (
            <BasicWord
              key={`${element.word}${element.Meaning}${element.Artikel}`}
              word={element.word}
              Plural={element.Plural}
              Meaning={element.Meaning}
              Artikel={element.Artikel}
              wordId={element.wordId}
            />
          );
        })}
      </div>
    </div>
  );
}
