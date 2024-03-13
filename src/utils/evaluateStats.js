const evaluateStats = (stat, firstNum, secondNum) => {
  return stat < firstNum
    ? "text-red"
    : stat >= firstNum && stat < secondNum
    ? "text-grey"
    : "text-green";
};

export default evaluateStats;
