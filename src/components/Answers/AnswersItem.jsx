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
    <li className={`btn justify-start ${getItemColor}`} onClick={onAnswerClick}>
      <button
        type="button"
        className="flex items-center gap-[32px] overflow-hidden"
      >
        <div className="bg-[purple] px-[24px] py-[16px] rounded-[10px] flex items-center justify-center  text-sm">
          {letter}
        </div>
        <p className="font-semibold">{answer}</p>
      </button>
    </li>
  );
}
