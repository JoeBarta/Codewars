// task

// INPUTS
// fighters = [
//   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)

// TEST CASES
// moves = ['up', 'left', 'right', 'left', 'left']
// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

// My big brain late night attempt
function streetFighterSelection(fighters, position, moves) {
	let upDownPosition = position[0]
	let leftRightPosition = position[1]
	const charactersSelectedArr = []

	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === 'up') {
			if (upDownPosition !== 0) {
				upDownPosition = 0
			}
			charactersSelectedArr.push(fighters[upDownPosition][leftRightPosition])
		}

		if (moves[i] === 'down') {
			if (upDownPosition !== 1) {
				upDownPosition = 1
			}
			charactersSelectedArr.push(fighters[upDownPosition][leftRightPosition])
		}

		if (moves[i] === 'left') {
			if (leftRightPosition - 1 < 0) {
				leftRightPosition = fighters[upDownPosition].length - 1
			} else {
				leftRightPosition = leftRightPosition - 1
			}
			charactersSelectedArr.push(fighters[upDownPosition][leftRightPosition])
		}

		if (moves[i] === 'right') {
			if (leftRightPosition + 1 > fighters[upDownPosition].length - 1) {
				leftRightPosition = 0
			} else {
				leftRightPosition = leftRightPosition + 1
			}
			charactersSelectedArr.push(fighters[upDownPosition][leftRightPosition])
		}
	}

	return charactersSelectedArr
}

// Cleaner solution
// function streetFighterSelection(fighters, position, moves){
//   const result = [];

//   moves.forEach(function(move) {
//     if (move === "up") {
//       position[0] = 0;
//     }
//     else if (move === "down") {
//       position[0] = 1;
//     }
//     else if (move === "right") {
//       position[1] = (position[1] === 5) ? 0 : position[1] + 1;
//     }
//     else if (move === "left") {
//       position[1] = (position[1] === 0) ? 5 : position[1] - 1;
//     }

//     result.push(fighters[position[0]][position[1]]);
//   });

//   return result;
// }
