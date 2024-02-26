import React from "react";
import Categories from "./Categories";
import QuestionInputHeadlineList from "./QuestionInputHeadlineList";

export default function Headlines({ questionItem, withAnswer }) {
  const { type } = questionItem;

  const renderHeadlineType = () => {
    switch (type) {
      case "options":
        return (
          <Categories questionItem={questionItem} withAnswer={withAnswer} />
        );

      case "input":
        const splitQuote = questionItem.quote.split("\n");
        return (
          !withAnswer && (
            <div className="flex justify-center">
              <QuestionInputHeadlineList
                quote={splitQuote}
                withAnswer={withAnswer}
              />
            </div>
          )
        );
      default:
    }
  };

  const renderHeadline = renderHeadlineType();

  return renderHeadline;
}
