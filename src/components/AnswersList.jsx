import React from "react";
import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, handleNextQuestion }) {
  return (
    <ul className="grid grid-cols-2 gap-4 justify-items-center items-center">
      {answers.map((answer) => (
        <AnswersItem
          answerItem={answer}
          key={answer.id}
          handleNextQuestion={handleNextQuestion}
        />
      ))}
    </ul>
  );
}
