const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starter, main) {
    //`the starter is ${this.starterMenu[starter]} and the main course is ${this.mainMenu[main]}`;
    //wil error as destructing cant be done on string we need array
    return [this.starterMenu[starter], this.mainMenu[main]];
  },


  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },


};
//works on all iterable but not object as it is not iterable

const arr2 = [4, 5, 6];
const arr = [1, 2, 3, arr2[0], arr2[1], arr2[2]];
//same as 
const arr3 = [1, 2, 3, ...arr2]                                                           //baically open ups an array from [1 2 3 ] to 1 2 3
console.log(`${arr}
 ${arr3}`);                                                                               //both must be same
const arr4 = [...arr2, 1, 2, 3];                                                          //added first
console.log(arr4);


console.log(...arr4, arr4);


//will error 
// a[categories].push('indian');                                                         
// console.log(a.categories);
const mainMenuUpdate = [...restaurant.mainMenu, 'spegetti'];
console.log(mainMenuUpdate);                                                             //main menu will have all above and an update

const str = 'jonas';
console.log(...str);

const ingredients = ['mushroom', 'olive', 'peperoni'];
restaurant.orderPasta(...ingredients);


let obj = {
  g: 1,
  b: 3,
  c: 'ee',
};
console.log(obj);
let o = { ...obj }; //object prototype
console.log(o);
let objUpdate = { ...obj, Q: 5 }; //updated prototype
console.log(objUpdate,)

const arr5 = [8, 9, 0];
const arr6 = [4, 5, 5];
const obj2 = {
  ...arr3,
  ...obj,
  ...arr5
};
console.log(obj2);





//REST OPERATOR
console.log(...arr4);
const [a, b, c, ...others] = [...arr4];                                                  //...arr4 = 4 5 6 1 2 3 and a=4 b=5 c-6 and others = [1 2 3] as array
console.log(others);
console.log(...others);
const [d,                                                                                //4
  ,                                                                                      //leave 5
  e,                                                                                     //6
  ...left                                                                                //[1 2 3]  the rest operator will only take up left over elemets in end not the ones skipped
  //,  f                                                                                 //will error as no variable can have any value after rest operator as it takes up all values that were left so no value to takeup
] = [...arr4];
//declared above
// const obj = {
//   g: 1,
//   b: 3,
//   c: 'ee',
// };
// const { aa, ...objLeft } = obj; will show all of obj on log for ...objLeft aa must be g matching the g in obj
const { g, ...objLeft } = obj;
console.log(objLeft);

function sum(...input) {
  // console.log(input)
  let w = 0
  for (i = 0; i < 1; i++)
    w += input[i];
  console.log(w)
}
// sum(2, 3, 4, 5)
sum([2, 3, 4])
