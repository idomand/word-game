import { useEffect, useState, lazy } from "react";
import { getScoreBoard } from "../Firebase/FirebaseCrud";
import { topScoreDataType } from "../global";

export default function ScoreBoard() {
  const [showPersonalScore, setShowPersonalScore] = useState(true);
  console.log("showPersonalScore", showPersonalScore);
  const [currentData, setCurrentData] = useState<topScoreDataType[]>([
    {
      name: "",
      topScore: 0,
      uid: "",
    },
  ]);

  async function fetchData() {
    const data = await getScoreBoard();
    let sortedData = structuredClone(data).sort(
      (b, a) => a.topScore - b.topScore
    );
    setCurrentData(sortedData);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section>
      <div className="mx-auto w-fit">
        <label
          htmlFor="Toggle3"
          className="inline-flex cursor-pointer items-center rounded-md p-2 dark:text-gray-800"
        >
          <input
            id="Toggle3"
            type="checkbox"
            className="peer hidden"
            checked={showPersonalScore}
            onChange={(e) => {
              setShowPersonalScore(() => !showPersonalScore);
            }}
          />
          <span className="rounded-l-md bg-violet-400 px-4 py-2 peer-checked:bg-gray-300">
            Personal Best
          </span>
          <span className="rounded-r-md bg-gray-300 px-4 py-2 peer-checked:bg-violet-400">
            Top Score
          </span>
        </label>
      </div>

      <div className="mx-auto mt-3 w-fit ">
        {currentData &&
          currentData.map((data: any) => {
            return (
              <div className="flex justify-between" key={data.name}>
                <p className="">{data.name}</p>
                <p className="ml-3"> {data.topScore}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
