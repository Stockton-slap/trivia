import React from "react";
import QuestionInputHeadlineItem from "./QuestionInputHeadlineItem";

export default function QuestionInputHeadlineList({ quote, withAnswer }) {
  return (
    <ul className="mt-[8px]">
      {quote.map((item, index) => (
        <QuestionInputHeadlineItem
          key={index}
          item={item}
          index={index}
          withAnswer={withAnswer}
        />
      ))}
    </ul>
  );
}
