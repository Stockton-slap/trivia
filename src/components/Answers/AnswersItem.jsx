import React from "react";
import getVariantLetters from "../../utils/getVariantLetters";

export default function AnswersItem({
  onAnswerClick,
  getItemColor,
  answer,
  index,
}) {
  const letter = getVariantLetters(index);

  //   const displayAnswer =
  //     answer.length > 20 ? `${answer.slice(0, 20)}...` : answer;

  return (
    <li
      className={`btn bg-bg p-[8px] justify-start ${getItemColor} group`}
      onClick={onAnswerClick}
    >
      <div className="p-[16px] w-full bg-white rounded-[10px] transition duration-500 ease-in-out group-hover:border-[1px] group-hover:border-hoverAnswer group-hover:m-[-1px]">
        <button
          type="button"
          className="flex items-center gap-[24px] overflow-hidden "
        >
          <div className="bg-gradient-btn px-[20px] py-[12px] rounded-[10px] flex items-center justify-center text-sm font-bold transition duration-500 ease-in-out group-hover:bg-gradient-btn-hover group-hover:scale-90">
            {letter}
          </div>
          <p className="font-semibold text-textColor">{answer}</p>
        </button>
      </div>
    </li>
  );
}
