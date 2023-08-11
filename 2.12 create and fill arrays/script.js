console.log([1, 2, 3, 4])
console.log(new Array(1, 2, 3, 4))

const arr = new Array(3) //3=no of elements
console.log(arr) //empty array of 3 elements

// FILL (M)
console.log(arr.slice().fill('mid value', 1)) //fills index 1 and after same value

arr.fill('first val', 0)
// arr.fill('third val', 2) 
arr.fill('second val', 1)//will overwrite above and fill this data in 2 as well
console.log(arr)
