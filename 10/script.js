// Equality Operators: == vs. ===

const age = 18; //equates variable to value
if (age === 18) console.log('=== worked');
//=== is strict operator it only gives true value when both side are exactly same

const age2 = '18';
if (age2 === 18) console.log('=== worked');
else console.log('=== failed in 18 in string');
//will give falsy value as age2 is string not a number === wont allow coersion while == will

if (age2 == 18) console.log('== worked with 18 in string');

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
