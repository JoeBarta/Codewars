// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. 
// If the two numbers are equal return a or b.

function GetSum ( a,b ) {
  let sum = 0
  
  if ( a === b ) {
    return a
  }
  
  else if ( a < b ) {
    for( let i = a; i <= b; i++ ) {
      sum += i
    }
  }
  
  else if ( b < a ) {
    for( let i = b; i <= a; i++ ) {
      sum += i
    }
  }
  
  return sum
}