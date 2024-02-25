import calculateMean from './mean';
import calculateMedian from './median';

const calculateMode = (numbers) => {
  return 3 * calculateMedian(numbers) - 2 * calculateMean(numbers);
};

export default calculateMode;
