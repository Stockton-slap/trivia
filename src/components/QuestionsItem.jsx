import React from "react";
import AnswersList from "./AnswersList";

export default function QuestionsItem({ handleNextQuestion, currentQuestion }) {
  const { question, quote, answers } = currentQuestion;

  return (
    <>
      <li className="flex flex-col justify-center items-center">
        <h2>{question}</h2>
        <p>{quote}</p>

        <AnswersList
          answers={answers}
          handleNextQuestion={handleNextQuestion}
        />
      </li>
    </>
  );
}
