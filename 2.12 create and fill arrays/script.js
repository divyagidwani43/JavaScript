console.log([1, 2, 3, 4])
console.log(new Array(1, 2, 3, 4))

const arr = new Array(3) //3=no of elements
console.log(arr) //empty array of 3 elements

// FILL (M)
// arr.fill(2) //fills array with 3 in all elements //MUTATES

console.log(arr.slice().fill('last value', 2)) //fills 2 index i.e last

console.log(arr.slice().fill('mid value', 1)) //fills index 1 and after same value

console.log(arr.slice().fill('first val', 0)) //fills all values starting from 0

arr.fill('first val', 0)
// arr.fill('third val', 2) 
arr.fill('second val', 1)//will overwrite above and fill this data in 2 as well
arr.fill('third val', 2) //series must stay 012 any break will change the values
console.log(arr)
