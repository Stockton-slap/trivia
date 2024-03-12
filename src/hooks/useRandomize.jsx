import { useMemo } from "react";
import shuffledArray from "../utils/shuffledArray";

const useRandomize = (allChoicesSortedByBucket) => {
  const randomizedBuckets = useMemo(
    () => allChoicesSortedByBucket.map((bucket) => shuffledArray(bucket)),
    [allChoicesSortedByBucket]
  );

  return {
    randomizedBucket1: randomizedBuckets[0],
    randomizedBucket2: randomizedBuckets[1],
    randomizedBucket3: randomizedBuckets[2],
  };
};

export default useRandomize;
