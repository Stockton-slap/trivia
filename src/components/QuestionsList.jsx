import React, { useState } from "react";
import QuestionsItem from "./QuestionsItem";

export default function QuestionsList({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <ul className="mt-[40px] p-[20px] rounded-[10px] bg-white">
      {currentQuestionIndex < questions.length ? (
        <QuestionsItem
          key={questions[currentQuestionIndex].id}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={questions[currentQuestionIndex]}
        />
      ) : (
        <div>no more questions</div>
      )}
    </ul>
  );
}
