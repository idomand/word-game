import { Suspense, useEffect, useState, lazy } from "react";
import { getScoreBoard } from "../Firebase/FirebaseCrud";
import LoadingSpinner from "../Components/Common/LoadingSpinner";
import ScoreBoardTable from "../Components/ScoreBoardTable";

type topScoreData = {
  name: string;
  topScore: number;
  uid: string;
};

const ScoreBoardTableToShow = lazy(
  () => import("../Components/ScoreBoardTable")
);

export default function ScoreBoard() {
  const [currentData, setCurrentData] = useState<null | topScoreData[]>(null);

  async function fetchData() {
    const data = await getScoreBoard();
    setCurrentData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h1 className="text-center">score board</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <ScoreBoardTableToShow currentData={currentData} />
      </Suspense>
    </section>
  );
}
