// STR
const own = ['john', 'zach', 'aurelia']
console.log(own.sort()) //sort alphabetically

// NUM
const arr = [2, 30, 5, 4, 1]
console.log(arr.sort()) //sort number
// numbers are sorted like words are i.e on the basis of thier first letter 
// here 30 is bigger but 3 is in mid so 30 is in mid to solve this give sort (callback)

// CALLBACK
const sorted = arr.sort((a, b) => {
    // CALLBACK WORKING -> a,b are any 2 consecutive numbers in array eg 450,-400 
    //return < 0   a,b (keep order)
    //return > 0   b,a (switch order)
    // ascending order
    if (a > b) {
        // eg a= 450 , b = -400 we want them to switch places and be b,a so return any value>0
        return 3;
    }
    else if (a < b) {
        return -2;
    }
})
console.log(sorted) //will recognise 30 as last
console.log(arr) //MUTATES

// eg2
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log("ascending", movements.sort((a, b) => a > b ? 1 : -1))
console.log("descending", movements.sort((a, b) => a > b ? -1 : 1))

// ANOTHER WAY TO CALLBACK
//return < 0   a,b (keep order)
//return > 0   b,a (switch order)
// ASCENDING --->    a>b=switch==a-b<0  a<b==keep==a-b>0 
console.log("ascending", arr.sort((a, b) => a - b))
// a-b<0 when a>b --->return<0---->keep
// a-b>0 when a<b --->return>0---->switch
console.log("decending", arr.sort((a, b) => b - a)) 
