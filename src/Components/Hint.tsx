import React, { useState } from "react";

type Props = {
  Artikel: "Der" | "Die" | "Das";
  word: string;
  Meaning: string;
};
const Tooltip = ({ Artikel, word, Meaning }: Props) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative mb-3 mt-4 flex justify-center ">
      <div className="absolute top-1/2 z-10 h-[0.10px] w-full -translate-y-1/2 transform bg-gray-500 "></div>
      <div className="z-20 mx-auto ">
        <div className="relative inline-block rounded-full border-[1px] border-blue-500 bg-white py-1 px-2 text-center ">
          <button
            className="cursor-pointer text-xs text-blue-500 "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setTooltipVisible(!isTooltipVisible);
            }}
          >
            Hint
          </button>
          <div
            className={`absolute ${
              isTooltipVisible ? "block" : "hidden"
            } top-9 -left-20  whitespace-nowrap rounded-full border-[1px] border-blue-500  py-1 px-2 text-xs text-blue-500 shadow-md `}
          >
            {word} means {Meaning} ({Artikel})
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Tooltip;
