const removeFromArray = function(arr, ...remove) {
	let output = []

	// only add numbers to output that are not in remove
	outer: for (num of arr) {
		for (removeNum of remove) {
			if (removeNum === num) continue outer;
		}
		output.push(num);
	}
	return output;
};


// Do not edit below this line
module.exports = removeFromArray;
