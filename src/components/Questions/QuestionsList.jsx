import React, { useState } from "react";
import ResultList from "../Results/ResultList";
import QuestionsOptionsItem from "./QuestionsItems/QuestionsOptionsItem";
import QuestionsInputItem from "./QuestionsItems/QuestionsInputItem";

export default function QuestionsList({
  questions,
  setScore,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const renderedQuestions = (() => {
    if (currentQuestion) {
      const { type, id } = currentQuestion;

      switch (type) {
        case "options":
          return (
            <QuestionsOptionsItem
              key={id}
              handleNextQuestion={handleNextQuestion}
              currentQuestion={currentQuestion}
              setScore={setScore}
              setUserAnswers={setUserAnswers}
              userAnswers={userAnswers}
              questions={questions}
            />
          );
        case "input":
          return (
            <QuestionsInputItem
              key={id}
              currentQuestion={currentQuestion}
              handleNextQuestion={handleNextQuestion}
              setUserAnswers={setUserAnswers}
              userAnswers={userAnswers}
              setScore={setScore}
              questions={questions}
            />
          );
        default:
          return <div>Error: No current question found.</div>;
      }
    } else {
      return <div>Error: No current question found.</div>;
    }
  })();

  const hasMoreQuestions = currentQuestionIndex < questions.length;

  let backgroundImageUrl;

  if (currentQuestion) {
    const { img, category } = currentQuestion;

    if (category === "quotes") {
      backgroundImageUrl = `url(/images/quotes/${img}.jpeg)`;
    }
    if (category === "trivia") {
      backgroundImageUrl = `url(/images/trivia/${img}.jpeg)`;
    }
  }

  return (
    <>
      {hasMoreQuestions ? (
        <ul
          className="mt-[40px] p-[40px] w-[1000px] rounded-[10px] text-center bg-gradient-bg bg-cover"
          style={{
            backgroundImage: backgroundImageUrl || "",
          }}
        >
          {renderedQuestions}
        </ul>
      ) : (
        <ResultList questions={questions} userAnswers={userAnswers} />
      )}
    </>
  );
}
