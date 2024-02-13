import React, { useMemo } from "react";
import QuestionHeadline from "../Questions/QuestionHeadline/QuestionHeadline";

export default function ResultItem({
  question,
  quote,
  index,
  answers,
  userAnswers,
  type,
  answer,
}) {
  const notFirstItem = index !== 0;
  const userAnswer = userAnswers[index].answer;

  const isAnswerCorrect = useMemo(() => {
    switch (type) {
      case "options":
        return answers.find(({ isCorrect }) => isCorrect).answer === userAnswer;
      case "input":
        return (
          answer.find(
            (item) => item.toLowerCase() === userAnswer.toLowerCase()
          ) !== undefined
        );
      default:
    }
  }, [answer, answers, type, userAnswer]);

  const renderedQuote =
    type === "input"
      ? quote.replace("....", answer[0])
      : answers.find(({ isCorrect }) => isCorrect).answer;

  return (
    <li className={`w-[600px] ${notFirstItem && "mt-[40px]"}`}>
      <div
        className={`w-full h-[40px] ${
          isAnswerCorrect ? "bg-[green]" : "bg-[red]"
        } bg-[#ab2626]`}
      />
      <QuestionHeadline question={question} quote={quote} />
      <p className="mt-[10px] text-bg">Your answer: {userAnswer}</p>
      <p className="mt-[10px] text-green">Correct answer: {renderedQuote}</p>
    </li>
  );
}
