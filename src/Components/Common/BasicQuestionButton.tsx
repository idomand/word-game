type Props = {
  artikel: "Der" | "Die" | "Das";
  checkUserAnswer: (userAnswer: "Der" | "Die" | "Das") => void;
};

export default function BasicQuestionButton({
  artikel,
  checkUserAnswer,
}: Props) {
  let artikelStyle;
  console.log("artikel", artikel);
  switch (artikel) {
    case "Der":
      artikelStyle = " bg-blue-500 hover:bg-blue-300 ";
      break;
    case "Das":
      artikelStyle = " bg-green-500 hover:bg-green-300 ";
      break;
    case "Die":
      artikelStyle = " bg-red-500 hover:bg-red-300 ";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={() => {
        checkUserAnswer(artikel);
      }}
      className={`my-1 w-32 cursor-pointer rounded-full px-6 py-2 text-center text-white  transition-all duration-200 sm:my-0 sm:mx-1 ${artikelStyle} `}
    >
      {artikel}
    </button>
  );
}
