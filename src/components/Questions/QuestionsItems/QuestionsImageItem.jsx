import React from "react";
import AnswersList from "../../Answers/AnswersList";
import QuestionHeadline from "../QuestionHeadline/QuestionHeadline";

export default function QuestionsImageItem({
  handleNextQuestion,
  currentQuestion,
  setScore,
  setUserAnswers,
  userAnswers,
}) {
  return (
    <li className="flex-center">
      <QuestionHeadline questionItem={currentQuestion} />
      <AnswersList
        currentQuestion={currentQuestion}
        handleNextQuestion={handleNextQuestion}
        setScore={setScore}
        setUserAnswers={setUserAnswers}
        userAnswers={userAnswers}
      />
    </li>
  );
}
