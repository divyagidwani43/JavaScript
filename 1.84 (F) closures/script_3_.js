let a;
const one = function () {
    const b = 2;
    a = function () {
        console.log("a in one ", b * 2)
    }
}
function two() {
    const b = 10;
    a = function () {
        console.log("a in two ", b * 2)
    }
}

one();
a();  //a value in one
console.dir(a)

// a() value will be re-assigned after two() is called
two();
a();  //a value in two
console.dir(a)

// SET-TIMEOUT
setTimeout(
    function () { console.log("setTimeout called") } //will be executed
    // , 1000        //in 1 sec after call here load try 10000 for 10 sec notice the console when above is printed
    , 100            //100 mili Seconds
)

// example
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () { //has access to n and wait created in boardPassengers
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, //will execute this after below console log 
        wait * 1000); //wait gives seconds 1000= 1 second


    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; //try commenting out perGroup in function then setTimer will use this one from global declaration as it has access to this as well
// but priority lies inside function only if the variable aint found in function it looks in global
boardPassengers(180, 3);
boardPassengers(1200, 5);
boardPassengers(perGroup, 2); //fist this will be logged to console as func execution time is less
