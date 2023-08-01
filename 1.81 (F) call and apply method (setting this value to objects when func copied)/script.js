const obj1 = {
    airline: 'luftansa',
    iataCode: 'LH',
    bookings: [],
    // FUNCTION
    book(flightNum, name) {
        console.log(this)
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
            // here this points to the object
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

obj1.book(239, 'Jonas Schmedtmann');
obj1.book(635, 'John Smith');
// console.log(obj1.bookings)

// COPY IN OTHER OBJ
const obj2 = {
    airline: 'eurowings',
    iataCode: 'EW',
    // property name must be same for this keyword from fuction to access it 
    bookings: [],
    // we want the book function here as well it will take up above values and the ones not available will be undefined
    book: obj1.book
};

obj2.book(112, "dee")
// console.log(obj2.bookings)

// WE WANT TO COPY FUNCTION
const book = obj1.book;

// Does NOT work as this keyword needs an obj to point to and book is not object that is used to call the func below that has this keyword
// book(23, 'Sarah Williams');

// CALL METHOD
book.call(obj2, //obj this keyword must point to
    22,         //arguments
    "Sarah Smith")
// console.log(obj2.bookings)

book.call(obj1, 33, "Remo Falcone")
const personData = [obj1, 44, "Fina Falcone"]
book.call(...personData)

// APPLY
// TO USE ARRAY DIRECT WITH NO ...
const personData1 = [44, "Fina Falcone"]
book.apply(obj2, personData1) //obj1 is neccessary outside array

