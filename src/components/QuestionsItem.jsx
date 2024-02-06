import React from "react";
import AnswersList from "./AnswersList";
import QuestionHeadline from "./QuestionHeadline";

export default function QuestionsItem({
  handleNextQuestion,
  currentQuestion,
  questions,
  setScore,
  setUserAnswers,
  userAnswers,
}) {
  const { id, question, quote, answers } = currentQuestion;

  return (
    <li className="flex-center">
      <div className="bg-[brown] rounded-[30px] p-[20px] font-semibold">
        <p className="text-white text-lg">
          Question {id} of {questions.length}
        </p>
      </div>
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
