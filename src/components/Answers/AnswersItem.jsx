import React, { useState } from "react";
import getVariantLetters from "../../utils/getVariantLetters";

export default function AnswersItem({
  onAnswerClick,
  getItemColor,
  answer,
  index,
}) {
  const letter = getVariantLetters(index);
  const [isHovered, setIsHovered] = useState(false);

  const truncatedAnswer =
    answer.length > 20 ? `${answer.slice(0, 20)}...` : answer;

  const shouldShowFullAnswer = isHovered && answer.length > 20;

  return (
    <li
      className={`btn bg-bg p-[8px] justify-start ${getItemColor} group`}
      onClick={onAnswerClick}
    >
      <div
        className={`p-[16px] w-full bg-white rounded-[10px] border-[1px] group-hover:border-[1px] group-hover:border-hoverAnswer group-hover:m-[-1px] transition-all ease-in-out duration-300`}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          type="button"
          className={`flex items-center gap-[24px] overflow-hidden w-full`}
        >
          <div
            className={`bg-gradient-btn text-white px-[20px] py-[12px] rounded-[10px] flex items-center justify-center text-sm font-bold group-hover:bg-gradient-btn-hover group-hover:scale-90`}
          >
            {letter}
          </div>
          <div className={`flex items-center gap-[24px] overflow-hidden`}>
            <p
              className={`font-semibold text-textColor ${
                shouldShowFullAnswer && "slide-out"
              }`}
            >
              {isHovered ? answer : truncatedAnswer}
            </p>
          </div>
        </button>
      </div>
    </li>
  );
}
