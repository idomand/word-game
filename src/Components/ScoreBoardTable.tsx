export default function ScoreBoardTable({ currentData }: any) {
  return (
    <section className="mt-5">
      {currentData &&
        currentData.map((data: any) => {
          return (
            <p className="text-center" key={data.name}>
              top score for {data.name} is {data.topScore}
            </p>
          );
        })}
    </section>
  );
}
