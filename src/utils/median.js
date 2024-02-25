const calculateMedian = (numbers) => {
  // Filtering out non-numeric values and convert to numbers
  const numericValues = numbers
    .filter((num) => !isNaN(num))
    .map((num) => parseFloat(num));

  // Sorting the numeric values
  const sorted = numericValues.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length === 0) {
    return 0; // Return 0 if there are no valid numeric values
  }

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
};

export default calculateMedian;
