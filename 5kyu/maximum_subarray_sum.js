// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

const maxSequence = function(arr) {
  let min = 0
  let acc = 0
  let result = 0

  for(let i = 0; i < arr.length; i++) {
      acc += arr[i]
      min = Math.min(acc, min)
      result = Math.max(result, acc - min)
  }

  return result
}