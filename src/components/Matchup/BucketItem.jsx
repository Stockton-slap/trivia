import React from "react";
import Button from "../common/Button";

export default function BucketItem({
  item,
  handleBucketItemClick,
  isSelected,
  isCorrect,
  isTimerAndGuessesValid,
}) {
  return (
    <li>
      <Button
        text={item}
        type="button"
        handleClick={handleBucketItemClick}
        className={`transition-all ease-in-out duration-500 hover:bg-hovered hover:border-hovered px-4 py-2 bg-blue-500 rounded-md border-[1px] ${
          isSelected ? "bg-yellow text-black border-yellow" : "text-white"
        } ${isCorrect ? "bg-green border-green" : ""} ${
          !isTimerAndGuessesValid && "bg-red border-red"
        }`}
      />
    </li>
  );
}
