let a;
let dd;
const one = function () {
    const b =
        2;
    a = function () {
        console.log(b * 2)
    }
    function c() {
        console.log(b * 3)
    }
    let d = function () {
        console.log(b + 2)
    }
    // must have d declared in global scope to be allowed to call in global scope
    // this can only be called in the function scope itself as it is declared here
    dd = function () {
        console.log(b + 3)
        d()
    }
}

// a(); //error
// to access a() call one() first i.e parent function
// to access function in function -
// call the parent function first AND the name must be declared in global scope
one();
a();
// a has access to b defined in one or parent func 
// c();
// d();
dd();