// O(n^2) | O(n)
function pascalsTriangle(n) {
  const triangle = []
  triangle.push(1)
  
  for (let i = 1; i < n; i++) {
    const tempRow = triangle[i - 1]
    const currentRow = []
    currentRow.push(1)

    for (let j = 1; j < i; j++) {
      currentRow.push(tempRow[j -1] + tempRow[j])
    }

    currentRow.push(1)
    triangle.push(currentRow)
  }
  
  return [].concat(...triangle)
}

// https://www.codewars.com/kata/5226eb40316b56c8d500030f
// output
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]