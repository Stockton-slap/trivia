import React from "react";

export default function Button({ handleClick, className, text }) {
  return (
    <button type="button" onClick={handleClick} className={className}>
      {text}
    </button>
  );
}
