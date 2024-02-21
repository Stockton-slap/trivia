import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bg">
      <h1 className="text-xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg font-bold mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Back to Home Page
      </Link>
    </div>
  );
}
