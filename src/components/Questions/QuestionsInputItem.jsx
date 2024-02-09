import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import QuestionHeadline from "./QuestionHeadline";
import "react-toastify/dist/ReactToastify.css";
import notifyToast from "../../utils/notifyToast";

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

  const { question, quote, answer, id } = questionItem;
  const splitQuote = quote.split("\n");

  const handleAnswerChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim().toLowerCase();

    if (trimmedValue === "") {
      notifyToast();
      return;
    }

    const lowerCaseAnswers = answer.map((item) => item.toLowerCase());

    const isAnswerCorrect = lowerCaseAnswers.includes(trimmedValue);

    setUserAnswers([
      ...userAnswers,
      { id, answer: trimmedValue, isCorrect: isAnswerCorrect },
    ]);

    setScore((prevScore) => (isAnswerCorrect ? prevScore + 1 : prevScore));

    handleNextQuestion();
  };

  return (
    <li className="flex-center">
      <QuestionHeadline question={question} quote={splitQuote} />
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
      <ToastContainer />
    </li>
  );
}
