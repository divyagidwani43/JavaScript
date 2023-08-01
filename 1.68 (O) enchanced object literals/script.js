// manipulating object using new features
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
// we can now call openingHours in restraunt by just openingHours


const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // openingHours: {
    //     thu: {
    //         open: 12,
    //         close: 22,
    //     },
    //     fri: {
    //         open: 11,
    //         close: 23,
    //     },
    //     sat: {
    //         open: 0,                                                                                                    // Open 24 hours
    //         close: 24,
    //     },
    // },
    openingHours,    // the property name here is also openingHours same as its declared variable name
    any_property_name_other_than_VN: openingHours,


    // order : function(starterIndex, mainIndex) {
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // },
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};
