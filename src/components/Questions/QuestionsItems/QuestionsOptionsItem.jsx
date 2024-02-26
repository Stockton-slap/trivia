import React from "react";
import AnswersList from "../../Answers/AnswersList";
import QuestionHeadline from "../QuestionHeadline/QuestionHeadline";

export default function QuestionsOptionsItem({
  handleNextQuestion,
  currentQuestion,
  setScore,
  setUserAnswers,
  userAnswers,
  questions,
}) {
  return (
    <li
      className={`flex-center h-[500px] gap-[30px] ${
        !currentQuestion.quote && "h-full"
      }`}
    >
      <div className="bg-gradient-question rounded-[30px] p-[12px]">
        <p className="text-white text-xs uppercase">
          Question {currentQuestion.id} of {questions.length}
        </p>
      </div>
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
