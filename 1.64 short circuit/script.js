const restaurant = {
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// Use ANY data type, return ANY data type, short-circuiting

console.log('---- OR ----');
// SHORT CIRCUITING IN OR ->
// if the first value is truthy it will be evaluated and returned no checking second value
// otherwise truthy one will be taken
// if both are false the second one will be taken

console.log(3 || 'Jonas');       //3
console.log('' || 'Jonas');      // ''= falsy
console.log(true || 0);          //both true so first one
console.log(undefined || null);  //both false so second

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// the first truthy value only in OR as when js find one true value ans is true 
// and other values are ignored as no matter what they are ans is till true

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// AND &&
// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// // Practical example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

