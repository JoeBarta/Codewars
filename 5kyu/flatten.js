// Any nested arrays, no matter how deep, should be flattened into the single array result.
// flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
function flatten(...arr) {
	return arr.reduce((acc, cur) => {
		if (Array.isArray(cur)) {
			acc = acc.concat(flatten(...cur))
		} else {
			acc.push(cur)
		}
		return acc
	}, [])
}
