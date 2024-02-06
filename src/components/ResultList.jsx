import React from "react";
import ResultItem from "./ResultItem";

export default function ResultList({ score, questions, userAnswers }) {
  return (
    <div className="flex-center">
      <div className="p-[40px] bg-blue rounded-[20px] text-white">
        <h2 className="text-xl font-bold">
          {score} out of {questions.length}
        </h2>
      </div>

      <ul className="flex-center mt-[80px]">
        {questions.map((questionItem, index) => {
          const { id, question, quote, answers } = questionItem;

          return (
            <ResultItem
              key={id}
              index={index}
              question={question}
              quote={quote}
              answers={answers}
              userAnswers={userAnswers}
            />
          );
        })}
      </ul>
    </div>
  );
}
