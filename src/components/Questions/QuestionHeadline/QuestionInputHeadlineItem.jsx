import React from "react";

export default function QuestionInputHeadlineItem({ item, index, withAnswer }) {
  const isCharacterI = item.startsWith("Character I:");
  const isCharacterII = item.startsWith("Character II:");
  const isDialogue = isCharacterI || isCharacterII;

  const [character, dialogue] = item.split(":");

  return isDialogue ? (
    <li key={index} className="flex items-baseline">
      <p className="text-sm text-start">{`${character}:`}</p>
      <p className="ml-[8px] text-xs">{dialogue}</p>
    </li>
  ) : (
    <li key={index}>
      <p className={`text-sm italic ${withAnswer ? "text-xs" : "text-sm"}`}>
        "{item}"
      </p>
    </li>
  );
}
