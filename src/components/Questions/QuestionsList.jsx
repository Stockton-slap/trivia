import React, { useState } from "react";
import ResultList from "../Results/ResultList";
import QuestionsOptionsItem from "./QuestionsItems/QuestionsOptionsItem";
import QuestionsInputItem from "./QuestionsItems/QuestionsInputItem";
import QuestionsImageItem from "./QuestionsItems/QuestionsImageItem";

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
          return <div>Error: No current question found.</div>;
      }
    } else {
      return <div>Error: No current question found.</div>;
    }
  };

  const renderedQuestions = renderQuestionsTypes();
  const hasMoreQuestions = currentQuestionIndex < questions.length;

  let backgroundImageUrl;

  if (currentQuestion && currentQuestion.img) {
    if (currentQuestion.quote) {
      backgroundImageUrl = `url(/images/quotes/${currentQuestion.img}.jpeg)`;
    } else {
      backgroundImageUrl = `url(/images/trivia/${currentQuestion.img}.jpeg)`;
    }
  }

  return (
    <>
      {hasMoreQuestions ? (
        <ul
          className="mt-[40px] p-[40px] rounded-[10px] text-center bg-gradient-bg bg-cover"
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
