import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import QuestionHeadline from "../QuestionHeadline/QuestionHeadline";
import "react-toastify/dist/ReactToastify.css";
import notifyToast from "../../../utils/notifyToast";

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

  const { answer, id } = questionItem;

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

    setTimeout(() => {
      handleNextQuestion();
    }, 500);
  };

  return (
    <li className="flex-center">
      <QuestionHeadline questionItem={questionItem} />
      <form onSubmit={handleAnswerSubmit} className="flex-center">
        <input
          type="text"
          ref={ref}
          value={inputValue}
          onChange={handleAnswerChange}
          className="border rounded-[10px] py-2 px-4 mt-[32px] focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 hover:bg-blue-500 hover:border-orange hover:text-blue"
        />
        <button
          type="submit"
          className="btn bg-blue hover:bg-orange hover:text-blue mt-[32px] duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </li>
  );
}
