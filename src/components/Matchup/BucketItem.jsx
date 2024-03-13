import React from "react";

export default function BucketItem({
  item,
  handleBucketItemClick,
  isSelected,
  isCorrect,
}) {
  return (
    <li>
      <button
        type="button"
        className={`transition-all ease-in-out duration-500 hover:bg-hovered hover:border-hovered px-4 py-2 bg-blue-500 text-white rounded-md border-[1px] ${
          isSelected ? "bg-yellow text-black border-yellow" : ""
        } ${isCorrect ? "bg-green border-green" : ""}`}
        onClick={handleBucketItemClick}
      >
        {item}
      </button>
    </li>
  );
}
