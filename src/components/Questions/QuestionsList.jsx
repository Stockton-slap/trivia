import React, { useState } from "react";
import ResultList from "../Results/ResultList";
import QuestionsOptionsItem from "./QuestionsItems/QuestionsOptionsItem";
import QuestionsInputItem from "./QuestionsItems/QuestionsInputItem";
import QuestionsImageItem from "./QuestionsItems/QuestionsImageItem";

export default function QuestionsList({
  questions,
  score,
  setScore,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const renderQuestionsTypes = () => {
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
        case "image":
          return (
            <QuestionsImageItem
              key={id}
              handleNextQuestion={handleNextQuestion}
              currentQuestion={currentQuestion}
              setScore={setScore}
              setUserAnswers={setUserAnswers}
              userAnswers={userAnswers}
              questions={questions}
            />
          );
        default:
      }
    } else {
      return <div>Error: No current question found.</div>;
    }
  };

  const renderedQuestions = renderQuestionsTypes();
  const hasMoreQuestions = currentQuestionIndex < questions.length;

  return (
    <ul
      className="mt-[40px] px-[40px] pt-[32px] pb-[60px] rounded-[10px] bg-gradient-bg text-center"
      style={{
        backgroundImage:
          currentQuestion.img &&
          `url(/images/quotes/${currentQuestion.img}.jpeg)`,
      }}
    >
      {hasMoreQuestions ? (
        renderedQuestions
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
