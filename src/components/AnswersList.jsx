import React, { useState } from "react";
import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, handleNextQuestion }) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);

  const handleAnswerClick = (id) => {
    setSelectedAnswerId(id);
    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };

  const getItemColor = (answerId) => {
    if (selectedAnswerId === null) return "bg-btn";
    return selectedAnswerId === answerId
      ? "border border-solid border-[1px]"
      : "opacity-[0.7]";
  };

  return (
    <ul className="grid grid-cols-2 gap-4 justify-items-center items-center mt-[32px]">
      {answers.map((answer) => (
        <AnswersItem
          answerItem={answer}
          key={answer.id}
          handleNextQuestion={handleNextQuestion}
          onAnswerClick={() => handleAnswerClick(answer.id)}
          getItemColor={getItemColor(answer.id)}
        />
      ))}
    </ul>
  );
}
