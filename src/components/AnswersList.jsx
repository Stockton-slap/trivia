import React, { useMemo, useState } from "react";
import AnswersItem from "./AnswersItem";
import shuffledArray from "../utils/fisherYatesShuffle";

export default function AnswersList({
  answers,
  handleNextQuestion,
  setScore,
  setUserAnswers,
  userAnswers,
}) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [isClickDisabled, setIsClickDisabled] = useState(false);

  const handleAnswerClick = (id, answer, isCorrect) => {
    if (isClickDisabled) {
      return;
    }

    setSelectedAnswerId(id);
    setIsClickDisabled(true);

    setTimeout(() => {
      handleNextQuestion();
      setIsClickDisabled(false);
    }, 500);

    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    setUserAnswers([...userAnswers, { id, answer, isCorrect }]);
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
      {memoizedShuffledAnswers.map(({ id, answer, isCorrect }, index) => (
        <AnswersItem
          answer={answer}
          key={id}
          handleNextQuestion={handleNextQuestion}
          onAnswerClick={() => handleAnswerClick(id, answer, isCorrect)}
          getItemColor={getItemColor(id)}
          index={index}
        />
      ))}
    </ul>
  );
}
