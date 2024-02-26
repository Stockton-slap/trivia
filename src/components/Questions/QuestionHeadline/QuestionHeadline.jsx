import React from "react";
import QuestionHeadlineList from "./QuestionHeadlineList";
import Image from "../../common/Image";

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
            {quote && `"${quote}"`}
          </p>
        );
      case "input":
        const splitQuote = questionItem.quote.split("\n");

        return (
          !withAnswer && (
            <div className="flex justify-center">
              <QuestionHeadlineList
                quote={splitQuote}
                withAnswer={withAnswer}
              />
            </div>
          )
        );
      case "image":
        const { img1, img2 } = questionItem;

        const imagePath = `/images/screenshots/${img1}.jpeg`;
        const imagePath2 = `/images/screenshots/${img2}.jpeg`;

        return (
          <div
            className={`mt-[20px]  ${
              withAnswer
                ? "flex-center gap-[16px]"
                : "p-[20px] bg-grey rounded-[10px]"
            }`}
          >
            <Image
              imagePath={imagePath}
              className={`w-[600px] h-[300px] ${
                withAnswer ? "object-cover" : ""
              }`}
            />
            {withAnswer && (
              <Image
                imagePath={imagePath2}
                className="w-[600px] h-[300px] object-cover"
              />
            )}
          </div>
        );
      default:
    }
  };

  const renderHeadline = renderHeadlineType();

  return (
    <div
      className={`${withAnswer && "flex flex-col flex-start"} ${
        type === "image" && "items-center"
      }`}
    >
      <h2
        className={`${withAnswer ? "text-sm" : "text-base"} ${
          type === "image" && withAnswer && "mt-[20px]"
        }`}
      >
        {question}
      </h2>

      {renderHeadline}
    </div>
  );
}
