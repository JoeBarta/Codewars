// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  const first = numbers.slice(0,3).toString().split(',').join('')
  const second = numbers.slice(3,6).toString().split(',').join('')
  const third = numbers.slice(6,10).toString().split(',').join('')
  
  return '(' + first + ') ' + second + '-' + third
}