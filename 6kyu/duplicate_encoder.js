// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word) {
  let string = ''
  let newWord = word.toLowerCase()

  for (let i = 0; i < newWord.length; i++) {
    if (newWord.indexOf(newWord[i]) === newWord.lastIndexOf(newWord[i])) {
      string += "("
    } else {
      string += ")"
    }
  }
  return string
}
