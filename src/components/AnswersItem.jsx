import React, { useState } from "react";

const variantLetters = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};

export default function AnswersItem({ answerItem, handleNextQuestion }) {
  const [isSelected, setIsSelected] = useState(false);

  const { id, answer, isCorrect } = answerItem;

  const handleAnswerClick = () => {
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
    setIsSelected(true);
  };

  return (
    <li
      className={`btn justify-start ${isSelected ? "" : ""}`}
      onClick={handleAnswerClick}
    >
      <button className={`flex items-center gap-[20px] `}>
        <div className="bg-[purple] w-[50px] h-[50px] rounded-[10px] flex items-center justify-center text-white">
          {variantLetters[id]}
        </div>
        <p className="text-white font-semibold uppercase">{answer}</p>
      </button>
    </li>
  );
}
