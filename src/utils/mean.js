const calculateMean = (numbers) => {
  // Converting each element to a number using parseFloat
  const parsedNumbers = numbers.map((num) => parseFloat(num));

  // Filtering out NaN values
  const validNumbers = parsedNumbers.filter((num) => !isNaN(num));

  // Calculating sum of valid numbers
  const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);

  // Calculating mean only if there are valid numbers
  return validNumbers.length > 0 ? sum / validNumbers.length : 0;
};

export default calculateMean;
