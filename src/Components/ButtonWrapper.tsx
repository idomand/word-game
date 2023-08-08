import BasicQuestionButton from "./Common/BasicQuestionButton";

type ButtonWrapperProps = {
  checkUserAnswer: (userAnswer: "Der" | "Die" | "Das") => void;
};

export default function ButtonWrapper({ checkUserAnswer }: ButtonWrapperProps) {
  return (
    <div className="bg-white">
      <BasicQuestionButton artikel="Der" checkUserAnswer={checkUserAnswer} />
      <BasicQuestionButton artikel="Die" checkUserAnswer={checkUserAnswer} />
      <BasicQuestionButton artikel="Das" checkUserAnswer={checkUserAnswer} />
    </div>
  );
}
