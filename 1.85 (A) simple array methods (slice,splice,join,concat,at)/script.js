/*
methods are functions that we can call on objects --> function attached to objects (OBJECTS = ARRAYS , OBJ )
*/
let arr = ['a', 'b', 'c', 'd']

// SLICE (N-M)
console.log(arr.slice(0, 2))    //just like string we can get fron [0] to [2] index not include [2] include[0]
console.log(arr.slice(2))       //after [2] include [2]
console.log(arr.slice(-3))
console.log(arr.slice(1, -2))   // b/w 1=[1] and -2=[2]

// SPLICE (M)
// same as slice but mutates array
console.log("array =      ", arr)
// console.log("SPLICE", arr.splice(0, 2))          //will mutate original array and remove (0,2) elements
// console.log("SPLICE values = ", arr.splice(2))   //will mutate original array and remove (2) ie after [2] include [2] elements
console.log("SPLICE =     ", arr.splice(-1))        //1 element from last removed
console.log("array now =  ", arr)

// REVERSE (M)
// mutates
arr = ['a', 'b', 'c', 'd']
console.log("RE-ASSIGNED arr ", arr)
console.log("reverse()       ", arr.reverse())
// reverse mutates array i.e changes the main array values to revered ones
console.log("arr now         ", arr)

// CONCAT (N-M)
// joins two arrays arr1.concat(arr2)
let arr2 = ['e', 'f', 'g', 'h']
arr.reverse();
console.log("BEFORE ", arr, arr2)
console.log("CONCAT ", arr.concat(arr2))
console.log("SAME   ", [...arr, ...arr2])  //on preference
console.log("AFTER  ", arr, arr2)

// JOIN (N-M)
console.log(arr.join("--"))
console.log(arr)

// AT METHOD
arr = ['a', 'b', 'c', 'd']
// index
console.log(arr[0])
console.log(arr.at(0))
console.log("jonas".at(1))



// OVERALL
// getting last element
console.log(arr[arr.length - 1])
console.log(arr.slice(-1)[0])           //slice
console.log(arr.at(-1))                 //at - preffered for method chaining and access array from last


