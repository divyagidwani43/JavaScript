// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

//is one way to combine string and variable
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

//  ${variable_name} to enter variable and normal written txt will be txt inside `` this is a template literal not same as string
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
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

//template literal are console.log and ${}
