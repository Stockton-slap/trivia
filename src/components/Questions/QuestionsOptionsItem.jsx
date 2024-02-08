import React from "react";
import AnswersList from "../Answers/AnswersList";
import QuestionHeadline from "./QuestionHeadline";

export default function QuestionsOptionsItem({
  handleNextQuestion,
  currentQuestion,
  setScore,
  setUserAnswers,
  userAnswers,
}) {
  const { question, quote, answers } = currentQuestion;

  return (
    <li className="flex-center">
      <QuestionHeadline question={question} quote={quote} />
      <AnswersList
        answers={answers}
        handleNextQuestion={handleNextQuestion}
        setScore={setScore}
        setUserAnswers={setUserAnswers}
        userAnswers={userAnswers}
      />
    </li>
  );
}
