import React, { useMemo } from "react";
import QuestionHeadline from "../Questions/QuestionHeadline/QuestionHeadline";

export default function ResultItem({ index, userAnswers, questionItem }) {
  const notFirstItem = index !== 0;
  const userAnswer = userAnswers[index].answer;

  const { quote, answers, type, answer } = questionItem;

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

  const correctAnswer =
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
      <QuestionHeadline questionItem={questionItem} />
      <p className="mt-[10px] text-bg">Your answer: {userAnswer}</p>
      <p className="mt-[10px] text-green">Correct answer: {correctAnswer}</p>
    </li>
  );
}
