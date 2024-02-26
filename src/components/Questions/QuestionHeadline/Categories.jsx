import React from "react";
import Image from "../../common/Image";

export default function Categories({ questionItem, withAnswer }) {
  const { quote, img1, img2, category } = questionItem;

  const imagePath = `/images/screenshots/${img1}.jpeg`;
  const imagePath2 = `/images/screenshots/${img2}.jpeg`;

  const renderCategory = (() => {
    switch (category) {
      case "quotes":
      case "trivia":
        return (
          <p
            className={`mt-[8px] font-semibold italic ${
              withAnswer ? "text-xs" : "text-sm"
            }`}
          >
            {quote && `"${quote}"`}
          </p>
        );
      case "screenshots":
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
      case "ost":
        return;

      default:
        break;
    }
  })();

  return renderCategory;
}
