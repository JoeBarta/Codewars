// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

const reverseWords = str => str.split(' ').reverse().join(' ').split('').reverse().join('');
