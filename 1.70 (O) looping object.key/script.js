// Looping Objects: Object Keys, Values, and Entries
openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,                                                                                                    // Open 24 hours
        close: 24,
    },
}

// Property NAMES
const properties = Object.keys(openingHours);
// is an array of all property names
// 0:"thu"
// 1: "fri"
// 2: "sat"
console.log('Object.keys - ', properties);

// just like we use for of on array we use it on above array
// for (const day of Object.keys(openingHours)) {
//     // use for of on array created of property names of object
//     console.log(day);
// }


// Property VALUES
const values = Object.values(openingHours);
// array of property values
// [0:{open: 12, close: 22},
// 1:{open: 11, close: 23},
// 2:{open: 0, close: 24}]
console.log('Object.values - ', values);

// Entire object
const entries = Object.entries(openingHours);
console.log('Object.entries - ', entries);
// whole object divided by arrays in array[[prop names , values as it is] , ....]
console.log('openingHours- ', openingHours)

// [key, value]
for (const [day, { open, close }] of Object.entries(openingHours)) {
    console.log('[day, { open, close }] of Object.entries - ', day, open, close)
    // console.log(`On ${day} we open at ${open} and close at ${close}`);
}