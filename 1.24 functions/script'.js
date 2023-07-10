//Functions is a piece of code that we can use over and over again like variable but for whole chuncks of code whwn called it executes code inside {}
//console.log() is a function itself but it is pre defined and parameters input is given in ()
//function function_name(input){function property}




function logger() {
    console.log('My name is Jonas');
    return 0;                                                              //return ter,imates the funtion
}
logger();                                                                  // calling function when we do that the code inside {} execute
logger();






//FUNTION WITH PARAMETERS
function greet(firstName, lastName) {
    console.log('hello ' + firstName + ' ' + lastName)
}
greet('john');                                                             //lastname will display undefined 
greet('john', 'smith');
//we cann use the valye created by funtion and use it esle where by declaring it or storung it in varibale
let q = greet('fina', 'matthew');



function fruitProcessor(apples, oranges) {                                 //functions can have different parameters inside () whose value can be input when we call the function
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;   //parameters can be seen as variables of funtion
    return juice;
}

fruitProcessor(5, 3);                                                      //we can input ant value in () to declare variables even prompt

console.log(fruitProcessor(4));                                            // if given only one input other one will be automatically undefined

const appleJuice = fruitProcessor(prompt('apples'), prompt('oranges'));    //will execute function
console.log(appleJuice);                                                   //will print return value

console.log(fruitProcessor(8, 9));                                         //will execute and print return value



function sum(a) {
    console.log(a);
};
sum(2, 3);                                                                 //will ignore 3
sum([8, 9]);

sum({ s: 6, h: 8, j: 'w' });
const d = sum({ h: 7, l: 0 });                                             //now we can call the object





//FUNTION DECLARARTION
console.log(calcAge1(1994));                                               //we can call funtion early it will still run perfectly but will error in expression
function calcAge1(birthYeah) {
    return 2037 - birthYeah;                                               //storing directly is better than {const age = 2037-birthyear return age;}
}
const age1 = calcAge1(1991);



//FUNTION EXPRESSION
const calcAge2 = function (birthYeah) {                                    //its an anonymous function or func without name stored in a variable that becomes the function name
    return `the age is ${2037 - birthYeah}`;                               //function(birthYeah) { return 2037 - birthYeah;} it can be seen as expression as it producing a value 
}                                                                          //cant be called early
const age2 = calcAge2(1994);                                               //func stored in varible in short

console.log(age1, age2);





//ARROW FUNTION 
const calcAge3 = birthYeah => 2037 - birthYeah;                            //Arrow functions    is function expression ie cant be called early
console.log(calcAge3(1991));                                               //const calcAge3=    is the variable defining the function expression
const yearsUntilRetirement2 = (birthYeah, firstName) => {                  //birthYeah =>       it is th function parameter and arrow will indicate to return value
    const age = 2037 - birthYeah;                                          //2037 - birthYeah;  this is the return value*/
    const retirement = 65 - age;
    // return retirement;
    if (age >= 0) {
        if (retirement > 0) {
            return `${firstName} retires in ${retirement} years`;
        } else {
            return `${firstName} has already retired 🎉`;
        }
    }
    else return 'error the age entered is wrong';
}
console.log(yearsUntilRetirement2(1991, 'Jonas'));                         //will retire
console.log(yearsUntilRetirement2(1967, 'luca'));                          //has retired
console.log(yearsUntilRetirement2(2066, 'Bob'));                           //wrong age as age will go in -ve





//FUNTION CALLING OTHER FUNCTION 
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples);                            //using above function
    const orangePieces = cutFruitPieces(oranges);

    let juice = `${applePieces} apple, ${orangePieces} orange pieces.`;
    return juice;
}
console.log(fruitProcessor2(2, 3));












//EX
/*fizz. So if the number that we're passing is divisible
by 3, we get fizz. So let me show you here.
If the number is divisible by 3 we get fizz.
Now if the number that we pass is divisible by 5,
we get buzz. So,
divisible by 5 we get buzz.
Now if the number that we're passing is divisible by 3 and 5,
like 15, we get fizz buzz.
So, divisible by
both 3 and 5, we get fizzBuzz.
Now if the number is not divisible by either 3 or
5, we're going to get the same number, so if you pass
let's say 7, we get 7, so
not divisible by 3 or 5, we get
the same input. Now if we don't pass a number here, let's say
we pass a string, we should get this message,*/
function fizzbuzz(input) {
    if (input % 3 === 0 && input % 5 != 0) return 'Fizz'
    else if (input % 5 === 0 && input % 3 !== 0) return 'buzz'
    else if (input % 5 === 0 && input % 3 === 0) return 'FizzBuzz'
    else if (typeof input != 'number') return 'Not a num'
    else if (input % 5 != 0 && input % 3 != 0) return input

}
console.log(fizzbuzz(47));









