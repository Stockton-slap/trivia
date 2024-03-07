const transformMatchups = (matchups) => {
  return matchups.reduce(
    (acc, matchup) => {
      acc[0] = [...acc[0], matchup[0]];
      acc[1] = [...acc[1], matchup[1]];
      acc[2] = [...acc[2], matchup[2]];

      return acc;
    },
    [[], [], []]
  );
};

export default transformMatchups;
