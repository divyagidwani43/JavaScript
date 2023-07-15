'use strict';

function calcAge(birth) {
    // can access global var after declaration only (const yearEligible = 2001;)
    let age = 2023 - birth; //wont be accessible as individual even after func call
    var age2 = 2023 - birth + 1; //wont be accessible in global
    let ageEligible = (birth <= yearEligible)
    console.log(`age eligible = ${ageEligible}`);

    function print() {
        let output = `age = ${age} age2= ${age2} age eligible = ${ageEligible} yeareligible = ${yearEligible} birth = ${birth}`
        console.log(output);
    }
    print()
}

// console.log(calcAge(2000))
// will error as yearElible being accessed in function is declared after function is called
// being not accessible to function

const yearEligible = 2001;
// can be accessed anywhere in code as it is GLOBAl

// console.log(age) error
console.log(calcAge(2000))
// console.log(age) error
// console.log(age2) error var will error too
