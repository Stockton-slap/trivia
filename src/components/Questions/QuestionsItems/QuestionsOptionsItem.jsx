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
  const { id } = currentQuestion;

  return (
    <li className={`flex-center h-full gap-[30px]`}>
      <div className="bg-gradient-question rounded-[30px] p-[12px]">
        <p className="text-white text-xs uppercase">
          Question {id} of {questions.length}
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
