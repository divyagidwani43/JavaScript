const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
}

const array_name = [...restaurant.mainMenu, ...restaurant.starterMenu]

console.log('------------------------------------------------------------------------')
for (let i = 0; i < array_name.length; i++) {
    console.log(array_name[i])
}

// same can be done by for of loop 
console.log('------------------------------------------------------------------------')
for (const any_name of array_name) console.log(any_name)

console.log('------------------------------------------------------------------------')
for (const any_name2 of array_name.entries()) console.log(any_name2);
// will print like this (2) [0, 'Pizza'] 
// (2) [1, 'Pasta'] i.e [arrayIndex, value]

console.log(array_name.entries())
console.log(...array_name.entries())
// (2) [0, 'Pizza'] (2) [1, 'Pasta'] (2) [2, 'Risotto'] (2) [3, 'Focaccia'] more...


console.log('------------------------------------------------------------------------')
// for (const any_name2 of array_name.entries()) console.log(any_name2);
// any_name is array that has [arrayIndex, value] any_name[0]=arrayIndex any_name[1]=value 
// then [value here keeps on increasing by one until whole array values are done]
for (const any_name2 of array_name.entries()) console.log(`${any_name2[0] + 1} : ${any_name2[1]}`);
// any_name2[0] + 1 ====indexing will start from 1 as 0=first value and 0+1=1
// any_name2[1] will print values in front of index

console.log('------------------------------------------------------------------------')
// any_name is array that has [arrayIndex, value] so we can destructure it
for (const [index_name, value_name] of array_name.entries()) console.log(`${index_name + 1} : ${value_name}`)

console.log('------------------------------------------------------------------------')
