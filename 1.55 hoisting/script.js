console.log(me);
// console.log(job); error as let declaration
// console.log(year); error as const declaration

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); 
//error as declared using const and is expression so behave like variable
console.log(addArrow);
//undefined as it it arrow so an variable and declared using var 
// console.log(addArrow(2, 3)); error with values in var 

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

// Example
// numproducts = undefined as declared below using var and undefined = falsy so !numproduct=true
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
// var varible is part of window  object function created by js can be accessed by window.x x=variable declared using var
// not same for const and let
console.log(window);
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
