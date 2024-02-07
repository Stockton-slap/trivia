import "./index.css";
import QuizList from "./components/QuizList";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import QuestionCard from "./components/QuestionCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizList />} />
      <Route path="/quiz/:roundId" element={<QuestionCard />} />
    </Routes>
  );
}

export default App;
