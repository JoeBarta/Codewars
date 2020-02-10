// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
  const unique = []
  const sortedArr = arr.sort((a, b) => a - b)
  
  for (let i = 0; i < sortedArr.length; i++) {
    if(sortedArr[i] !== sortedArr[+1] && sortedArr[i] !== sortedArr[i-1]) {
      unique.push(sortedArr[i])
    }
  }

  return unique[0]
}