const map_name = new Map();

// SET
// to add into maps 
map_name.set("key name", "value");

const array_dec = [2, 3]
// we can chain up sets
map_name.set("if we add only one value that takes up key name and other is undefined")
    .set("", "key value cant be nothing it should least be empty string")
    .set("key value cant be reference types but can be when stored in outside variable", "we can add any data type num bool func arr obj", "third value is ignored")
    .set("arr", [22, 33])
    .set([2, 3], "arr") //when called give undefined
    .set(array_dec, "array") //will work , const array_dec = [2, 3]
    .set("obj", { nm: 'a', age: 2 })
    .set("func", function age(year) { return 2023 - year })
    .set("open", 11)
    .set("close", 23)
    .set(true, "open")
    .set("", "repeat key value") //if key values are repeated values in front get overwritten
    .set(false, "close")
    .set(document.querySelector('h1'), "DOM functionalitys can be accessed")
// when we click on key value in console we get redirected to html content in h1
console.log(map_name)


// GET
// we can call value through key names 
console.log(map_name.get(true)) //will fetch the value in front of true
console.log(map_name.get(""))   //declared later value
console.log(map_name.get([2, 3])) //undefined
console.log(map_name.get(array_dec))

// HAS
// will match key values and true if exists a matching value
console.log("will check key values ", map_name.has("obj"))

// DELETE
// will del arr
map_name.delete("arr")
console.log(map_name)

// SIZE
console.log(map_name.size)

// practical use
const time2 = 21;
console.log(map_name.get(time2 > map_name.get("open") && time2 < map_name.get("close")))
// (time2 > map_name.get("open") && time2 < map_name.get("close")) is true so value front of true key value will be printed

// CLEAR
// map_name.clear();
// console.log(map_name)