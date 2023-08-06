const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const deposits = movements.filter((el) => el > 0)
// deposits will only have positive of movements
console.log(deposits)


const withdrawls = movements.filter((el) => el < 0)
console.log(withdrawls)
