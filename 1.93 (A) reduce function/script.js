const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
let i = 0
const balance = movements.reduce((acc, arrayValues, index, array) => {
    console.log(`code here run time ${index}: ${acc}`) //first iteration acc = 0 as declared the keeps adding array values as in return statement
    console.log(`arrayValues =   ${arrayValues}`)
    console.log(`index =         ${index}`)
    console.log(`array =         ${array}`)
    return acc + arrayValues
}, 0)


//specified 0 as intial value of acc so acc=0 for first looop
// normally in call back function values are function(val,index,arr)
// acc = short for accumulator = first value if not specified any code befor it will execute array.length times
// arrayValues = values of array one by one exclude the first

console.log(balance)


// ADD ALL VALUES OF ARRAY
const balanceUse = movements.reduce((acc, curr, i, arr) => {
    console.log(`iteration ${i} : ${acc}`)
    return acc + curr
    // }, 0)
}, 100) //first value 100 so adding to array value starts from 100
console.log(balanceUse)

// same using loop
let b = 0;
for (let a = 0; a < movements.length; a++) {
    b += movements[a]
}
console.log(b)



// GET GREATEST VALUE 
console.log("".padEnd(20, "-"))
console.log(movements)
const great = movements.reduce((acc, curr, i) => {
    console.log(acc) //acc=return value
    if (acc > curr) return acc
    else return curr

}, 0)
console.log(great)