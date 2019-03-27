// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers.
//  No floats or empty arrays will be passed.

function sumTwoSmallestNumbers(numbers) {  
  let first = numbers.sort((a, b) => a - b).splice(0,2)
  return first.reduce((x, y) => x + y)
};