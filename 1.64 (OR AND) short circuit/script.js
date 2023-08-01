const restaurant = {
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

// Use ANY data type, return ANY data type, short-circuiting
// SHORT CIRCUIT is stoping evaluation and not executing values after that





console.log('---- OR ----');
// SHORT CIRCUITING IN OR ->
// it will short circuit when it encounter truthy value and execution will stop
// if all are false the last one will be taken

console.log(3 || 'Jonas');       //3
console.log('' || 'Jonas');      // ''= falsy
console.log(true || 0);          //both true so first one
console.log(undefined || null);  //both false so second

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// when js find one true value ans is true 
// and other values are ignored as no matter what they are ans is till true

// restaurant.numGuests=0;
// will cause 10 to return not 0 try any other value the value will be returned
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// if numguests exist it will return numguest but it doesnt so its undefined ie falsy sp 10
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
// does the same but no ternary if numguest has value its true so numguest will return if not then 10
console.log(guests2);









// AND &&
console.log('---- AND ----');
console.log(0 && 'Jonas');
// && short circuits and returns the first falsy value it encounters
console.log(7 && 'Jonas');
// when all truthy the last value is returned

console.log('Hello' && 23 && null && 'jonas');
// short circuit at 1st falsy no evaluate others after

// Practical example
if (restaurant.orderPizza) {
    // will see it above exists
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// same as above if first value is false execution will stop
// if true last value i.e data given will be returned
