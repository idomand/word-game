import { useEffect, useState, lazy } from "react";
import { getScoreBoard } from "../Firebase/FirebaseCrud";
import { topScoreDataType } from "../global";

export default function ScoreBoard() {
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
  console.log("currentData", currentData);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("currentData", currentData);

  return (
    <section>
      <h1 className="text-center underline">Score Board</h1>

      <div className="mx-auto flex max-w-md justify-around rounded-lg bg-orange-400 p-2 text-center">
        <h3 className="text-white">Name</h3>
        <h3 className="text-white">Score</h3>
        <h3 className="text-white">Date</h3>
      </div>

      <div className="mx-auto mt-3 max-w-md ">
        {currentData &&
          currentData.map((data: any, index) => {
            return (
              <div className="mb-2 flex justify-around bg-gray-100 py-1">
                <p className="w-24" key={data.name}>
                  #{++index} {data.name}
                </p>
                <p className="w-20 text-center"> {data.topScore}</p>
                <p className="w-20 text-center"> {data.topScore}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
