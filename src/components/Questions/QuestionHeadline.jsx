import React from "react";

export default function QuestionHeadline({ question, quote }) {
  const renderDialogue = () => {
    if (typeof quote === "string" || quote.length === 1) {
      return <p className="mt-[10px] font-semibold italic">"{quote}"</p>;
    } else {
      return (
        <ul className="flex-center items-start mt-[20px]">
          {quote.map((item, index) => {
            const isCharacterI = item.startsWith("Character I:");
            const isCharacterII = item.startsWith("Character II:");

            if (isCharacterI || isCharacterII) {
              const [character, dialogue] = item.split(":");

              return (
                <li key={index}>
                  <span
                    className={
                      isCharacterI || isCharacterII
                        ? "font-bold underline"
                        : "font-italic"
                    }
                  >
                    {`${character}:`}
                  </span>
                  {dialogue}
                </li>
              );
            } else {
              return <li key={index}>{item}</li>;
            }
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
