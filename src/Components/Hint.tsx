import React, { useState } from "react";

type Props = {
  Artikel: "Der" | "Die" | "Das";
};
const Tooltip = ({ Artikel }: Props) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-block rounded-full border-2 border-orange-400 bg-white py-1 px-2 text-center text-orange-400">
      <button
        className="cursor-pointer text-gray-700 hover:text-gray-900"
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
        } bottom-6 left-12 whitespace-nowrap rounded-lg border-2 bg-gray-100 p-2 text-gray-800 shadow-md `}
      >
        {Artikel}
      </div>
    </div>
  );
};

export default Tooltip;
