const luftansa = {
    airline: 'luftansa',
    iataCode: 'LH',
    bookings: [],
    func_name(flightNum, name) {
        console.log(this)
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};
const eurowings = {
    airline: 'eurowings',
    iataCode: 'EW',
    bookings: [],
    func_name: luftansa.func_name
};
const func_name = luftansa.func_name;

const luftansa_eq = func_name.bind(luftansa) //luftansa_eq is now function inside luftansa
console.log(luftansa_eq)
luftansa_eq(33, "Remo Falcone") //obj is set to luftansa using bind

const EU23 = func_name.bind(eurowings, 22) //the object for this keyword and the first argumnent is set in bind
EU23("Nino Falcone") //second argument given
EU23("Kiara Falcone")

// With Event Listeners
luftansa.planes = 300;
luftansa.buyPlane = function () {
    console.log("this = ", this);

    this.planes++;
    console.log(this.planes);
};
// luftansa.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', luftansa.buyPlane);
// this keyword here is the button func in html consoles on click

document
    .querySelector('.poll')
    .addEventListener('click', luftansa.buyPlane.bind(luftansa));
//this point to luftansa now


// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// solidify the second argument to 0.23
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
