const openingHours={
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,                                                                                                    // Open 24 hours
        close: 24,
    },
}


// MAP 1 - MANUAL ADDED
const map_name = new Map([
    ["key value", "value"],
    [1, "c"],
    [2, "javaScript"],
    [3, {1:"html",2:"css"}],  
])// is an array of arrays
// maps are iterables
console.log(map_name)


// MAP 2 - OBJECT MAPPED NOT ADDED INSIDE A MAP
// const hours = new Map(openingHours) //won't be added like this
// object must be converted to array of arrays
const objToArr = Object.entries(openingHours);
console.log(objToArr) //array of arrays now can be mapped
const ObjToMap = new Map(objToArr)
console.log(ObjToMap) //mapped








// SPREADING A MAP INSIDE ARRAY , CONVERTING MAP TO ARRAY OF ARRAYS
// console.log(map_name)
console.log("SPREAD",[...map_name])

// KEY VALUES - once converted to array it can access all functions of array like keys and values and entries
console.log(...map_name.keys())

// VALUES ONLY
console.log(...map_name.values())

// SAME AS ...MAP_NAME
console.log(...map_name)
console.log(...map_name.entries())






// FOR OF ON MAP
for(const key of map_name)console.log(key) //give all arrays one by one in map
for(const [key,value] of map_name)console.log(key,typeof key,"is equal to",value)

// print only programming lang array
for(const [keyy,val] of map_name){
    (typeof keyy=="number") ? console.log(val) : '';
    // if(typeof keyy=="number")console.log(val)
}




// HOW'S SET DIFF
const set_arr = new Set(["any iterable", "any iterable", "like array , strings", "obj is not iterable",{nm:'edd',age:33}])
console.log(set_arr)
// it cant have obj as value , limited operations , no repeatation while in map repeatation of key overwrites , 
// no key value , can't be called in any way only way is to loop , individual values can't be accessed
