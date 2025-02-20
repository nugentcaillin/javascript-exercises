function getAge(person) {
	const birthYear = person.yearOfBirth;
	const latestYearAlive = person["yearOfDeath"]
		? person["yearOfDeath"]
		: new Date().getFullYear();
	return latestYearAlive - birthYear;
}

const findTheOldest = function(people) {
	return people.reduce((accumulator, current) => {
		if (getAge(current) > getAge(accumulator)) return current;
		return accumulator;
	})
};

// Do not edit below this line
module.exports = findTheOldest;
