// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  const numArr = numbers.split(' ')
  const even = numArr.filter((num) => num % 2 === 0)
  const odd = numArr.filter((num) => num % 2 !== 0 )
  
  if (odd.length > even.length ) {
    return numArr.indexOf(even[0]) + 1
  }
  
  return numArr.indexOf(odd[0]) + 1
}
