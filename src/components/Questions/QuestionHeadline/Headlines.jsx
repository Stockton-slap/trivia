import React from "react";
import Categories from "./Categories";
import QuestionInputHeadlineList from "./QuestionInputHeadlineList";
import Image from "../../common/Image";

export default function Headlines({ questionItem, withAnswer }) {
  const { type, category, img } = questionItem;

  const renderHeadline = (() => {
    switch (type) {
      case "options":
        return (
          <Categories questionItem={questionItem} withAnswer={withAnswer} />
        );

      case "input":
        const splitQuote = questionItem.quote.split("\n");
        const emojisImagePath = `/images/emojis/${img}.jpeg`;

        return withAnswer ? (
          <div className="flex-center my-[30px]">
            <Image
              imagePath={emojisImagePath}
              className="w-[600px] h-[350px] object-contain"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <QuestionInputHeadlineList
              quote={splitQuote}
              withAnswer={withAnswer}
              category={category}
            />
          </div>
        );

      default:
    }
  })();

  return renderHeadline;
}
