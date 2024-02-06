import React from "react";

const variantLetters = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};

export default function AnswersItem({
  answerItem,
  onAnswerClick,
  getItemColor,
}) {
  const { id, answer } = answerItem;

  return (
    <li className={`btn justify-start ${getItemColor}`} onClick={onAnswerClick}>
      <button type="button" className="flex items-center gap-[32px]">
        <div className="bg-[purple] w-[50px] h-[50px] rounded-[10px] flex items-center justify-center text-white">
          {variantLetters[id]}
        </div>
        <p className="text-white font-semibold uppercase">{answer}</p>
      </button>
    </li>
  );
}
