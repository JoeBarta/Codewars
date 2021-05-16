// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

function add(a, b) {
	const first = a.split('')
	const second = b.split('')
	let carry = 0
	let result = ''

	while (first.length || second.length || carry) {
		carry += ~~first.pop() + ~~second.pop()
		result = (carry % 10) + result
		carry = carry > 9
	}

	return result
}
