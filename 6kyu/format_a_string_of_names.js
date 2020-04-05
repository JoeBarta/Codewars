// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names){
  if(!names.length) {
    return ''
  }

  if(names.length > 1) {
    let string = ''
    const last = names.pop()

    for (let i = 0; i < (names.length); i++) {
      if(i !== names.length - 1) {
        string += `${names[i].name}, `
      }
      if(i === names.length - 1) {
        string += `${names[i].name} `
      }
    }
    return `${string}& ${last.name}`
  }
  return names[0].name
}


// top ranked solution using reduce
// function list(names){
//   return names.reduce(function(prev, current, index, array){
//     if (index === 0){
//       return current.name;
//     }
//     else if (index === array.length - 1){
//       return prev + ' & ' + current.name;
//     } 
//     else {
//       return prev + ', ' + current.name;
//     }
//   }, '');
//  }