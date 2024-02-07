import React from "react";

export default function Home() {
  const handleClick = () => {
    window.location.href = "/quiz";
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="border-[1px]">
        Go to quiz list
      </button>
    </div>
  );
}
