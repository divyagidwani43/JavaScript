//Functions is a piece of code that we can use over and over again like variable but for whole chuncks of code whwn called it executes code inside {}
//console.log() is a function itself but it is pre defined and parameters input is given in ()

function logger() {
    console.log('My name is Jonas');
    return 0;                                                              //return ter,imates the funtion
}
logger();                                                                  // calling function when we do that the code inside {} execute
logger();



//FUNTION WITH PARAMETERS
function fruitProcessor(apples, oranges) {                                 //functions can have different parameters inside () whose value can be input when we call the function
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;   //parameters can be seen as variables of funtion
    return juice;
}
fruitProcessor(5, 3);                                                      //we can input ant value in () to declare variables even prompt
console.log(fruitProcessor(4));                                            // if given only one input other one will be automatically undefined
const appleJuice = fruitProcessor(prompt('apples'), prompt('oranges'));    //will execute function
console.log(appleJuice);                                                   //will print return value

console.log(fruitProcessor(8, 9));                                         //will execute and print return value



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
