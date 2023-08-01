// 'use strict';

console.log(this);
// point to window obbject if not in strict mode

// REG FUNC
const a = function () {
    console.log('in function');
    console.log(this);
    // undefined in function
}
a();

// ARROW
const aa = () => {
    console.log('in arrow function');
    console.log(this);
    // window object in arrow function as it dont get its own this keyword defined
    // so it uses this keyword definition of its parent function here thats global i.e window object
}
aa();

// OBJECT
const obj = {
    age: 14,
    des: console.log('inside methods'),

    // REG
    a: function () {
        console.log('in normal function in object');
        console.log(this);
        // this takes up the value of the object as object not because it is called in obj object 
        // but because we call the function using obj.a i.e obj calls the function so this takes up the obj value
        console.log(this.age);
        // so we can use object action on this keyword
    },

    // ARROW
    aa: () => {
        console.log('in arrow function in object');
        console.log(this);
        // window object in arrow function as it dont get its own this keyword defined
    }
}
obj.a()
obj.aa()

// COPYING A FUNC FROM OBJ1 TO OBJ2 WITH THIS KEYWORD
const obj2 = {
    age: 33,
}

obj2.a = obj.a;//equating both function so a function will also be added in obj2
console.log(obj2)
console.log('breakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
obj2.a()
// now this takes up the value of obj2 as it is the one calling it