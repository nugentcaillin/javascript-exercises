const reverseString = function(str) {
	const chars = str.split("");
	let output = "";

	// traverse array of chars in reverse to assemble reversed string 
	
	for (let i = chars.length - 1; i >= 0; i--) {
		output += chars[i];
	}
	return output;
};

// Do not edit below this line
module.exports = reverseString;
