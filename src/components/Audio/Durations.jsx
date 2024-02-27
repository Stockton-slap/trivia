import React from "react";

export default function Durations({ seconds }) {
  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = padString(date.getUTCSeconds());
    if (hh) {
      return `${hh}:${padString(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const padString = (string) => {
    return ("0" + string).slice(-2);
  };

  return (
    <time dateTime={`P${Math.round(seconds)}S`}>{formatTime(seconds)}</time>
  );
}
