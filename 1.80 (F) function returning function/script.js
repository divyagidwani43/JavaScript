const greet = function (greeting) {
    return function (greets) {
        console.log(greeting, greets)
    }
}

// RETURN VALUE
console.log(greet("hello"))

// ACCESS 1
const greetFn = greet("hello")
// greetFn = ƒ (greets) {console.log(greeting, greets)}
greetFn("Divya")
greetFn("Jonas")

// ACCESS 2
greet("hii")("remo")


// USING ARROW FUNCTION
console.log("USING ARROW FUNCTION".padStart(30, "*").padEnd(40, "*"))
const greetA = (greeting) => function (greets) {
    console.log(greeting, greets)
}

// ACCESS 1
const greetAFn = greetA("hello")
greetAFn("Jonas")
// ACCESS 2
greetA("hii")("remo")
