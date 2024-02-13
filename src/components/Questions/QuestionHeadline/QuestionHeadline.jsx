import React from "react";
import QuestionHeadlineList from "./QuestionHeadlineList";

export default function QuestionHeadline({ questionItem }) {
  const { quote, question, type } = questionItem;

  const renderType = () => {
    if (!quote) {
      return null;
    }

    switch (type) {
      case "options":
        return (
          <p className="mt-[32px] font-semibold italic text-xs">"{quote}"</p>
        );
      case "input":
        const splitQuote = quote.split("\n");
        return <QuestionHeadlineList quote={splitQuote} />;
      case "image":
        return;
      default:
    }
  };

  return (
    <>
      <h2 className="mt-[32px] font-bold text-sm">{question}</h2>
      {renderType()}
    </>
  );
}
