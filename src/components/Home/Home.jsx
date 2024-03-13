import React from "react";
import Button from "../common/Button";

export default function Home() {
  const handleClick = () => {
    window.location.href = "/quiz";
  };

  return (
    <div>
      <Button
        text="Go to quiz list"
        type="button"
        className="border-[1px]"
        handleClick={handleClick}
      />
    </div>
  );
}
