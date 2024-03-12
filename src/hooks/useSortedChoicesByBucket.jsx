import { useMemo } from "react";

const useSortedChoicesByBucket = (choices) => {
  const sortedChoicesByBucket = useMemo(() => {
    return choices.reduce(
      (acc, matchup) => {
        acc[0] = [...acc[0], matchup[0]];
        acc[1] = [...acc[1], matchup[1]];
        acc[2] = [...acc[2], matchup[2]];

        return acc;
      },
      [[], [], []]
    );
  }, [choices]);

  return sortedChoicesByBucket;
};

export default useSortedChoicesByBucket;
