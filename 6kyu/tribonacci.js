// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, 
// you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

function tribonacci(signature,n){
  if (n == 0) return []
  
  while (signature.length < n) {
    let sum = signature.slice(-3, signature.length).reduce((a, b) => a + b)
    signature.push(sum)
  }

  return signature.slice(0, n)  
}
