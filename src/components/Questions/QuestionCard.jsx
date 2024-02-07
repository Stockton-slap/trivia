import React, { useEffect, useState } from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionsList from "./QuestionsList";
import { useParams } from "react-router-dom";

export default function QuestionCard() {
  const [questions, setQuestions] = useState(null);
  const { roundId } = useParams();
  //   console.log(roundId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        const data = await response.json();

        setQuestions(data.questions);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  if (questions === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-bg rounded-[10px] p-[20px] m-[20px]">
      <QuestionHeader />
      <QuestionsList questions={questions} />
    </div>
  );
}
