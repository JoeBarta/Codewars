// Write a function, which takes a non-negative integer (seconds) as input 
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  const minutes = seconds / 60
  const SS = Math.floor(seconds % 60)
  const MM = Math.floor(minutes % 60)
  const HH = Math.floor(minutes / 60)
  
  const nSS = String(SS.length === 1) ? String(SS).padStart(2, '0') : SS
  const nMM = String(MM.length === 1) ? String(MM).padStart(2, '0') : MM
  const nHH = String(HH.length === 1) ? String(HH).padStart(2, '0') : HH
  
  return `${nHH}:${nMM}:${nSS}`
}
