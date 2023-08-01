const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
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
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
}



// 1) DESTRUCTURING
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);



//ON ARRAYS
const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
// will leave out one option that lies in b/w pizza and risotto and add all after those in other food
// starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"], mainMenu: ["Pizza", "Pasta", "Risotto"],
console.log(pizza, risotto, otherFood);
// we can just call mainMenu[0] and mainMeny[1] by their names on console log after using rest operator no need of '' either

const [any_name_take_up0_index, xyz, ...theLeft] = restaurant.starterMenu;
// will leave out first two call them anything as array is called by index not name
// starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
console.log('the left', theLeft)
console.log(any_name_take_up0_index, xyz);
// the above name given will take up first 2 index values in array and call be called by name given while destructuring




// ON OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// will leave out sat and take all other in weekday even tho they are declared before sat
// console.log(weekdays);
// will error as sat used below too
const { sat, thu, ...other } = restaurant.openingHours;
// make sure the above sat and thu matched the property names given in opening hours otherwise it wont be recognised 
// as the objects property are known by names we can leave out in any order by just selecting what we wamma leave out 
// here we leave out sat and thu leaving fri in other that lies b/w sat and thu in object but index dont matter in obj
console.log(other)





// 2) FUNCTIONS
const add = function (...numbers) {
    // we can take any amount of arguments
    console.log("array = ", numbers, " spreaded = ", ...numbers)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) console.log("the numbers= ", numbers[i]);
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

// DOUBT CLEAR
function sum([numbers]) {
    // function sum(numbers) {
    console.log('fbhb', numbers)
}
sum([2, 3, 4])
// sum(2,3,4)
// will only recognise 2 not the others and in sum func we cant always define all the input
// as we dk how many input would be given
// wont recognise array either








// CALLING FUNCTION
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
// orderPizza(mainIngredient, ...otherIngredients) {console.log(mainIngredient);console.log(otherIngredients);
