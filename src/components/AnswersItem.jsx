import React from "react";

const variantLetters = ["A", "B", "C", "D"];

export default function AnswersItem({
  onAnswerClick,
  getItemColor,
  answer,
  index,
}) {
  const letter = variantLetters[index];

  return (
    <li className={`btn justify-start ${getItemColor}`} onClick={onAnswerClick}>
      <button
        type="button"
        className="flex items-center gap-[32px] overflow-hidden"
      >
        <div className="bg-[purple] px-[24px] py-[16px] rounded-[10px] flex items-center justify-center text-white text-sm">
          {letter}
        </div>
        <p className="text-white font-semibold content h-full w-100 bg-yellow-300 whitespace-nowrap hover:animate-floatTextSide">
          {answer}
        </p>
      </button>
    </li>
  );
}
