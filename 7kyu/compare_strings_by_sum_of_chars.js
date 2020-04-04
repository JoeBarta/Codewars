// Compare two strings by comparing the sum of their values (ASCII character code).

// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

function compare(s1, s2) {
  return (getValue(s1) === getValue(s2))
}

const checkString = string => !string || string.match(/[^a-z]/i) ? '' : string.toUpperCase()

const getValue = string => 
  checkString(string)
  .toUpperCase()
  .split('')
  .reduce((acc, cur) => acc + cur.charCodeAt(), 0)
  