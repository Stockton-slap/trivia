import React, { useEffect, useMemo, useState } from "react";
import BucketList from "./BucketList";
import shuffledArray from "../../utils/shuffledArray";
import transformMatchups from "../../utils/transformMatchups";
import MatchupHeader from "./MatchupHeader";

export default function Matchup({ matchup }) {
  const [bucket1, setBucket1] = useState(null);
  const [bucket2, setBucket2] = useState(null);
  const [bucket3, setBucket3] = useState(null);
  const [correctChoices, setCorrectChoices] = useState([]);

  const allChoicesSortedByBucket = useMemo(() => {
    return transformMatchups(matchup.matchups);
  }, [matchup.matchups]);

  const correctChoicesSortedByBucket = useMemo(() => {
    return transformMatchups(correctChoices);
  }, [correctChoices]);

  const randomizedBucket1 = useMemo(
    () => shuffledArray(allChoicesSortedByBucket[0]),
    [allChoicesSortedByBucket]
  );
  const randomizedBucket2 = useMemo(
    () => shuffledArray(allChoicesSortedByBucket[1]),
    [allChoicesSortedByBucket]
  );
  const randomizedBucket3 = useMemo(
    () => shuffledArray(allChoicesSortedByBucket[2]),
    [allChoicesSortedByBucket]
  );

  useEffect(() => {
    if (bucket1 !== null && bucket2 !== null && bucket3 !== null) {
      const { matchups } = matchup;

      const correctAnswer = matchups.find(
        (matchup) =>
          matchup[0] === bucket1 &&
          matchup[1] === bucket2 &&
          matchup[2] === bucket3
      );

      if (correctAnswer) {
        setCorrectChoices((prev) => [...prev, correctAnswer]);
      }

      setBucket1(null);
      setBucket2(null);
      setBucket3(null);
    }
  }, [bucket1, bucket2, bucket3, matchup]);

  const handleBucketItemClick = (choice, bucketIndex) => {
    if (bucketIndex === 1) {
      setBucket1(choice);
    } else if (bucketIndex === 2) {
      setBucket2(choice);
    } else if (bucketIndex === 3) {
      setBucket3(choice);
    }
  };

  return (
    <>
      <MatchupHeader matchup={matchup} />

      <div className="flex justify-evenly gap-[30px]">
        <BucketList
          bucket={randomizedBucket1}
          handleBucketItemClick={(item) => handleBucketItemClick(item, 1)}
          correctChoices={correctChoicesSortedByBucket[0]}
          activeChoice={bucket1}
        />
        <BucketList
          bucket={randomizedBucket2}
          handleBucketItemClick={(item) => handleBucketItemClick(item, 2)}
          correctChoices={correctChoicesSortedByBucket[1]}
          activeChoice={bucket2}
        />
        <BucketList
          bucket={randomizedBucket3}
          handleBucketItemClick={(item) => handleBucketItemClick(item, 3)}
          correctChoices={correctChoicesSortedByBucket[2]}
          activeChoice={bucket3}
        />
      </div>
    </>
  );
}
