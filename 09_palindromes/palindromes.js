const palindromes = function (str) {
	
	// trim all non alphanumeric and make lower case
	str = str.toLowerCase().replace(/[^a-z0-9]|\s/g, "");

	// two pointer approach
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str.charAt(left) !== str.charAt(right)) return false;
		left++;
		right--;
	}
	return true;
};


// Do not edit below this line
module.exports = palindromes;
