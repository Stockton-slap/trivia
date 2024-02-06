import React from "react";
import QuestionHeadline from "./QuestionHeadline";

export default function Result({ score, questions }) {
  return (
    <div className="flex-center">
      <div className="p-[40px] bg-blue rounded-[20px] text-white">
        <h2 className="text-xl font-bold">
          {score} out of {questions.length}
        </h2>
      </div>

      <ul className="flex-center mt-[80px]">
        {questions.map((questionItem, index) => {
          const { id, question, quote, answers } = questionItem;
          const notFirstItem = index !== 0;

          return (
            <li key={id} className={`w-[600px] ${notFirstItem && "mt-[40px]"}`}>
              <div className="w-full h-[40px] bg-[#ab2626]" />
              <QuestionHeadline question={question} quote={quote} />
              <p className="mt-[10px] text-orange">Your answer: </p>
              <p className="mt-[10px] text-green">Correct answer: </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
