import React from "react";

export default function QuestionHeadline({ question, quote }) {
  return (
    <>
      <h2 className="mt-[20px] font-bold">{question}</h2>
      <p className="mt-[10px] font-semibold italic">"{quote}"</p>
    </>
  );
}
