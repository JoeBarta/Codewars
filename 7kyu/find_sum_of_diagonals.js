// Given a square matrix (i.e. an array of subarrays), 
// find the sum of values from the first value of the first array,
// the second value of the second array, 
// the third value of the third array, and so on...

// Examples
// array = [[1, 2],
//          [3, 4]]

// diagonal sum: 1 + 4 = 5

function diagonalSum(matrix){
  let result = []
  
  for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i]
    result.push(array[i])
  }
  
  return result.reduce((acc, cur) => acc + cur)
}
