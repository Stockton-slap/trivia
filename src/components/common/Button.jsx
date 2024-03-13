import React from "react";

export default function Button({
  handleClick = null,
  className,
  text,
  type,
  ref = null,
}) {
  return (
    <button type={type} onClick={handleClick} className={className} ref={ref}>
      {text}
    </button>
  );
}
