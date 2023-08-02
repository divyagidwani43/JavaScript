// PDF PENDING
const secureBooking = function () {
    let variableInSecureBook = 2;

    return function () {
        variableInSecureBook++;
        console.log(`access in return function = ${variableInSecureBook} = variable In Secure Booking `);
    };
};

const booker = secureBooking();
//once secureBooking() is executed it hops off the call stack
booker();
booker();
booker();
// but the variable in securebooking is being updated even after the function is executed
// and it has hopped off the call stack but the inner function can still access the variable in executed secureBooking
// thats due to closure in function
// closure makes sure function remembers all variables it held at its birthplace

document.querySelector(".buy").addEventListener("click", booker)
console.dir(booker);
// check the scopes it has closure of secureBooking that has variable defined in it
// so this has access to variable in secureBooking() cz it is the birthplace
