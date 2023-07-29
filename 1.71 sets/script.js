// SET 1
const set_arr = new Set(["any iterable", "any iterable", "like array , strings", ["array"], { obj: "object can be inside array or iterable but can't without array" }, "obj is not iterable",])
// "any iterable" is repeated but set wont recognise duplicates
// sets are also iterables , and order is irrelevant , prints inside objects brack {}

// SET 2
const set_str = new Set("strings")
console.log(set_str) // will print string spreaded {'s', 't', 'r', 'i', 'n', …} , will ignore 1 's' from 2 's' in string

// SIZE
console.log(set_arr.size) //will print the length not including duplicates
console.log(new Set("strings").size) //will ignore 1 's' from 2 's' in string

// HAS
console.log(set_str.has('t')) //true if 'h' does exist

// ADD
set_arr.add("set wont recognise duplicates"); //will add to set in last
// console.log(set_arr)

// DELETE
set_str.delete('s'); //will delete s from last as well as front
// set_str.add('s') //will add in last
console.log(set_str)

// CLEAR
// set_str.clear() //will clear the set
// console.log(set_str)

// NO INDEX
console.log(set_arr[0]); //undefined as sets dont have indexes
set_arr.add("sets dont have indexes")

// LOOP OVER SET
// set is an iterable with no index but we can loop using for of to access inside elements
for (info of set_arr) console.log(info) //duplicates will be ignored here as well
set_arr.add("no index but we can loop using for of to access inside elements")

console.log(set_arr)
