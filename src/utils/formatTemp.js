const formatTemp = (temp) => {
  return Math.round((temp - 273.15) * 10) / 10;
};

export default formatTemp;
