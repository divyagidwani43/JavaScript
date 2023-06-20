//there are 7 data types

//number - has all decimal and non decimal
let age = 45;
let a = 3.4444;

//string - must be in quotes
let name = "divya";
let statement = `hi! I'm ${name} and ${age} years old `;
console.log(name + statement);
// \n\ for new line
console.log('String with \n\ multiple \n\ lines');
console.log(`String
multiple
lines`);

//boolean - either true or false
let answer = true;

//undefined - variable declared but value not assigned
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
