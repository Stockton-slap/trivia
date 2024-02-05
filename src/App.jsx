import { useEffect, useState } from "react";
import "./index.css";
import QuestionsList from "./components/QuestionsList";
import QuizCard from "./components/QuizCard";

function App() {
  const [questions, setQuestions] = useState(null);

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
      <QuizCard />
      <QuestionsList questions={questions} />
    </div>
  );
}

export default App;
