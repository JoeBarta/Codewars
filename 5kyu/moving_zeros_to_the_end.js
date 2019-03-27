// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = function (arr) {
  let nonZero = arr.filter(x => x !== 0)
  let zeros = arr.filter(x => x === 0)
  return nonZero.concat(zeros)
}