'use strict';
const regFunc = function (a, b) {
    console.log(arguments)
    // will have all arguments given in ()
    console.log(a + b)
    return a + b
}
regFunc(2, 3)
regFunc(4, 2, 3, 4, 1)

const arrowFunc = (a, b) => {
    // console.log(arguments)
    // will error
    // doesnt have arguments keyword defined
    return a + b;
}
arrowFunc(1, 2)