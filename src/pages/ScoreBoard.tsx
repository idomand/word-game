import { useEffect, useState } from "react";
import { getScoreBoard } from "../Firebase/FirebaseCrud";

type topScoreData = {
  name: string;
  topScore: number;
  uid: string;
};

export default function ScoreBoard() {
  // console.log("currentData", currentData);
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
      {currentData &&
        currentData.map((data: any) => {
          return (
            <p key={data.name}>
              top score for {data.name} is {data.topScore}
            </p>
          );
        })}
      <p></p>
    </section>
  );
}
