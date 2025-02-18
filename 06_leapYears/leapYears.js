const leapYears = function(year) {
	// leap years are divisible by 4.
	// if they are divisible by 100, they must also be divisible by 400
	if (year % 100 === 0 && year % 400 !== 0) return false;
	if (year % 4 === 0 ) return true;
	return false;
};

// Do not edit below this line
module.exports = leapYears;
