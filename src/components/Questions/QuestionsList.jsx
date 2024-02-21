import React, { useState } from "react";
import ResultList from "../Results/ResultList";
import QuestionsOptionsItem from "./QuestionsItems/QuestionsOptionsItem";
import QuestionsInputItem from "./QuestionsItems/QuestionsInputItem";
import QuestionsImageItem from "./QuestionsItems/QuestionsImageItem";

export default function QuestionsList({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
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
            />
          );
        default:
      }
    } else {
      return <div>Error: No current question found.</div>;
    }
  };

  const renderedQuestions = renderQuestionsTypes();

  return (
    <ul className="mt-[40px] px-[40px] pt-[32px] pb-[60px] rounded-[10px] bg-white text-center">
      {currentQuestionIndex < questions.length ? (
        <div className="flex-center">
          <div className="bg-brown rounded-[30px] p-[12px]">
            <p className="text-white text-xs uppercase">
              Question {currentQuestion.id} of {questions.length}
            </p>
          </div>
          {renderedQuestions}
        </div>
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
