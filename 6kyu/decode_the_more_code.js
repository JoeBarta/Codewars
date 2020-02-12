// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// should return "HEY JUDE"

// ---- NOTE ----
//  Morse code table was preloaded e.g = MORSE_CODE['.--']

decodeMorse = function(morseCode){  
  let decoded = []
  
  const chars = morseCode.split('   ')
  for (let i in chars) {
    let arr = chars[i].split(' ')
    
    for(let j in arr) {
       if (MORSE_CODE[arr[j]]) {
        decoded.push(MORSE_CODE[arr[j]])
      }
    }
    decoded.push(' ')
  }
  
  return decoded.toString().replace(/,/g, '').trim()
}
