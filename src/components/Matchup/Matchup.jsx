import React, { useEffect, useState } from "react";
import BucketList from "./BucketList";
import MatchupHeader from "./MatchupHeader";
import useRandomize from "../../hooks/useRandomize";
import useSortedChoicesByBucket from "../../hooks/useSortedChoicesByBucket";

export default function Matchup({ matchup }) {
  const [bucket1, setBucket1] = useState(null);
  const [bucket2, setBucket2] = useState(null);
  const [bucket3, setBucket3] = useState(null);
  const [correctChoices, setCorrectChoices] = useState([]);
  const [guesses, setGuesses] = useState(20);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [isStartCliked, setIsStartClicked] = useState(false);

  const memoizedAllChoicesSortedByBucket = useSortedChoicesByBucket(
    matchup.matchups
  );
  const memoizedCorrectChoicesSortedByBucket =
    useSortedChoicesByBucket(correctChoices);
  const { randomizedBucket1, randomizedBucket2, randomizedBucket3 } =
    useRandomize(memoizedAllChoicesSortedByBucket);

  useEffect(() => {
    const bucketsAreFull =
      bucket1 !== null && bucket2 !== null && bucket3 !== null;

    if (bucketsAreFull) {
      const { matchups } = matchup;

      const correctAnswer = matchups.find(
        (matchup) =>
          matchup[0] === bucket1 &&
          matchup[1] === bucket2 &&
          matchup[2] === bucket3
      );

      if (correctAnswer) {
        setCorrectChoices((prev) => [...prev, correctAnswer]);
      } else {
        setWrongAnswers((prev) => prev + 1);
      }

      setGuesses((prev) => prev - 1);

      setBucket1(null);
      setBucket2(null);
      setBucket3(null);
    }
  }, [bucket1, bucket2, bucket3, correctChoices, matchup]);

  const handleBucketItemClick = (choice, bucketIndex) => {
    if (bucketIndex === 1) {
      setBucket1(choice);
    } else if (bucketIndex === 2) {
      setBucket2(choice);
    } else if (bucketIndex === 3) {
      setBucket3(choice);
    }
  };

  return isStartCliked ? (
    <>
      <MatchupHeader
        guesses={guesses}
        correctAnswers={correctChoices.length}
        wrongAnswers={wrongAnswers}
        setGuesses={setGuesses}
        setCorrectChoices={setCorrectChoices}
        setWrongAnswers={setWrongAnswers}
      />

      <div className="flex justify-evenly gap-[30px] mt-[30px]">
        <BucketList
          bucket={randomizedBucket1}
          handleBucketItemClick={(item) => handleBucketItemClick(item, 1)}
          correctChoices={memoizedCorrectChoicesSortedByBucket[0]}
          activeChoice={bucket1}
        />
        <BucketList
          bucket={randomizedBucket2}
          handleBucketItemClick={(item) => handleBucketItemClick(item, 2)}
          correctChoices={memoizedCorrectChoicesSortedByBucket[1]}
          activeChoice={bucket2}
        />
        <BucketList
          bucket={randomizedBucket3}
          handleBucketItemClick={(item) => handleBucketItemClick(item, 3)}
          correctChoices={memoizedCorrectChoicesSortedByBucket[2]}
          activeChoice={bucket3}
        />
      </div>
    </>
  ) : (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setIsStartClicked(true);
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
