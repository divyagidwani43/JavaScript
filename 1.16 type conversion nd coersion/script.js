//we can convert to string to boolean to number only
const a = '4656'; //is string of number
console.log(a + 12); //will give a as string
console.log(Number(a) + 12); //will convert the string of number to number 

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
