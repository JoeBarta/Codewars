// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  const regex = /^[A-Z]+$/i

  const arr = s1.split('') + s2.split('')
  const unique = [...new Set([...arr])]

  const cleanArr = unique.filter(val => val.match(regex))
  return cleanArr.sort().join('')
}
