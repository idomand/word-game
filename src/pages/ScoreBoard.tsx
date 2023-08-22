import { Suspense, useEffect, useState, lazy } from "react";
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
      <h1 className="text-center">score board</h1>
      <div className="mx-auto mt-3 w-fit ">
        {currentData &&
          currentData.map((data: any) => {
            return (
              <div className="flex justify-between">
                <p className="" key={data.name}>
                  {data.name}
                </p>
                <p className="ml-3"> {data.topScore}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
