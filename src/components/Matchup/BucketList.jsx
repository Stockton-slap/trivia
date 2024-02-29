import React from "react";
import BucketItem from "./BucketItem";

export default function BucketList({
  bucket,
  setCurrentChoice,
  currentChoice,
}) {
  const handleBucketItemClick = (choice) => {
    setCurrentChoice((prevChoices) => {
      if (prevChoices.includes(choice)) {
        return prevChoices.filter((item) => item !== choice);
      } else {
        return [...prevChoices, choice];
      }
    });
  };

  console.log(currentChoice);
  return (
    <ul className="border-[1px] rounded-[10px] p-[20px] flex flex-wrap gap-[10px] justify-center">
      {bucket.map((item, index) => (
        <BucketItem
          item={item}
          key={index}
          handleBucketItemClick={() => handleBucketItemClick(item)}
          isSelected={currentChoice.includes(item)}
        />
      ))}
    </ul>
  );
}
