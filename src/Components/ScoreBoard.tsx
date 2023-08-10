import { useEffect, useState } from "react";
import { useGetTopScoresQuery } from "../Redux/APISlice";

export default function ScoreBoard() {
  // console.log("currentData", currentData);

  const { currentData } = useGetTopScoresQuery();
  async function fetchData() {}

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h1>score board</h1>
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
