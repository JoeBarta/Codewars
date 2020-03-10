// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

function queueTime(customers, n) {
  let tills = []

  for (let i = 0; i < n; i++) {
    tills[i] = 0
  }
  
  customers.map((customer) => {
    let availableTill = tills.indexOf(Math.min(...tills))
    tills[availableTill] += customer
  }, [])

  return Math.max(...tills)
}
