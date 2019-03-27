// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized.

const toCamelCase = str => str.replace(/[-_]\w/g, (x) => x[1].toUpperCase())