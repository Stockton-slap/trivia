import React from "react";

export default function Image({ imagePath, className }) {
  return <img src={imagePath} alt="" className={className} />;
}
