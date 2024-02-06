import React from "react";
import QuestionHeadline from "./QuestionHeadline";

export default function ResultItem({
  question,
  quote,
  index,
  answers,
  userAnswers,
}) {
  const notFirstItem = index !== 0;
  const userAnswer = userAnswers[index].answer;
  const correctAnswer = answers.find((item) => item.isCorrect).answer;
  const matchedAnswers = userAnswer === correctAnswer;

  return (
    <li className={`w-[600px] ${notFirstItem && "mt-[40px]"}`}>
      <div
        className={`w-full h-[40px] ${
          matchedAnswers ? "bg-[green]" : "bg-[red]"
        } bg-[#ab2626]`}
      />
      <QuestionHeadline question={question} quote={quote} />
      <p className="mt-[10px] text-orange">Your answer: {userAnswer}</p>
      <p className="mt-[10px] text-green">Correct answer: {correctAnswer}</p>
    </li>
  );
}
