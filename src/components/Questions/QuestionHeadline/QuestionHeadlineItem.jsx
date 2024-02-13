import React from "react";

export default function QuestionHeadlineItem({ item, index }) {
  const isCharacterI = item.startsWith("Character I:");
  const isCharacterII = item.startsWith("Character II:");
  const isDialogue = isCharacterI || isCharacterII;

  if (isDialogue) {
    const [character, dialogue] = item.split(":");

    return (
      <li key={index} className="flex items-center">
        <p
          className={`${
            isCharacterI || (isCharacterII && "font-bold")
          } text-sm text-start`}
        >
          {`${character}:`}
        </p>
        <p className="ml-[8px] text-xs italic">{dialogue}</p>
      </li>
    );
  }

  return (
    <li key={index}>
      <p className="text-sm italic">"{item}"</p>
    </li>
  );
}
