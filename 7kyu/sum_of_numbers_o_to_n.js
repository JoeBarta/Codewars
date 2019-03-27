// We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:
// 0 1 3 6 10 15 21 28 36 45 55 ....

class SequenceSum {
	// static create a utility function
	// they are called without creating an instance of the class
	static showSequence(n) {
		return n < 0
			? `${n}<0`
			: `${Array.from({ length: n + 1 }, (v, k) => k).join('+')}${n ? ' = ' : '='}${(n * (n + 1)) / 2}`;
	}
}
