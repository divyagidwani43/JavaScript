const array = [1, 2, 3]

const new_array_copy = array.map((i) => i + 2) //(i) => i + 2 is arrow func , any type can be used
console.log(new_array_copy) //[3,4,5]
//not on objects
//error on maps


// ANOTHER ARRAY
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// CONVERT ALL VALUES TO USD FROM EURO
const eurToUsd = 1.1;
const movementUsd = movements.map(function (any) {
    // this function here is callback function
    // console.log(any)
    // console.log(any * eurToUsd)
    return any * eurToUsd
    // this return value will be all the element values of the array movementUsd
})
console.log("movementUsd by map ", movementUsd)
// array of new elements using movements array


// ANOTHER WAY TO GET SAME 
const movementsUsd2 = [];
for (const mov of movements) movementsUsd2.push(mov * eurToUsd)
console.log("movementUsd by for OF ", movementsUsd2)


// using ARROW IN MAP
const movementUsd3 = movements.map((any) => any * eurToUsd)
// this function here is callback function
console.log("movementUsd by map in arrow ", movementUsd3)


// CONVERT FOR EACH TO MAP
const array_name = [200, 450, -400, 3000, -650, -130, 70, 1300];
const arr3 = []
array_name.forEach(function (value, index, array) {
    arr3.push(`${index} & ${value}`)
})
console.log("array by for each ", arr3)

//converting to map
const arr2 = array_name.map((el, i, arr) => `${i} & ${el}`)
// map passes value index and array itself in call back function
console.log("array by map ", arr2)
