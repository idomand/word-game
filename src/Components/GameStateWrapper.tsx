import { useAppSelector } from "../Redux/ReduxHooks";

export default function GameStateWrapper() {
  const score = useAppSelector((state) => state.GameData.score);

  const arrayOfWords = useAppSelector((state) => state.GameData.arrayOfWords);
  const indexOfWordInArray = useAppSelector(
    (state) => state.GameData.indexOfWordInArray
  );

  return (
    <div className="flex justify-around">
      <div>score: {score}</div>
      <div>
        {indexOfWordInArray + 1}/{arrayOfWords.length}
      </div>
    </div>
  );
}
