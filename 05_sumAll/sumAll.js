const sumAll = function(bound1, bound2) {
	
	if (bound1 < 0 || bound2 < 0) return "ERROR";

	if (Math.floor(bound1) !== bound1 || 
		Math.floor(bound2) !== bound2) return "ERROR";

	if (typeof bound1 !== "number" || 
		typeof bound2 !== "number" ) return "ERROR";



	
	let start = Math.min(bound1, bound2);
	let end = Math.max(bound1, bound2);
	let sum = 0;

	
	do {
		sum += start;
		start++;
	} while (start <= end);

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
