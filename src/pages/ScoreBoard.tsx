import { useEffect, useState, lazy } from "react";
import { getScoreBoard } from "../Firebase/FirebaseCrud";
import { topScoreDataType } from "../global";

const basicScoreObject = {
  name: "",
  topScore: 0,
  uid: "",
  date: "",
};

export default function ScoreBoard() {
  const [isChecked, setIsChecked] = useState(false);

  const [totalTopScore, setTotalTopScore] = useState<topScoreDataType[]>([
    basicScoreObject,
  ]);
  const [userTopScore, setUserTopScore] = useState<topScoreDataType[]>([
    basicScoreObject,
  ]);

  async function fetchData() {
    const { totalTopScores, userTopScore } = await getScoreBoard();
    const sortedTotalScores = structuredClone(totalTopScores).sort(
      (b, a) => a.topScore - b.topScore
    );
    const sortedUserScores = structuredClone(userTopScore).sort(
      (b, a) => a.topScore - b.topScore
    );
    setTotalTopScore(sortedTotalScores);
    setUserTopScore(sortedUserScores);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <section>
      <div className="flex justify-center">
        <label className="themeSwitcherTwo shadow-card relative my-3 inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-black p-1 ">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              !isChecked ? "text-primary bg-[#f4f7ff]" : "text-white"
            }`}
          >
            Personal Best
          </span>
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              isChecked ? "text-primary bg-[#f4f7ff]" : "text-white"
            }`}
          >
            Top Scores
          </span>
        </label>
      </div>

      <div className="mx-auto flex max-w-lg justify-around rounded-lg bg-orange-400 p-2 text-center">
        <h3 className="text-white">Name</h3>
        <h3 className="text-white">Score</h3>
        <h3 className="text-white">Date</h3>
      </div>

      <div className="mx-auto mt-3 max-w-lg ">
        {totalTopScore &&
          isChecked &&
          totalTopScore.map((data: any, index) => {
            return (
              <div
                key={data.name}
                className="mb-2 flex justify-around rounded-lg bg-gray-100 py-1"
              >
                <p className="w-28" key={data.name}>
                  #{++index} {data.name}
                </p>
                <p className="w-28 text-center"> {data.topScore} Pointes</p>
                <p className="w-28 text-center"> {data.date}</p>
              </div>
            );
          })}

        {userTopScore &&
          !isChecked &&
          userTopScore.map((data: any, index) => {
            return (
              <div
                key={data.name}
                className="mb-2 flex justify-around rounded-lg bg-gray-100 py-1"
              >
                <p className="w-28" key={data.name}>
                  #{++index} {data.name}
                </p>
                <p className="w-20 text-center"> {data.topScore}</p>
                <p className="w-20 text-center"> {data.date}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
