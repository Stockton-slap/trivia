import React from "react";
import evaluateStats from "../../utils/evaluateStats";

export default function QuestionHeader({
  score,
  questions,
  currentQuestionIndex,
  matchup,
}) {
  return (
    <section className="bg-gradient-header rounded-[10px]">
      <div className="flex-center text-white p-[40px]">
        <h1 className="uppercase text-xl font-bold">Movie Quiz</h1>
        <span className="mt-[40px] text-lg font-semibold">
          How good do you know movies?
        </span>

        {currentQuestionIndex >= questions.length && (
          <h2
            className={`text-xl font-bold mt-[40px] ${evaluateStats(
              score,
              4,
              8
            )}`}
          >
            {matchup ? null : `${score} out of ${questions.length}`}
          </h2>
        )}
      </div>
    </section>
  );
}
