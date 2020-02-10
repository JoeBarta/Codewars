// You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

// isPrime(number)
// Should return boolean true if prime, otherwise false

// getPrimes(start, finish)
// Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). 
// Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.

// Sample Input:

function isPrime(number) {
  if(number < 2) return false
  for(let i = 2; i < number; i++) {
    if(number % i === 00) {
      return false
    }
  }
  return true
}

function getPrimes(start, finish) {
  let arr = []
  if(start > finish && start !== 0) {
    for(let i = finish; i <= start; i++) {
    const prime = isPrime(i)
      if(prime) {
        arr.push(i)
      }
    }
  }
  
  for(let i = start; i <= finish; i++) {
    const prime = isPrime(i)
    if(prime) {
      arr.push(i)
    }
  }

  return arr
}
