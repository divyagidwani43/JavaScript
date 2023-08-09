// callbacks are function in a funcion

movements = [200, 300, 400]
console.log(movements.filter((el) => el > 250))
// ((el) => el > 250) is call back function
// can be arrow regular any

// seperate
const over290 = el => el > 290;
console.log(movements.filter(over290))