import React from "react";
import BucketItem from "./BucketItem";

export default function BucketList({
  bucket,
  handleBucketItemClick,
  correctChoices,
  activeChoice,
}) {
  return (
    <ul className="border-[1px] rounded-[10px] p-[20px] flex flex-wrap gap-[10px] justify-center flex-1">
      {bucket.map((item, index) => {
        const isCorrect = correctChoices.includes(item);

        return (
          <BucketItem
            item={item}
            key={index}
            handleBucketItemClick={() => {
              if (!isCorrect) return handleBucketItemClick(item);
            }}
            isSelected={activeChoice === item}
            isCorrect={isCorrect}
          />
        );
      })}
    </ul>
  );
}
