import React, { useState } from "react";
import QuestionsItem from "./QuestionsItem";
import ResultList from "./ResultList";

export default function QuestionsList({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <ul className="mt-[40px] p-[60px] rounded-[10px] bg-white">
      {currentQuestionIndex < questions.length ? (
        <QuestionsItem
          key={questions[currentQuestionIndex].id}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={questions[currentQuestionIndex]}
          questions={questions}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
          userAnswers={userAnswers}
        />
      ) : (
        <ResultList
          score={score}
          questions={questions}
          userAnswers={userAnswers}
        />
      )}
    </ul>
  );
}
