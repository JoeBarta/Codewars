// You get an array of numbers, return the sum of all of the positives ones.

const positiveSum = arr => arr.reduce((x, y) => y > 0 ? x + y : x, 0)