import React, { lazy, Suspense } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import LoaderSpinner from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const QuestionPage = lazy(() => import("./pages/QuestionPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/:roundId" element={<QuestionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
