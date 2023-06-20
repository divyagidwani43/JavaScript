// Statements and Expressions
//So essentially, an expression is a piece of code that produces a value.
// For example, three plus four is an expression because this is gonna produce a value
// So I don't even mean the entire line of code.]
// What I mean is really just this three plus four.
3 + 4
// The same goes, for example for just any number. But it's still also an expression, this itself will produce a value in JavaScript.
1991
// So true and false and, is an expression, right? Because this will in the end, produce some Boolean value.
true && false && !false

// And the statement is like a bigger piece of code that is executed and which does not produce a value on itself.
// And we can compare this with normal spoken language.
// basically we write our whole programs as a sequence of actions. And these actions are statements.
if (23 > 10) {
    const str = '23 is bigger';
}
// So this statement here doesn't really produce a value it simply declares is variable called STR.
// It performs actions - declaring this variable, but it doesn't produce a value.ends with a semicolon,that's then a statement.
// Now the string '23 is bigger', again is an expression.

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);//is correct but

//let x = if (23 > 10) {
//    const str = '23 is bigger';
//    };                                 //will error
//as if else is statement not expression we can store expressions not statements but can use ternary operator as its seen as expression