'use strict';
let age2 = 7777;
var age = 99999;
const jonas = {
    firstName: "jonas",
    age: 23,

    // REG
    calcAge: function () {
        console.log(this)
        console.log(this.age)
    },

    // ARROW
    greet: () => {
        console.log(this)
        console.log(this.age)
    },

    // REG IN REG FAIL THIS KEYWORD
    func1: function () {
        console.log('func1 done');
        const func2 = function () {
            console.log(this)
            // will be undefined as inside any function call this keyword is undefined
            console.log('func2 done')
        }
        func2();
    },

    // REG IN REG PASS THIS KEYWORD
    func3: function () {
        console.log('func3 and solving above undefined')
        const any_name = this;
        // solution using extra variable 
        const func4 = function () {
            console.log(any_name)
            // use instead this
            console.log('func4 done')
        }
        func4();
    },

    // ARROW IN REG PASS THIS KEYWORD
    func4: function () {
        console.log('func4 and solving above undefined')
        const func4 = () => {
            // arrow function doesnt have this keyword so for this arrow here this would 
            // have parent value i.e of the object
            console.log(this)
            console.log('func4 done')
        }
        func4();
    }
}

jonas.greet()
// arrow function doesnt have this keyword so no matter where it is called it will
// have window object in this keyword and values declared by var will hold a place in
// window object but let and const wont have the same place in window
jonas.calcAge()
// will take up jonas object in this keyword
jonas.func1()
jonas.func3()
jonas.func4()
