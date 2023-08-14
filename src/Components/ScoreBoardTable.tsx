import { topScoreDataType } from "../global";

export default function ScoreBoardTable({ dataToShow }: topScoreDataType[]) {
  console.log("dataToShow", dataToShow);
  return (
    <>
      {dataToShow &&
        dataToShow.map((data: any) => {
          return (
            <p className="text-center" key={data.name}>
              top score for {data.name} is {data.topScore}
            </p>
          );
        })}
    </>
  );
}
