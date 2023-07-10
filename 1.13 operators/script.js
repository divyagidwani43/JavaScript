// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
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
