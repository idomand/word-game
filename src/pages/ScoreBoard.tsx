import { Suspense, useEffect, useState, lazy } from "react";
import { getScoreBoard } from "../Firebase/FirebaseCrud";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import { topScoreDataType } from "../global";

const ScoreBoardTableToShow = lazy(
  () => import("../Components/ScoreBoardTable")
);

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
      <div className="mx-auto w-fit border-2">
        <Suspense fallback={<LoadingSpinner />}>
          <ScoreBoardTableToShow dataToShow={currentData} />
        </Suspense>
      </div>
    </section>
  );
}
