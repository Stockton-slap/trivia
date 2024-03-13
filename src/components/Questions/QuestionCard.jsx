import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import QuestionHeader from "./QuestionHeader";
import QuestionsList from "./QuestionsList";
import Error from "../Error/Error";
import LoaderSpinner from "../Loader/Loader";

export default function QuestionCard() {
  const [questions, setQuestions] = useState([]);
  const [matchup, setMatchup] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { roundId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        const { rounds } = await response.json();
        const currentRound = rounds[roundId - 1];

        if (currentRound) {
          setQuestions(currentRound.questions || []);
          setMatchup(currentRound.matchup || null);
        }

        setLoading(false);
      } catch (e) {
        setError("Request for question json has failed.");
        setLoading(false);
      }
    };

    fetchData();
  }, [roundId]);

  if (loading) return <LoaderSpinner />;
  if (error) return <Error />;

  return (
    <div
      className={`bg-bg rounded-[10px] p-[20px] m-[20px] flex-center ${
        matchup && "h-[100vh]"
      }`}
    >
      <div className="flex-center">
        <QuestionHeader
          score={score}
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          matchup={matchup}
        />
        <QuestionsList
          questions={questions}
          setScore={setScore}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          matchup={matchup}
        />
      </div>
    </div>
  );
}
