import React from "react";
import QuestionInputHeadlineItem from "./QuestionInputHeadlineItem";

export default function QuestionInputHeadlineList({
  quote,
  withAnswer,
  category,
}) {
  return (
    <ul className="mt-[30px]">
      {quote.map((item, index) => (
        <QuestionInputHeadlineItem
          key={index}
          item={item}
          index={index}
          withAnswer={withAnswer}
          category={category}
        />
      ))}
    </ul>
  );
}
