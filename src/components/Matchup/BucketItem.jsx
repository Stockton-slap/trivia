import React from "react";

export default function BucketItem({
  item,
  handleBucketItemClick,
  isSelected,
  isChosen,
}) {
  return (
    <li>
      <button
        type="button"
        className={`px-4 py-2 bg-blue-500 text-white rounded-md border-[1px] ${
          isSelected ? "bg-green" : ""
        } ${isChosen ? "bg-orange" : ""}`}
        onClick={handleBucketItemClick}
      >
        {item}
      </button>
    </li>
  );
}
