import { useEffect } from "react";
import { H1 } from "./Common/StyledText";
import BasicWord from "./Common/StyledWord";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { GetArrayOfWord } from "../Redux/GameDataSlice";

export default function AllWords() {
  const dispatch = useAppDispatch();
  const arrayOfWords = useAppSelector((state) => state.arrayOfWords);

  const randomStartingIndex = Math.floor(Math.random() * 1000);

  async function getListOfWOrds() {
    dispatch(
      GetArrayOfWord({ numberOfWords: 20, startingIndex: randomStartingIndex })
    );
  }

  useEffect(() => {
    getListOfWOrds();
  }, []);

  return (
    <div>
      <H1>All Words</H1>

      <div className="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {arrayOfWords.map((element) => {
          return (
            <BasicWord
              key={`${element.word}${element.Meaning}${element.Artikel}`}
              word={element.word}
              Plural={element.Plural}
              Meaning={element.Meaning}
              Artikel={element.Artikel}
            />
          );
        })}
      </div>
    </div>
  );
}
