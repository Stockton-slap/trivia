import React from "react";

export default function BucketItem({
  item,
  handleBucketItemClick,
  isSelected,
  isAlreadyChosen,
}) {
  return (
    <li>
      <button
        type="button"
        className={`px-4 py-2 bg-blue-500 text-white rounded-md border-[1px] ${
          isSelected ? "bg-yellow text-black border-yellow" : ""
        } ${isAlreadyChosen ? "bg-green border-green" : ""}`}
        onClick={handleBucketItemClick}
      >
        {item}
      </button>
    </li>
  );
}
