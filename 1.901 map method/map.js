const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const eurToUsd = 1.1;
const movementUsd = movements.map(function (any) {
    // this function here is callback function
    // console.log(any)
    // console.log(any * eurToUsd)
    return any * eurToUsd
    // this return value will be all the element values of the array movementUsd
})
console.log(movementUsd)
// array of new elements using movements array


// another way to get same
const movementsUsd2 = [];
for (const mov of movements) movementsUsd2.push(mov * eurToUsd)
console.log(movementsUsd2)


// using arrow in map
const movementUsd3 = movements.map((any) => any * eurToUsd)
// this function here is callback function
console.log(movementUsd3)


// 
const array_name = [200, 450, -400, 3000, -650, -130, 70, 1300];
array_name.forEach(function (value, index, array) {
    // we get above in a specified order only
    console.log(`index = ${index}
and value = ${value}
and array =${array}`)
})

//converting to map
const arr2 = array_name.map((el, i, arr) => `${i} & ${el}`)
console.log(arr2)