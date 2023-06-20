let b = ' amazing'; //variable js
let c = 'hello you are';

console.log(40 + 30 + 4); //will print answer to console
//console can only store or print 5 values
console.log(c, b);
console.log(c + b);

alert('hello') //will print hello to console

let a = prompt('enter a number'); //promt will ask user to enter a number and data will be stored in variable named a
console.log(typeof a); //will show data type of a 
//the value entered is always stored as string

//ctrl +/ to comment out code para

// \n\ for new line
console.log('String with \n\ multiple \n\ lines');
console.log(`String
multiple
lines`);

/*
there have been various versions of javascript
and its backward compatible ie the code written in 1997 will still be executed in the modern uodated browser
as in new versions only new things are added nothing is removed
ECMAscript works on new versions the very first version was ES1
but the code new eslatest version might not be compatible with previous version of browsers and theres no control over what version the client uses
to reduce the above compatiblity error make sure while developing th web app u use the latest version of chrome
and during production use babel to transform ur code to es5 or previous versions so they would run on previous browsers
es5 is supported in all browsers previous versions es6 compatibloty table can help decide what version to use for best result
most browers implement features of java script before its release even
when a feature is at stage three, browsers can be pretty sure it will eventually pass to stage four.
And so they're gonna start implementing that featurewhile still in stage three.
*/

//alt+up to move a line up
//select and press ctrl+d and whateveru change will change in all the code eg name of variable