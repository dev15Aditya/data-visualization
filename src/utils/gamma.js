const calculateGamma = (dataPoint) => {
  const { Ash, Hue, Magnesium } = dataPoint;
  return (Ash * Hue) / Magnesium;
};

export default calculateGamma;
