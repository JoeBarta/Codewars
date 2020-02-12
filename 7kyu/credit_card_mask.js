// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

function maskify(cc) {
  if (cc.length <= 4) return cc
  
  const lastFour = cc.slice(cc.length - 4)

  let masked = []
  for (let i = 0; i < cc.length - 4; i++) {
    let num = i
    num = '#'
    masked.push(num)
  }
  
  return masked.join('') + lastFour
}
