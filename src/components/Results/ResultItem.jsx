import React from "react";
import QuestionHeadline from "../Questions/QuestionHeadline";

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
  const isAnswerCorrect = () => {
    switch (type) {
      case "options":
        return answers.find(({ isCorrect }) => isCorrect).answer;
      case "input":
        answer.filter((a) => console.log(a));

        return answer[0];

      default:
    }
  };

  const matchedAnswers = userAnswer === isAnswerCorrect();

  const renderedQuote =
    type === "input"
      ? quote.replace("....", isAnswerCorrect())
      : isAnswerCorrect();

  return (
    <li className={`w-[600px] ${notFirstItem && "mt-[40px]"}`}>
      <div
        className={`w-full h-[40px] ${
          matchedAnswers ? "bg-[green]" : "bg-[red]"
        } bg-[#ab2626]`}
      />
      <QuestionHeadline question={question} quote={quote} />
      <p className="mt-[10px] text-orange">Your answer: {userAnswer}</p>
      <p className="mt-[10px] text-green">Correct answer: {renderedQuote}</p>
    </li>
  );
}
