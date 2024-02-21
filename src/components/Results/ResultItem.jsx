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

  const isCharacterI = correctAnswer.startsWith("Character I:");
  const isCharacterII = correctAnswer.startsWith("Character II:");
  const isDialogue = isCharacterI || isCharacterII;

  return (
    <li
      className={`w-[600px] ${
        notFirstItem && "mt-[40px]"
      } border-[1px] border-bg overflow-hidden p-[8px] rounded-[10px] text-left`}
    >
      <div
        className={`w-full h-[40px] rounded-[8px] ${
          isAnswerCorrect ? "bg-green" : "bg-red"
        } bg-[#ab2626]`}
      />
      <QuestionHeadline questionItem={questionItem} withAnswer />
      <p className="mt-[10px] text-grey font-bold text-xs">
        Your answer: {userAnswer}
      </p>
      <p className="mt-[10px] text-green font-bold  text-xs">
        Correct answer: {correctAnswer}
      </p>
    </li>
  );
}
