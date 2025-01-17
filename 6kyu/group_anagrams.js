// input
// ["tsar", "rat", "tar", "star", "tars", "cheese"]

// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]

function groupAnagrams(words) {
	const wordMap = new Map()

	for (let i = 0; i < words.length; i++) {
		const sortedWord = words[i].split('').sort().join('')

		if (wordMap.has(sortedWord)) {
			wordMap.get(sortedWord).push(words[i])
		} else {
			wordMap.set(sortedWord, [words[i]])
		}
	}

	return Array.from(wordMap.values())
}

// OTHER USER SUBMITTED SOLUTIONS
// same thing essentially

// Time O (w * n * log(n))
// space O (w * n)
// w - words
// n - length of the longest word
function groupAnagrams(words) {
	const anagrams = {}
	for (word of words) {
		let sortedWord = word.split('').sort().join('')
		if (sortedWord in anagrams) {
			anagrams[sortedWord].push(word)
		} else {
			anagrams[sortedWord] = [word]
		}
	}
	return Object.values(anagrams)
}
