import React from "react";
import QuestionHeadlineList from "./QuestionHeadlineList";

export default function QuestionHeadline({ questionItem }) {
  if (!questionItem) return null;

  const { question, type } = questionItem;

  const renderHeadlineType = () => {
    switch (type) {
      case "options":
        const { quote } = questionItem;

        return (
          <p className="mt-[32px] font-semibold italic text-xs">"{quote}"</p>
        );
      case "input":
        const splitQuote = questionItem.quote.split("\n");
        return <QuestionHeadlineList quote={splitQuote} />;
      case "image":
        const { img1 } = questionItem;

        const imagePath = `/images/screenshots/${img1}.jpeg`;
        return (
          <div className="w-[500px]">
            <img src={imagePath} alt="" />
          </div>
        );
      default:
    }
  };

  const renderHeadline = renderHeadlineType();

  return (
    <div>
      <h2 className="mt-[32px] font-bold text-sm">{question}</h2>
      {renderHeadline}
    </div>
  );
}
