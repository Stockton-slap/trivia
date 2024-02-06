import React from "react";

export default function QuizCard() {
  return (
    <section className="bg-header rounded-[10px]">
      <div className="flex-center text-white p-[40px]">
        <h1 className="uppercase text-xl font-bold">Movie Quiz</h1>
        <span className="mt-[40px] text-lg font-semibold">
          How good do you know movies?
        </span>
      </div>
    </section>
  );
}
