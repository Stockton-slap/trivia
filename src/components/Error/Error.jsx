import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-lg font-bold  mb-8">Oops! Something went wrong...</h1>
      <Link to="/" className="text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
}