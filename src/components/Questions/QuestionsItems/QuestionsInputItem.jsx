import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import QuestionHeadline from "../QuestionHeadline/QuestionHeadline";
import "react-toastify/dist/ReactToastify.css";
import notifyToast from "../../../utils/notifyToast";

export default function QuestionsInputItem({
  currentQuestion,
  handleNextQuestion,
  setUserAnswers,
  userAnswers,
  setScore,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isClickDisabled, setIsClickDisabled] = useState(false);

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const { answer, id } = currentQuestion;

  const handleAnswerChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim().toLowerCase();

    if (isClickDisabled) {
      return;
    }

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
    setIsClickDisabled(true);

    setTimeout(() => {
      handleNextQuestion();
      setIsClickDisabled(false);
    }, 500);
  };

  return (
    <li className="flex-center">
      <QuestionHeadline questionItem={currentQuestion} />
      <form onSubmit={handleAnswerSubmit} className="flex-center">
        <input
          type="text"
          ref={ref}
          value={inputValue}
          onChange={handleAnswerChange}
          className="border rounded-[10px] py-2 px-4 mt-[32px] focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 hover:bg-blue-500 hover:border-orange hover:text-blue duration-300"
        />
        <button
          type="submit"
          className={`btn bg-blue hover:bg-orange hover:text-blue mt-[32px] duration-300 hover:font-semibold ${
            isClickDisabled && "opacity-[0.7]"
          }`}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </li>
  );
}
