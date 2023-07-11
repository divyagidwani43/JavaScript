let js = 'amazing'; //variable js

console.log(40 + 30 + 4); //will print answer to console
//console can only store or print 5 values

alert('hello') //will print hello to console

let a = prompt('enter a number'); //promt will ask user to enter a number and data will be stored in variable named a
console.log(typeof a); //will show data type of a 
//the value entered is always stored as string

//////////////////////////////////////////
//variables
//ctrl +/ to comment out code para
let js2 = 'amazing';                                //variable keyword let
if (js2 === 'amazing') alert('javascript is FUN!'); //condition
console.log(40 + 30 + 4);                          //will print answer to console

console.log("jonas");

let firstName = "dee";
firstName = "deeee";
console.log(firstName);

//for naming variables camel case is preffered firstNamePerson has NP caps to read easy
//variable name only allows num alpha _ $ and not start from num or be keywords or 
//name is a keyword but doesnt give error but must not be used
//avoid uppercase starting variable name

let $gi = "ihedl";
console.log($gi);

let PI = 3.14;
console.log(PI);

/*Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
Log their values to the console*/
let country = "India";
let continent = "asia";
console.log(country, continent);



//////////////////////
//there are 7 data types

//number
//has all decimal and non decimal
let age = 45;
let a1 = 3.4444;

//string
//must be in quotes
let name = "divya";

//boolean
//either true or false
let answer = true;

//undefined
//variable declared but value not assigned
let students;

//null

//symbol (ES2015)
//defines a unique value

//bigint
//number too large to fit into number type

//javascript is dynamic ie it recognises the type when we enter the varible value and it need not be specified first
//we can assign one varible to 2 data types ie change its data type in code
//variable value decides data type
let age_now = 34;       //number type
age_now = "thirty four"; //string type

true; //it is automatically seen as boolean
344;
console.log(true);
console.log(344);
console.log(333);

// typeof shows us the type of data that value holds
console.log(typeof true);
console.log(typeof age);
let year;
console.log(typeof year);



/////////////////////////////////////
//three ways to declare variables let const var
//var (not preffered) is old way of let and is used in the same way
//let is used to declare variable whose value we can change later
//we can also declare empty variable using let
let age2 = 12;
age2 = 13;
//const is used to define that cant chnage later in code
const year1 = 2023;
//year=322; //will error



//////////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName1 = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).*/

let massMark = 78;
let heightMark = 1.69;
let BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

let massJohn = 78;
let heightJohn = 1.69;
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);




///////////////////////////////////////////
// Strings and Template Literals
const firstName2 = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year3 = 2037;

//is one way to combine string and variable
const jonas = "I'm " + firstName2 + ', a ' + (year3 - birthYear) + ' year old ' + job + '!';
console.log(jonas);

//  ${variable_name} to enter variable and normal written txt will be txt inside ``
const jonasNew = `I'm ${firstName2}, a ${year3 - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// \n\ for new line
console.log('String with \n\
multiple \n\
lines');
console.log(`String
multiple
lines`);
//will gave same outcomes as \n\



//////////////////////////////////
const age4 = 14;
let yearsLeft = 18 - age4;
if (age4 > 18) {
    console.log("can take driving test");
}
else console.log(`not eligible wait ${yearsLeft} years`);

//any variable declared in the if(){} or else{} branckets cant be accessed outside
let birth = 1998;
if (birth <= 2000) {
    let century = 20;
    console.log(century)
}
else {
    let century = 21; //needs redefining
    console.log(century);
}
//    console.log(century); will error



/////////////////////////////////
//we can convert to string to boolean to number only
const a11 = '4656'; //is string of number
console.log(a11 + 12); //will give a as string
console.log(Number(a11) + 12); //will convert the string of number to number 

console.log(Number('nume')); //wont convert a string to number

//similarly
console.log(23 + 23);
console.log(String(23) + 23);


//type coersion is done on its own like when we log string and number the num is utomatically converted to string
console.log('i am ' + 23 + ' years old');
console.log('23' - "3" - 10); //wont coerse
console.log('23' * '3'); //wont either
//coersion will onky take place with + sign and from s number to string

//ex
let n = '1' + 1; //will gibe 11
n = n - 1;
console.log(n);

console.log('15' - '5' - 9 + '3'); //15-5-9=1 then 1 + 3 as string





///////////////////////////////////
// 5 falsy values: 0, '', undefined, null, NaN
//false itself also
//these are the value that produce a false value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));

console.log(Boolean('Jonas'));
console.log(Boolean({})); //{} is empty object a true value

//where is it used->
//const money = 0; //money =0 so one of falsy values ie if statuement not execute and else executes
const money = 100; //money =100 so none of falsy values ie if statuement true and executes
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

//let height =12 
let height = 0;
if (height) { //height =0 ie falsy statement so move to else block
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}




///////////////////////////
// Equality Operators: == vs. ===

const age11 = 18; //equates variable to value
if (age11 === 18) console.log('=== worked');
//=== is strict operator it only gives true value when both side are exactly same

const age22 = '18';
if (age22 === 18) console.log('=== worked');
else console.log('=== failed in 18 in string');
//will give falsy value as age2 is string not a number === wont allow coersion while == will

if (age22 == 18) console.log('== worked with 18 in string');

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

let favourite2 = Number(prompt("What's your 2nd favourite number?")); //will convert it to number type
console.log(favourite2);
console.log(typeof favourite2);

if (favourite2 === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amzaing number!')
} else if (favourite2 === 7) {
    console.log('7 is also a cool number')
} else if (favourite2 === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite2 !== 23) console.log('Why not 23?');




///////////////////////////////////
/*
and 
true only when a and b true

or
false only when both false

not
if a = true then not a = false
*/
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
