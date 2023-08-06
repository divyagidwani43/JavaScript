// same using maps - filter one better
const depo = []
const deposits2 = movements.map((el) => el > 0 ? depo.push(el) : '')
console.log(depo)
console.log(deposits2)

// using FOROF
const depo2 = []
for (el of movements) el > 0 ? depo2.push(el) : ''
console.log(depo2)