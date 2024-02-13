import React from "react";

const variantLetters = ["A", "B", "C", "D"];

export default function AnswersItem({
  onAnswerClick,
  getItemColor,
  answer,
  index,
}) {
  const letter = variantLetters[index];

  //   const displayAnswer =
  //     answer.length > 20 ? `${answer.slice(0, 20)}...` : answer;

  return (
    <li
      className={`btn bg-bg p-[8px] justify-start ${getItemColor} group`}
      onClick={onAnswerClick}
    >
      <div className="p-[16px] w-full bg-white rounded-[10px] group-hover:border-[1px] group-hover:border-hoverAnswer group-hover:m-[-1px]">
        <button
          type="button"
          className="flex items-center gap-[24px] overflow-hidden "
        >
          <div className="bg-orange px-[20px] group-hover:bg-hoverAnswer duration-300 py-[12px] rounded-[10px] flex items-center justify-center text-sm font-bold">
            {letter}
          </div>
          <p className="font-semibold text-textColor">{answer}</p>
        </button>
      </div>
    </li>
  );
}
