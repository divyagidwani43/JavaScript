const arr = [1, 2, 3, 4, 5]
console.log(arr.sort((a, b) => b - a)) //mutates
console.log(arr)

console.log(arr.slice())//creates a copy operate on this rather than actual array

console.log(arr.slice().sort((a, b) => a - b))
console.log(arr) //not mutated