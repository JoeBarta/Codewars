// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// This is only applicable to the natural numbers.

const digital_root = n => (n -1) % 9 + 1
// n-1 = e.g 16 == 15
// % 9 = modulus for the remainder = 15 - 9 = 6
// 6 + 1 = donzo