// The Conditional (Ternary) Operator
let age = prompt('enter age');
age >= 18 ?                                     //condition then after ? starts the if block 
    console.log('I like to drink wine 🍷') :   //if condition is true then : to end if block
    console.log('I like to drink water 💧');   //if false the else block is a compulsion


//or
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);


//same as
let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

//ternary operator is an expression not a statement so it can be used in a literal not like if else that is a statement and cant be used in literal
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
