import React from "react";

export default function MediaDetails({
  coverImage,
  songName,
  category,
  withAnswer,
}) {
  return (
    <div
      className={`bg-gray-800 rounded-t-xl px-5 mt-8 flex-center ${
        withAnswer && category === "excerpts" && "hidden"
      }`}
    >
      <div className="flex space-x-4">
        <img
          src={coverImage}
          alt="Img"
          width="200"
          height="200"
          className="flex-none rounded-lg bg-gray-100"
        />
      </div>
      <span className="font-bold mt-8">{songName}</span>
    </div>
  );
}
