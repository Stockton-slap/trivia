import React from "react";
import QuestionHeadlineItem from "./QuestionHeadlineItem";

export default function QuestionHeadlineList({ quote, withAnswer }) {
  return (
    <ul className="items-start mt-[8px]">
      {quote.map((item, index) => (
        <QuestionHeadlineItem
          key={index}
          item={item}
          index={index}
          withAnswer
        />
      ))}
    </ul>
  );
}
