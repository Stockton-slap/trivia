import React, { useEffect, useRef, useState } from "react";
import QuestionHeadline from "./QuestionHeadline";

export default function QuestionsInputItem({
  questionItem,
  handleNextQuestion,
  setUserAnswers,
  userAnswers,
  setScore,
}) {
  const [inputValue, setInputValue] = useState("");

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const { question, quote, answer } = questionItem;

  const handleAnswerChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    const isAnswerCorrect = answer.includes(trimmedValue);

    if (isAnswerCorrect) {
      setUserAnswers([...userAnswers, { trimmedValue, isCorrect: true }]);
    } else {
      setUserAnswers([...userAnswers, { trimmedValue, isCorrect: false }]);
    }

    setScore((prevScore) => (isAnswerCorrect ? prevScore + 1 : prevScore));

    if (trimmedValue !== "") {
      handleNextQuestion();
    }
  };

  return (
    <li className="flex-center">
      <QuestionHeadline question={question} quote={quote} />
      <form onSubmit={handleAnswerSubmit} className="flex-center gap-[20px]">
        <input
          type="text"
          ref={ref}
          value={inputValue}
          onChange={handleAnswerChange}
          className="border rounded-[10px] py-2 px-4 focus:outline-none focus:border-blue-500 focus:bg-blue-100 mt-[16px]"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </li>
  );
}
