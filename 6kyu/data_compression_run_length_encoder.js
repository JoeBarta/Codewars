// A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D"
// meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.
function encode(input) {
	let encoded = []
	let currentRunLength = 1

	for (let i = 1; i < input.length; i++) {
		const currentChar = input[i]
		const prevChar = input[i - 1]

		if (currentChar !== prevChar) {
			encoded.push(currentRunLength)
			encoded.push(prevChar)
			currentRunLength = 0
		}
		currentRunLength++
	}

	encoded.push(currentRunLength)
	encoded.push(input[input.length - 1])

	return encoded.join('')
}

// annoyingly no delimiter in this kata's decode input
function decode(input) {
	return input.replace(/(\d+)(\w)/g, replacer)
}

function replacer(match, p1, p2) {
	return p2.repeat(p1)
}
