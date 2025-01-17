// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null

// 10
// | \
// 1  2
// => 13

// 1
// | \
// 0  0
//     \
//      2
// => 3

function sumTheTreeValues(root) {
	if (!root) return 0

	return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
}
