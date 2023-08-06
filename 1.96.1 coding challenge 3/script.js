// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous 
challenge, but this time as an arrow function, and using 
chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (dogAge) {
    const humanAge = dogAge.map((el) => el <= 2 ? 2 * el : 16 + el * 4)
    console.log(humanAge)

    const adultDogs = humanAge.filter((el) => el >= 18)
    console.log(adultDogs)

    const adultDogsAvg = adultDogs.reduce((acc, curr) => acc + curr / adultDogs.length, 0)
    console.log(adultDogsAvg)
    console.log((36 + 32 + 76 + 48 + 28) / 5)
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
*/

const calcAverageHumanAge = (dogAge) => adultDogsAvg = dogAge
    .map((el) => el <= 2 ? 2 * el : 16 + el * 4)
    .filter((el) => el >= 18)
    .reduce((acc, curr, i, arr) => { return acc + curr / arr.length }, 0)
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))
