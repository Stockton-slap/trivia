import React, { useEffect } from "react";
import ResultItem from "./ResultItem";
import { Link } from "react-router-dom";

export default function ResultList({ questions, userAnswers }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div className="flex-center">
        <ul className="flex-center mt-[40px] w-[700px]">
          {questions.map((questionItem, index) => {
            return (
              <ResultItem
                key={questionItem.id}
                index={index}
                questionItem={questionItem}
                userAnswers={userAnswers}
              />
            );
          })}
        </ul>
      </div>
      <Link to="/quiz">
        <button
          type="button"
          className="btn text-white bg-blue hover:bg-orange hover:text-blue mt-[32px] duration-300 hover:font-semibold"
        >
          Back to Quiz Selection
        </button>
      </Link>
    </>
  );
}
