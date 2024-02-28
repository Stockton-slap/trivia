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

  return isDialogue ? (
    <li key={index} className="flex items-baseline">
      <p className="text-sm text-start">{`${character}:`}</p>
      <p className="ml-[8px] text-xs">{dialogue}</p>
    </li>
  ) : (
    <li key={index}>
      <p
        className={`text-sm ${category === "quotes" && "italic"} ${
          category === "emojis" && "text-xl"
        } ${withAnswer ? "text-xs" : "text-sm"}`}
      >
        {category === "quotes" && `"${item}"`}
        {category === "emojis" && item}
      </p>
    </li>
  );
}
