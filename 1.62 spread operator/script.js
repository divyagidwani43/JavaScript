const restaurant = {
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


//UPDATING ARRAY
const arr2 = [4, 5, 6];
const arr = [1, 2, 3, arr2[0], arr2[1], arr2[2]];
//same as 
const arr3 = [1, 2, 3, ...arr2]                                                           //baically open ups an array from [1 2 3 ] to 1 2 3
const arr4 = [...arr2, 1, 2, 3];                                                          //added first
console.log(arr, '\n.', arr3, "\n", arr4);


console.log('...arr4= ', ...arr4, 'arr4= ', arr4);




//UPDATING ARRAY IN OBJECT
const mainMenuUpdate = [...restaurant.mainMenu, 'spegetti'];
console.log(mainMenuUpdate);
//main menu will have all above and an update
// a copy version of array is created and manipulated without destroying the main array

restaurant.mainMenu.push('burger')
console.log(restaurant.mainMenu)
// another way to add to but it would change the main object itself not create an updated version like in above

const str = 'jonas';
console.log(...str);

const ingredients = ['mushroom', 'olive', 'peperoni'];
restaurant.orderPasta(...ingredients);
// a way to give inputs to function using array





// UPDATING A CLONE
// const copyOfRestrau = Object.assign({}, restaurant);
// both have same result try commenting any one
const copyOfRestrau = { ...restaurant }
// any change made in copyOfRestrau wont reflect in main restrau object as long as its not array
copyOfRestrau.mainMenu.push('tacos');
console.log('restaurant', restaurant, "\ncopyOfRestrau", copyOfRestrau)
// will update both
// SOLU-> to change array but only in the copy version
copyOfRestrau.mainMenu = [...copyOfRestrau.mainMenu, 'spegetti', 'enchiladas']
console.log('restaurant', restaurant, "\ncopyOfRestrau", copyOfRestrau)
// the array update will only reflect in object copy





// UPDATING OBJECT
let obj = {
  g: 1,
  b: 3,
  c: 'ee',
};
console.log(obj);
let o = { ...obj }; //object clone
console.log(o);
let objUpdate = { ...obj, Q: 5, ARR: [3, 3, 3] }; //updated clone
console.log(o, obj);//update no reflect here
console.log(objUpdate,)


// MAKING OBBJECT USING SPREAD
const arr5 = [8, 9, 0];
const arr6 = [4, 5, 5];
const obj2 = {
  array1: [...arr3],
  obj: { ...obj },
  array2: [...arr5]
};
// IMP make sure to open object in {...} and array in [...]
console.log(obj2);
// in order array will be displayed first





