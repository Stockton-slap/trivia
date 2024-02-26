import React, { useMemo, useState } from "react";
import AnswersItem from "./AnswersItem";
import shuffledArray from "../../utils/shuffledArray";

export default function AnswersList({
  currentQuestion,
  handleNextQuestion,
  setScore,
  setUserAnswers,
  userAnswers,
}) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [isClickDisabled, setIsClickDisabled] = useState(false);
  const { answers } = currentQuestion;

  const handleAnswerClick = (id, answer, isCorrect) => {
    if (!currentQuestion) return null;

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
    if (selectedAnswerId === null) return "bg-bg";
    return selectedAnswerId === answerId
      ? "border-[1px] m-[-1px]"
      : "opacity-[0.7]";
  };

  const memoizedShuffledAnswers = useMemo(() => {
    return shuffledArray(answers);
  }, [answers]);

  return (
    <ul className="grid grid-cols-2 gap-8 justify-items-center items-center">
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
