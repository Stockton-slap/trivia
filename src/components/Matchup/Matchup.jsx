import React, { useEffect, useMemo, useState } from "react";
import BucketList from "./BucketList";
import shuffledArray from "../../utils/shuffledArray";

export default function Matchup({ matchup }) {
  const [choices, setChoices] = useState([]);
  const [buckets, setBuckets] = useState({
    bucket1: [],
    bucket2: [],
    bucket3: [],
  });
  const [currentChoice, setCurrentChoice] = useState([]);

  const { bucket1, bucket2, bucket3 } = buckets;
  const randomizedBucket1 = useMemo(() => shuffledArray(bucket1), [bucket1]);
  const randomizedBucket2 = useMemo(() => shuffledArray(bucket2), [bucket2]);
  const randomizedBucket3 = useMemo(() => shuffledArray(bucket3), [bucket3]);

  useEffect(() => {
    const { matchups } = matchup;

    setBuckets(() => {
      let newBucket1 = [];
      let newBucket2 = [];
      let newBucket3 = [];

      matchups.forEach((matchupArr) => {
        newBucket1.push(matchupArr[0]);
        newBucket2.push(matchupArr[1]);
        newBucket3.push(matchupArr[2]);
      });

      return {
        bucket1: newBucket1,
        bucket2: newBucket2,
        bucket3: newBucket3,
      };
    });
  }, [matchup]);

  return (
    <div className="flex justify-evenly gap-[30px]">
      <BucketList
        bucket={randomizedBucket1}
        setCurrentChoice={setCurrentChoice}
        currentChoice={currentChoice}
      />
      <BucketList
        bucket={randomizedBucket2}
        setCurrentChoice={setCurrentChoice}
        currentChoice={currentChoice}
      />
      <BucketList
        bucket={randomizedBucket3}
        setCurrentChoice={setCurrentChoice}
        currentChoice={currentChoice}
      />
    </div>
  );
}

// export default function Matchup({ matchup }) {
//   const [guesses, setGuesses] = useState(20);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [wrongAnswers, setWrongAnswers] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(300);
//   const [gameOver, setGameOver] = useState(false);
//   const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
//   const [buckets, setBuckets] = useState(Array.from({ length: 3 }));

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

//   const handleBucketClick = (bucketNumber, word) => {
//     const currentMovie = buckets[currentMovieIndex];

//     // Check if the selected word is already answered
//     if (buckets[`bucket${bucketNumber}`][currentMovieIndex].startsWith("✅")) {
//       return;
//     }

//     // Check if the selected word is correct
//     const isCorrect = currentMovie[bucketNumber - 1] === word;

//     // Update the state based on the correctness of the selected word
//     if (isCorrect) {
//       setCorrectAnswers(correctAnswers + 1);
//       setScore(score + 1);
//     } else {
//       setWrongAnswers(wrongAnswers + 1);
//     }

//     // Update the buckets with the selected word marked as answered
//     setBuckets((prevBuckets) => {
//       const newBuckets = [...prevBuckets];
//       newBuckets[bucketNumber - 1][currentMovieIndex] = isCorrect
//         ? "✅" + word
//         : word;
//       return newBuckets;
//     });

//     // Decrease the remaining guesses only if the selected word is incorrect
//     if (!isCorrect) {
//       setGuesses((prevGuesses) => Math.max(prevGuesses - 1, 0));
//     }

//     // Move to the next movie if all words for the current movie are answered
//     if (
//       buckets.bucket1.every((word) => word.startsWith("✅")) &&
//       currentMovieIndex < matchup.matchups.length - 1
//     ) {
//       setCurrentMovieIndex(currentMovieIndex + 1);
//       setBuckets({
//         bucket1: Array(20).fill("..."),
//         bucket2: Array(20).fill("..."),
//         bucket3: Array(20).fill("..."),
//       });
//       setGuesses(20);
//     }
//   };

//   const renderBuckets = (bucketNumber) => {
//     return buckets[bucketNumber - 1].map((word, index) => (
//       <button
//         key={index}
//         onClick={() => handleBucketClick(bucketNumber, word)}
//         className={`bucket-word ${
//           word.startsWith("✅") ? "correct" : "unanswered"
//         }`}
//         disabled={word.startsWith("✅")}
//       >
//         {word}
//       </button>
//     ));
//   };

//   // ... (remaining code)

//   const handleReplayClick = () => {
//     // Implement logic to reset the game when replay is clicked.
//     setCurrentMovieIndex(0);
//     setBuckets({
//       bucket1: Array(20).fill("..."),
//       bucket2: Array(20).fill("..."),
//       bucket3: Array(20).fill("..."),
//     });
//     setGuesses(20);
//     setCorrectAnswers(0);
//     setWrongAnswers(0);
//     setScore(0);
//     setTimer(300);
//     setGameOver(false);
//   };
//   return (
//     <div className="flex flex-col items-center">
//       <div>
//         <div>Correct: {correctAnswers}</div>
//         <div>Wrong: {wrongAnswers}</div>
//         <div>Score: {score}/20</div>
//         <div>Time remaining: {timer}s</div>
//         <div>Guesses remaining: {guesses}</div>
//       </div>
//       <div className="flex space-x-4">
//         {/* <div>{renderBuckets("bucket1")}</div>
//         <div>{renderBuckets("bucket2")}</div>
//         <div>{renderBuckets("bucket3")}</div> */}
//       </div>
//       {gameOver && <button onClick={handleReplayClick}>Replay Quiz</button>}
//     </div>
//   );
// }
