import React, { useEffect, useState } from "react";
import QuizItem from "./QuizItem";

export default function QuizList() {
  const [rounds, setRounds] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/questions.json");
        const data = await response.json();

        setRounds(data.rounds);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  if (rounds === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-[40px] bg-bg rounded-[20px]">
      <ul className="p-[40px] flex flex-wrap gap-[20px]">
        {rounds.map(({ id, title }) => (
          <QuizItem key={id} title={title} id={id} />
        ))}
      </ul>
    </div>
  );
}
