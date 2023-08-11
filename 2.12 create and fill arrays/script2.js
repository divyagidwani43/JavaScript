console.log([1, 2, 3, 4])
console.log(new Array(1, 2, 3, 4))

const arr = new Array(6) //3=no of elements
console.log(arr) //empty array of 3 elements

// FILL
console.log(arr.fill(('value from 2 to 5'), 2, 5)) //2,5 = index 
console.log(arr.fill('value from 1 no end', 1)) //will overwrite previous values if exist
console.log(arr.fill('value from 0 no end'))

// ARRAY FROM
// we call from method on Array i.e a functin not an actual array
console.log(Array.from({ length: 7 }, () => 1))

console.log(Array.from({ length: 7 }, (curr, i) => curr = ++i))

console.log(Array.from({ length: 7 }, (curr, i) => curr = (i * 4) * 2))

console.log(Array.from({ length: 100 }, (curr, i) => curr = Math.round(Math.random() * 6)))

// QUERYSELECTORALL
// we can perform abover operation on this
