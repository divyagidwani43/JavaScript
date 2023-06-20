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
};

//for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.
//its the procces which is used for naming the index[] functions like below instead of x[0] we can call p similarly x[1]=q x[2]= r destructing is basically naming the index od arrays

const x = [1, 2, 3];
const a = x[0];
const b = x[1];
const c = x[2];
console.log(a, b, c);
//is same as
const [p, q, r] = x;                                                             //1st way to assign                  //pqr takes up first 3 values
console.log(p, q, r);                                                            //instead of x[0] we can call p similarly x[1]=q x[2]= r destructing is basically naming the index od arrays



const [u = 1, i = 1, s = 1] = [3, 4];                                            //2nd way to assign          //no value for s will equate it to undefined but =1 early in array destruct will show 1 if no value is assigned
console.log(u, i, s);
let [
  variable_name_1,                                                               // equated to italian
  ,                                                                              //empty space will make array skip the index[1] i.e pizzeria
  variable_name_2,                                                               //equate to vegetarian
] = restaurant.categories;
console.log(variable_name_1, variable_name_2);



[variable_name_1, variable_name_2] = [variable_name_2, variable_name_1];         //will switch the values ir 1's value will be in 2 and 2's in 1
console.log(variable_name_1, variable_name_2);

const [starter, main] = restaurant.order(2, 1);                                  //input given to the funtion will be used to produce return value and assign to starter and main
console.log(starter, main);



const nested_array = [2, 4, 5, [3, 4]];
const [
  f,                                                                             //2 
  ,                                                                              //leave 4 
  ,                                                                              //leave 5
  g,                                                                             //[3,4]
] = nested_array;
console.log(f, g);




const [
  h,                                                                             //2 
  ,                                                                              //leave 4
  ,                                                                              //leave 5
  [
    j,                                                                           //3 seperate
    k,                                                                           //4 seperate
  ],
] = [2, 4, 5, [3, 4]];
console.log(h, j, k);                                                            //will give [3,4] as 3,4 no array
