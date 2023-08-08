import { useEffect, useState } from "react";
import BasicWordElement from "../Components/Common/BasicWordElement";
import { H1 } from "../Components/Common/StyledText";
import Pagination from "../Components/Pagination";
import { useFetchAllWordsFromFirestoreQuery } from "../Redux/APISlice";
import {
  GetAllWordsFromFirestore,
  GetArrayOfWords,
} from "../Redux/GameDataSlice";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";

export default function AllWords() {
  const dispatch = useAppDispatch();

  const arrayOfWords = useAppSelector((state) => state.GameData.arrayOfWords);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [recordsPerPage] = useState(20);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const wordsToShow = arrayOfWords.slice(indexOfFirstRecord, indexOfLastRecord);

  // const { data } = useFetchAllWordsFromFirestoreQuery();

  useEffect(() => {
    async function getListOfWOrds() {
      await dispatch(
        GetArrayOfWords({
          numberOfWords: 2000,
          startingIndex: 1,
        })
      );
    }
    getListOfWOrds();
  }, []);

  useEffect(() => {
    setNumberOfPages(Math.ceil(arrayOfWords.length / recordsPerPage));
  }, [arrayOfWords]);

  return (
    <div>
      <H1>Dictionary - page {currentPage}</H1>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />

      <div className="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {wordsToShow.map((element) => {
          return (
            <BasicWordElement
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
