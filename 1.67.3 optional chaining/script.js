const weekdays = ['thu', 'fri', 'sat'];

const openingHours = {
    [weekdays[0]]: {
        open: 12,
        close: 22,
    },
    [weekdays[1]]: {
        open: 11,
        close: 23,
    },
    [weekdays[2]]: {
        open: 0,                                                                                                    // Open 24 hours
        close: 24,
    },
};
const restaurant = {
    openingHours,
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

}
// Optional Chaining
console.log(restaurant.openingHours.mon);//undefined
// console.log(restaurant.openingHours.mon.open); //error as till mon is undefined

if (restaurant.openingHours //we see if openingHour exist
    && restaurant.openingHours.mon //then if mon is a property there
) {
    console.log(restaurant.openingHours.mon.open);
    // we want to print open hour of mon if above exists
}

if (restaurant.openingHours && restaurant.openingHours.fri) {
    console.log(restaurant.openingHours.fri.open);
}


// same WITH optional chaining
console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours.mon?.open); //return undefined
// print open if restaurant.openingHours.fri exists if not exist it return undefined
// exists here refers to nullish concept only null and undefined come under not exist
console.log(restaurant.openingHours?.mon?.open);
// if restaurant.openingHours doesn't exist the later code wont be read


// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    // const open = restaurant.openingHours[day]?.open;
    // will give undefined when day isnt thu fri sat
    // const open = restaurant.openingHours[day]?.open || 'closed';
    // the above would give close at 0 and '' as well so use nullish ??
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    // will give closed instead of undefined when day isnt thu fri sat
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// if restaurant.order exists then give it 0 1 as input otherwise ??
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');