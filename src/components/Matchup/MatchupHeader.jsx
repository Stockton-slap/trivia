import React from "react";
import evaluateStats from "../../utils/evaluateStats";
import { MdOutlineReplay } from "react-icons/md";
import Button from "../common/Button";
import Timer from "../Timer/Timer";

export default function MatchupHeader({
  guesses,
  correctAnswers,
  wrongAnswers,
  setGuesses,
  setCorrectChoices,
  setWrongAnswers,
  isTimerAndGuessesValid,
  timer,
  setTimer,
}) {
  const percentage = (correctAnswers / 20) * 100;

  const handleReplayClick = () => {
    setTimer(300);
    setGuesses(20);
    setCorrectChoices([]);
    setWrongAnswers(0);
  };

  return (
    <div className="flex justify-center gap-10 bg-yellow py-[20px] rounded-[10px] font-bold">
      {isTimerAndGuessesValid ? (
        <>
          <div className="matchup-text-container">
            <p>GUESSES REMAINING</p>
            <span className="text-lg text-orange">{guesses}</span>
          </div>
          <div className="matchup-text-container">
            <p>CORRECT</p>
            <span className="text-lg">{correctAnswers}</span>
          </div>
          <div className="matchup-text-container">
            <p>WRONG</p>
            <span className="text-lg">{wrongAnswers}</span>
          </div>
        </>
      ) : (
        <>
          <div className="matchup-text-container">
            <p>YOU GOT</p>
            <span className={`text-lg ${evaluateStats(percentage, 35, 70)}`}>
              {percentage}%
            </span>
          </div>
          <div className="matchup-text-container flex-center">
            <p>REPLAY</p>
            <Button
              handleClick={handleReplayClick}
              type="button"
              text={<MdOutlineReplay size={20} color="#fff" />}
              className="bg-orange rounded-[50%] p-[10px] inline-block mt-[5px] hover:bg-hovered transition-all ease-in-out duration-500"
            />
          </div>
        </>
      )}
      <div className="matchup-text-container">
        <p>SCORE</p>
        <span className="text-lg">{correctAnswers}/15</span>
      </div>
      <div className="matchup-text-container">
        <Timer timer={timer} setTimer={setTimer} />
      </div>
      <div className="flex space-x-4"></div>
    </div>
  );
}
