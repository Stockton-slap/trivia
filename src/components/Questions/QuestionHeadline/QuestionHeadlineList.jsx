import React from "react";
import QuestionHeadlineItem from "./QuestionHeadlineItem";

export default function QuestionHeadlineList({ quote }) {
  return (
    <ul className="items-start mt-[32px]">
      {quote.map((item, index) => (
        <QuestionHeadlineItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
}
