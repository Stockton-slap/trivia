import React from "react";
import ResultItem from "./ResultItem";

export default function ResultList({ questions, userAnswers }) {
  return (
    <div className="flex-center">
      <ul className="flex-center mt-[40px]">
        {questions.map((questionItem, index) => {
          return (
            <ResultItem
              key={questionItem.id}
              index={index}
              questionItem={questionItem}
              userAnswers={userAnswers}
            />
          );
        })}
      </ul>
    </div>
  );
}
