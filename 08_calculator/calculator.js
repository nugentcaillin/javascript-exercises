const add = function(a, b) {	
	return a + b;
};

const subtract = function(a, b) {
	return a - b;	
};

const sum = function(arr) {
	return arr.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(arr) {
	return arr.reduce((accumulator, current) => accumulator * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let total = 1;
	for (let i = 2; i <= a; i++) {
		total *= i;
	} 
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
