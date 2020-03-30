// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
  let tower = []
  
  for(let i = 0; i < nFloors; i++) {
    tower.push(Array(nFloors - i).join(' '))
    tower[i] += Array((i + 1) * 2).join('*')
    tower[i] += Array(nFloors - i).join(' ')
  }

  return tower
}
