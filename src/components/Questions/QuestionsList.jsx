import React, { useState } from "react";
import ResultList from "../Results/ResultList";
import QuestionsOptionsItem from "./QuestionsOptionsItem";
import QuestionsInputItem from "./QuestionsInputItem";

export default function QuestionsList({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const renderQuestionsVariant = () => {
    if (!currentQuestion) {
      return;
    }

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
            questionItem={currentQuestion}
            handleNextQuestion={handleNextQuestion}
            setUserAnswers={setUserAnswers}
            userAnswers={userAnswers}
            setScore={setScore}
          />
        );
      default:
    }
  };

  return (
    <ul className="mt-[40px] p-[60px] rounded-[10px] bg-white">
      {currentQuestionIndex < questions.length ? (
        <div className="flex-center">
          <div className="bg-[brown] rounded-[30px] p-[20px] font-semibold">
            <p className="text-white text-lg">
              Question {currentQuestion.id} of {questions.length}
            </p>
          </div>
          {renderQuestionsVariant()}
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
