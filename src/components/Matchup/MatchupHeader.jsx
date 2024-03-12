import React, { useEffect, useState } from "react";

export default function MatchupHeader({
  matchup,
  guesses,
  correctAnswers,
  wrongAnswers,
}) {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300);
  //   const [gameOver, setGameOver] = useState(false);
  //   const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  //   useEffect(() => {
  //     const countdown = setInterval(() => {
  //       if (timer > 0 && guesses > 0) {
  //         setTimer(timer - 1);
  //       } else {
  //         setGameOver(true);
  //         clearInterval(countdown);
  //       }
  //     }, 1000);

  //     return () => clearInterval(countdown);
  //   }, [timer, guesses]);

  return (
    <div className="flex items-center justify-center gap-10">
      <div>Guesses remaining: {guesses}</div>
      <div>Correct: {correctAnswers}</div>
      <div>Wrong: {wrongAnswers}</div>
      <div>Score: {score}/15</div>
      <div>Timer: {timer}s</div>
      <div className="flex space-x-4">
        {/* <div>{renderBuckets("bucket1")}</div>
        <div>{renderBuckets("bucket2")}</div>
        <div>{renderBuckets("bucket3")}</div> */}
      </div>
      {/* {gameOver && <button onClick={handleReplayClick}>Replay Quiz</button>} */}
    </div>
  );
}
