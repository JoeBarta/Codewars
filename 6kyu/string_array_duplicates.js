// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].

function dup(s) {
	return s.map((str) => removeDuplicates(str))
}

function removeDuplicates(str) {
	const charArr = []
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[i + 1]) {
			charArr.push(str[i])
		}
	}
	return charArr.join('')
}

// Nicer syntax
function dup(s) {
	return s.map((word) => {
		return word
			.split('')
			.filter((char, idx, arr) => {
				return char !== arr[idx - 1]
			})
			.join('')
	})
}
