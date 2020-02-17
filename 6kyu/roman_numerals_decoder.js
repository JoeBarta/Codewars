// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Example:

// solution('XXI'); // should return 21

function solution(roman){
  if (roman.length > 2) {
    const numbers = roman.split('').map(roman => {
      return ROMAN_NUMERALS[roman]
    })

    return numbers.reduce((acc, cur) => acc + cur, 0)
  }
  
  return ROMAN_NUMERALS[roman]
}

// forgot charCodeAt() exists 
const ROMAN_NUMERALS = {
  I: 1,
  IV: 4,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
