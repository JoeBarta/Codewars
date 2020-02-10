// Implement the function unique_in_order 
// which takes as argument a sequence and returns a list of items without any elements with the same value 
// next to each other and preserving the original order of elements.

const uniqueInOrder = arr => {
  let result = []
  let last
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== last) {
      result.push(last = arr[i])
    }
  }
  return result
}
