import React from "react";
import AnswersList from "../../Answers/AnswersList";
import QuestionHeadline from "../QuestionHeadline/QuestionHeadline";

export default function QuestionsOptionsItem({
  handleNextQuestion,
  currentQuestion,
  setScore,
  setUserAnswers,
  userAnswers,
}) {
  return (
    <li>
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
