// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:

function generalized(n, cb) {
  if(!cb) {
    return n
  }
  return cb(n)
}

const zero = (cb) => generalized(0, cb) 
const one = (cb) => generalized(1, cb) 
const two = (cb) => generalized(2, cb) 
const three = (cb) => generalized(3, cb) 
const four = (cb) => generalized(4, cb) 
const five = (cb) => generalized(5, cb) 
const six = (cb) => generalized(6, cb) 
const seven = (cb) => generalized(7, cb) 
const eight = (cb) => generalized(8, cb) 
const nine = (cb) => generalized(9, cb) 

const plus = x => (y) => y + x
const minus = x => (y) => y - x
const times = x => (y) => y * x
const dividedBy = x => (y) => Math.floor(y / x)
