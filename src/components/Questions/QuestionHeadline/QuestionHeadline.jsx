import React from "react";
import QuestionHeadlineList from "./QuestionHeadlineList";

export default function QuestionHeadline({ questionItem, withAnswer = false }) {
  if (!questionItem) return null;

  const { question, type } = questionItem;

  const renderHeadlineType = () => {
    switch (type) {
      case "options":
        const { quote } = questionItem;
        return (
          <p
            className={`mt-[8px] font-semibold italic ${
              withAnswer ? "text-xs" : "text-sm"
            }`}
          >
            "{quote}"
          </p>
        );
      case "input":
        const splitQuote = questionItem.quote.split("\n");
        return <QuestionHeadlineList quote={splitQuote} withAnswer />;
      case "image":
        const { img1, img2 } = questionItem;

        const imagePath = `/images/screenshots/${img1}.jpeg`;
        const imagePath2 = `/images/screenshots/${img2}.jpeg`;
        return (
          <div className="w-[500px]">
            <img src={imagePath} alt="" />
            {withAnswer && <img src={imagePath2} alt="" />}
          </div>
        );
      default:
    }
  };

  const renderHeadline = renderHeadlineType();

  return (
    <div>
      <h2 className={`mt-[16px] ${withAnswer ? "text-sm" : "text-base"}`}>
        {question}
      </h2>

      {renderHeadline}
    </div>
  );
}
