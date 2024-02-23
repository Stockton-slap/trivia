import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import QuestionHeader from "./QuestionHeader";
import QuestionsList from "./QuestionsList";
import Error from "../Error/Error";
import LoaderSpinner from "../Loader/Loader";

export default function QuestionCard() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { roundId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        const data = await response.json();

        setQuestions(data.rounds[roundId - 1].questions);
      } catch (e) {
        setError("Request for question json was failed");
      }
    };

    fetchData();
  }, [roundId]);

  if (error) return <Error />;
  if (questions.length === 0) return <LoaderSpinner />;

  return (
    <div className="bg-bg rounded-[10px] p-[20px] m-[20px] flex-center">
      <QuestionHeader
        score={score}
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <QuestionsList
        questions={questions}
        score={score}
        setScore={setScore}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
    </div>
  );
}
