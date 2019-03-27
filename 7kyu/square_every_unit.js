// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// original
function squareDigits(num) {
	let arr = num.toString().split('').map(x => parseInt(x, 10));
	let newArr = arr.map(x => Math.pow(x, 2)).join('');
	return parseInt(newArr, 10);
}

// refactor
function squareDigits(num) {
	return Number(
		num.toString().split('').map(x => x * x).join('')
	);
}
