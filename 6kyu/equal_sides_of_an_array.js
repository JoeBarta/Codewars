// You are going to be given an array of integers. 
// Your job is to take that array and find an index N 
// where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  return arr.findIndex((element, index) => sum(arr, 0, index) === sum(arr, index + 1))
}

function sum(arr, start, end) {
  return arr.slice(start, end).reduce((acc, cur) => acc + cur, 0)
}
