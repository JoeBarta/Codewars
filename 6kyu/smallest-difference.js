// O(n log(n) + m log(m)) Time | O(1) Space
function smallestDiff(arr1, arr2) {
  if(!arr1.length && !arr2.length) return -1

  // JS sort method = O(n log(n))
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  
  if(!arr1.length || !arr2.length) {
    return [...arr1, arr2][0]
  }
  
  // pointers for each array
  let idxOne = 0
  let idxTwo = 0
  let smallestDiff = Infinity
  let currentDiff = Infinity
  
  while (idxOne < arr1.length && idxTwo < arr2.length) {
    const firstNum = arr1[idxOne]
    const secondNum = arr2[idxTwo]
    
    if (firstNum < secondNum) {
      currentDiff = secondNum - firstNum
      idxOne++
    } else if (firstNum > secondNum) {
      currentDiff = firstNum - secondNum
      idxTwo++
    } else {
      // if first and second are equal
      return 0
    }
    if (smallestDiff > currentDiff) {
      smallestDiff = currentDiff
    }
  }
  return smallestDiff
}

// KATA
// https://www.codewars.com/kata/585de79128bc74912d0001c5

// Given two arrays of integers, find the pair of values with the smallest difference and return that difference.
// If both arrays are empty, return -1.
// If one array is empty, return the smallest value from the non-empty array.
// Note: Try to solve this without brute force.

// Example:
//   arr1 = [1, 3, 5, 23, 5]
//   arr2 = [45, 34, 67, 2, 0]
//   Output = 1

// Example empty array:
//   arr1 = [1, 3, 5, 23, 5]
//   arr2 = []
//   Output = 1

// Example two empty arrays:
//   arr1 = []
//   arr2 = []
//   Output = -1
