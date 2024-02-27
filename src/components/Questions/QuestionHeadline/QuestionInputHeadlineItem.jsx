import React from "react";

export default function QuestionInputHeadlineItem({
  item,
  index,
  withAnswer,
  category,
}) {
  const isDialogue =
    item.startsWith("Character I:") || item.startsWith("Character II:");
  const [character, dialogue] = item.split(":");
  const isCategoryQuotes = category === "quotes";
  const isCategoryEmojis = category === "emojis";

  return isDialogue ? (
    <li key={index} className="flex items-baseline">
      <p className="text-sm text-start">{`${character}:`}</p>
      <p className="ml-[8px] text-xs">{dialogue}</p>
    </li>
  ) : (
    <li key={index}>
      <p
        className={`text-sm ${isCategoryQuotes && "italic"} ${
          isCategoryEmojis && "text-xl"
        } ${withAnswer ? "text-xs" : "text-sm"}`}
      >
        {isCategoryQuotes && `"${item}"`}
        {isCategoryEmojis && item}
      </p>
    </li>
  );
}
