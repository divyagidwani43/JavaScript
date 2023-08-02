// // when we want the function to only run once we use these IIFE
let count = 0
function funcName() {
    count++;
    console.log(`we can call this function as many times as we want. Times run :${count}`)
}
funcName();
funcName();
// funcName() //not adding ; and creating one run func will error

// IIFE - IMMEDIATELY INVOKED FUCTION EXPRESSION - ONE RUN FUNCTION
// regular
(function () {
    console.log(`the function doesn't have a name so can't be called
only way to call it is add () in end and cover function in () to remove error
that can only be done once`)
})();

// arrow
(() => console.log("IIFE arrow function"))();

