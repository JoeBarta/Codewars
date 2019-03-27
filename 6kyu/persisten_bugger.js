// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
	//store
	var result = 0;
	// change to string to count chars
	num = num.toString();

	// keep running until less than 1 char
	while (num.length > 1) {
		result++;
		num = num.split('').map(Number).reduce((a, b) => a * b).toString();
	}
	return result;
}
