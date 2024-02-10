import React from "react";

export default function QuestionHeadline({ question, quote }) {
  const renderDialogue = () => {
    if (typeof quote === "string" || quote.length === 1) {
      return <p className="mt-[10px] font-semibold italic">"{quote}"</p>;
    } else {
      return (
        <ul className="flex-center items-start">
          {quote.map((item, index) => {
            const isCharacter = item.substring("Character");

            return (
              <li
                key={index}
                className={isCharacter ? "font-semibold" : "italic"}
              >
                {item}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <>
      <h2 className="mt-[20px] font-bold">{question}</h2>
      {renderDialogue()}
    </>
  );
}
