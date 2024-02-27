import React from "react";
import Headlines from "./Headlines";

export default function QuestionHeadline({ questionItem, withAnswer = false }) {
  if (!questionItem) return null;

  const { question } = questionItem;

  return (
    <div className={`${withAnswer && "flex flex-col flex-start"} text-center`}>
      <h2
        className={`${withAnswer ? "text-sm" : "text-base"} ${
          withAnswer && "mt-[20px]"
        }`}
      >
        {question}
      </h2>

      <Headlines questionItem={questionItem} withAnswer={withAnswer} />
    </div>
  );
}
