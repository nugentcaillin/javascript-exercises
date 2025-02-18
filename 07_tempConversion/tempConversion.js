const convertToCelsius = function(farenheit) {
	// formula to convert farenheit to celsius
	// is (farenheit - 32) * 5 /9
	const OFFSET = -32;
	const RATIO = 5/9;

	let celsius = (farenheit + OFFSET) * RATIO;

	// convert to one decimal place
	return +celsius.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
	// formula to convert celsius to farenheit is 
	// celsius * 9/5 + 32
	const OFFSET = 32;
	const RATIO = 9 / 5;
	
	let farenheit = celsius * RATIO + OFFSET;

	// convert to one decimal place
	return +farenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
