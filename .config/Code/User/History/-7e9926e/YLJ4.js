const convertToCelsius = function(farenheit) {
  return Math.round(((farenheit - 32) * (5/9)) * 10);
};

const convertToFahrenheit = function() {
  return ((celsius * 9/5) + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
