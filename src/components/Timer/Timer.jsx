import React, { useEffect } from "react";

export default function Timer({ timer, setTimer }) {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
  }, [timer, setTimer]);

  return (
    <>
      <p>TIMER</p>
      <span className={`text-lg ${timer <= 60 && "text-red"}`}>{`${minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`}</span>
    </>
  );
}
