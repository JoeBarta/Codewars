// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

const pigIt = str => str.split(' ').map(x => (x=='?') 
? '?' 
: (x=='!') ? '!'
: x.slice(1) + x.slice(0, 1) + 'ay').join(' ')