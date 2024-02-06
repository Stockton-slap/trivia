import React, { useMemo, useState } from "react";
import AnswersItem from "./AnswersItem";
import shuffledArray from "../utils/fisherYatesShuffle";

export default function AnswersList({ answers, handleNextQuestion, setScore }) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);

  const handleAnswerClick = (id, isCorrect) => {
    setSelectedAnswerId(id);
    setTimeout(() => {
      handleNextQuestion();
    }, 500);

    setScore((prevScore) => {
      if (isCorrect) {
        return prevScore + 1;
      } else {
        return prevScore;
      }
    });
  };

  const getItemColor = (answerId) => {
    if (selectedAnswerId === null) return "bg-orange";
    return selectedAnswerId === answerId
      ? "border border-solid border-[1px]"
      : "opacity-[0.7]";
  };

  const memoizedShuffledAnswers = useMemo(() => {
    return shuffledArray(answers);
  }, [answers]);

  return (
    <ul className="grid grid-cols-2 gap-8 justify-items-center items-center mt-[32px]">
      {memoizedShuffledAnswers.map((answer) => (
        <AnswersItem
          answerItem={answer}
          key={answer.id}
          handleNextQuestion={handleNextQuestion}
          onAnswerClick={() => handleAnswerClick(answer.id, answer.isCorrect)}
          getItemColor={getItemColor(answer.id)}
        />
      ))}
    </ul>
  );
}
