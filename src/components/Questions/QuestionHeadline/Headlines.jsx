import React from "react";
import Categories from "./Categories";
import QuestionInputHeadlineList from "./QuestionInputHeadlineList";
import Image from "../../common/Image";

export default function Headlines({ questionItem, withAnswer }) {
  const { type, category, img, quote } = questionItem;

  const renderHeadline = (() => {
    switch (type) {
      case "options":
        return (
          <Categories questionItem={questionItem} withAnswer={withAnswer} />
        );

      case "input":
        const splitQuote = quote.split("\n");
        const imagePath = `/images/emojis/${img}.jpeg`;

        //  const imageCategory =
        //    category === "emojis"
        //      ? "emojis"
        //      : category === "quotes" && "quotes";
        //  const imagePath = `/images/${imageCategory}/${img}.jpeg`;

        return withAnswer ? (
          category === "emojis" ? (
            <div className="flex-center my-[30px]">
              <span className="text-lg">{category === "emojis" && quote}</span>
              <Image
                imagePath={imagePath}
                className="w-[600px] h-[350px] object-contain mt-[30px]"
              />
            </div>
          ) : (
            category === "quotes" && (
              <div className="flex justify-center">
                <QuestionInputHeadlineList
                  quote={splitQuote}
                  withAnswer={withAnswer}
                  category={category}
                />
              </div>
            )
          )
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
