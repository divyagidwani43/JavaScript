let friends = ['Michael', 'Steven', 'Peter'];                                            //declaring array
console.log(friends);                                                                    // will print (3) i.e length of array than the data

const y = new Array(1991, 1984, 2008, 'twenty twenty two');                              //another way to declare array call y array can have multiple data types in js
console.log(y);

console.log(friends[0]);                                                                 //calling array
console.log(y[2 - 1] - 2);                                                               //y[2-1]=1984 then -2 ==1982

console.log(friends.length);                                                             //will print array length
console.log(friends[friends.length - 1]);                                                //will print last index number

friends[2] = 'Jay';                                                                      //will overwrite [2] const or let no matter
console.log(friends);
friends = ['Bob', 'Alice'];                                                              //will overwrite only when its in let data type const will error
console.log(friends);
// const friendsWithConst = ['Michael', 'Steven', 'Peter'];
//friendsWithConst['bob','wick'];                                                        //will error

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];               //arrays can be called inside arrays ,variables can be input , as well as math expression
console.log(jonas);
console.log(jonas.length);
console.log(jonas[4]);

const calcAge = function (birthYeah) {                                                   //function
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];                                            //values to be pararmeters in funtion as array
const age1 = calcAge(years[0]);                                                          //to use array values as parameters of fucntion
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];   //values of previous array used in another array
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
// friends = ['Bob', 'Alice'];
console.log(friends)
friends.push('Jay');                                                                     // Add elements in last
console.log(friends);
console.log(friends.push('hina'));                                                       //will push hina as well as print the length of array after push   
let a = friends.push('romero');
console.log(a);                                                                          //same can be done like this
console.log(friends);


friends.unshift('John');                                                                 // add in start
console.log(friends);

// Remove elements
friends.pop();                                                                           // Last element will be deleted
console.log(friends);
console.log(friends.pop());                                                              //will delete one element and print the deleted element here well    
const b = friends.pop();
console.log(b);                                                                          //does the same
console.log(friends);

friends.shift();                                                                         // First element will be removed
console.log(friends);

console.log(friends.indexOf('Alice'));                                                   //will display where the element is i.e the index
console.log(friends.indexOf('jay'));                                                     //no such name now it was there before so it will display -1

console.log(friends.includes('jay'));                                                    //false array doesnt include jau
console.log(friends.includes('Bob'));                                                    //true as array has bob
friends.push(23);
console.log(friends.includes('23'));                                                     //it has strict coersion it will display false due to string of 23 not the number
console.log(friends.includes(23));                                                       //will give true 

console.log(friends);
if (friends.includes('Bob')) {
    console.log('You have a friend called bob');
}