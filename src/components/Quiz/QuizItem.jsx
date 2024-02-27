import React from "react";
import { Link } from "react-router-dom";

export default function QuizItem({ title, id }) {
  return (
    <Link to={`/quiz/${id}`}>
      <li className="w-[300px] h-[300px] text-lg text-white bg-orange rounded-[10px] p-[20px] flex justify-center items-center text-center">
        <h1>{title}</h1>
      </li>
    </Link>
  );
}
