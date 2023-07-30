const flight = "LH234";
const jonas = {
    name: "jonas",
    passport: 23344563
}

function checkIn(flightNum, passengerDetail) {
    flightNum = "LP211"
    passengerDetail.name = "Mr " + passengerDetail.name

    console.log("checkIN function called ".padStart(36, "-").padEnd(52, "-"))
    console.log("passengerDetail.passport = ", passengerDetail.passport)

    if (passengerDetail.passport === 23344563) {
        console.log("passport OK")
        alert("passport OK")
    }
    else {
        console.log("passport WRONG")
        alert("passport WRONG")
    }
}

// BEFORE func call
console.log(jonas)

// AFTER func call
checkIn(flight, jonas)

//refer to primitive vs reference
console.log(flight) //will show not changed flight
// cz we copied the flight variable value to flightNum and then changed it (i.e it will point to new location where updated value is saved) did not change the original value
console.log("jonas.passport = ", jonas.passport)
console.log(jonas)  //will show changed name that was done in function
// cz the reference types are stored in diff stack and copy made of original points to the same adress as of original
// change made in copy doesnt create another location or stores diff place but is done is that very location where original points to 

const newPassport = function (person) {
    console.log("new passport function called ".padStart(39, "-").padEnd(52, "-"))
    console.log("person.passport input =", person.passport)
    person.passport = Math.trunc(Math.random() * 10000000);
    console.log("person.passport updated = ", person.passport)
}

newPassport(jonas)
console.log("jonas.passport = ", jonas.passport)
checkIn(flight, jonas)
//will have wrong passport or the updated passport that was done
// in new passport function 
console.log(jonas)