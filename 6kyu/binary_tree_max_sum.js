// ou are given a binary tree. Implement the method maxSum which returns the maximal sum of a route from root to leaf. For example, given the following tree:

//     17
//    /  \
//   3   -10
//  /    /  \
// 2    16   1
//          /
//         13
// The method should return 23, since [17,-10,16] is the route from root to leaf with the maximal sum

// solution 1
function maxSum(root) {
  if (root === null || root === undefined) return 0
  return root.value + Math.max(maxSum(root.left), maxSum(root.right))
}

// solution 2
function maxSum(root) {
  if (!root) return 0
  const left = maxSum(root.left)
  const right = maxSum(root.right)
  if (left > right) {
    return root.value + left
  }
  return root.value + right
}
