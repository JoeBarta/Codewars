// Write a function that takes an array of numbers (integers for the tests) and a target number. 
// It should find two different items in the array that, when added together, give the target value. 
// The indices of these items should then be returned in a tuple like so: (index1, index2).

// twoSum [1, 2, 3] 4 === (0, 2)
function twoSum(numbers, target) {
  const sortedArr = [...numbers].sort((a, b) => a - b)
  let min = 0
  let max = numbers.length - 1
  
  while (min < max) {
    const current = sortedArr[min] + sortedArr[max]
    
    if (current === target) {
      if (sortedArr[min] !== sortedArr[max]) {
         return [numbers.indexOf(sortedArr[min]), numbers.indexOf(sortedArr[max])]
      } else {
         return [numbers.indexOf(sortedArr[min]), numbers.indexOf(sortedArr[max]) + 1]
      }
    } else if (current > target) {
      max--
    } else if (current < target) {
      min++
    }
  }
}
