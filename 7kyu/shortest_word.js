// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
	let word = s.split(' ').reduce((x, y) => (x.length < y.length ? x : y));
	return word.length;
}
