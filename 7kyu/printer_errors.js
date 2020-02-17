// You have to write a function printer_error 
// which given a string will output the error rate of the printer as a string representing a rational
//  hose numerator is the number of errors and the denominator the length of the control string. 
// Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// #Examples:

// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

function printerError(s) {
  const unicode = s.split('').map(x => x.charCodeAt())
  const errors = unicode.filter(x => x > 109)
  return `${errors.length}/${unicode.length}`
}
