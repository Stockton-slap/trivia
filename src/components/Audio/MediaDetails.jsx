import React from "react";

export default function MediaDetails({ coverImage, songName }) {
  return (
    <div className="bg-gray-800 rounded-t-xl px-5 mt-8 flex-center">
      <div className="flex space-x-4">
        <img
          src={coverImage}
          alt="Musical instruments"
          width="200"
          height="200"
          className="flex-none rounded-lg bg-gray-100"
        />
      </div>
      <span className="font-bold mt-8">{songName}</span>
    </div>
  );
}
