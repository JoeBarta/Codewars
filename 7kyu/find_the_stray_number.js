// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  const arr =  [...new Set(numbers)]
  const isUniq = numbers.filter(x => x === arr[0])
  
  if(isUniq.length > 1) {
    return arr[1]
  }

  return arr[0]
}
