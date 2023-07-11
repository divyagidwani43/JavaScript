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
  x: function (input1, input2) {
    console.log(input1, input2);
  },

  order: function (starterNo, mainNo) {
    //`the starter is ${this.starterMenu[starter]} and the main course is ${this.mainMenu[main]}`;
    //wil error as destructing cant be done on string we need array
    return [this.starterMenu[starterNo], this.mainMenu[mainNo]];
  },


  y: function ({ time, place, starterNo, mainNo }) {                                                                     //make sure its function (  {   }  ) not ()
    console.log(`your order starter ${this.starterMenu[starterNo]} and 
    main ${this.mainMenu[mainNo]} will be delivered at ${place} at ${time}`);
  },


  xx: function (time, place, starterNo, mainNo) {
    console.log(`your order starter ${this.starterMenu[starterNo]} and 
    main ${this.mainMenu[mainNo]} will be delivered at ${place} at ${time}`);
  },


  z: function ({ time = '20:00',                                                                                     //20:00 is the default value id no value entered                                   
    place,                                                                                                       //no default value so if no value enetered it will show undefined 
    starterNo = 1,
    mainNo }) {                                                        											                       //make sure its function (  {   }  ) not ()
    console.log(`your order starter ${this.starterMenu[starterNo]} and 
    main ${this.mainMenu[mainNo]} will be delivered at ${place} at ${time}`);
  }
};





//CALLING PROPERTIES
const { name, categories } = restaurant;                                                                         //1st  //we can directly call properties like bname location category etc instead of restraunt.name
console.log(name, categories);
//same as
console.log(restaurant.name, restaurant.categories);                                                             //dont need to use indexing as done in array to assign values
//same as
const { name: name_of_restrau, categories: any_variable_name } = restaurant;                                     //2nd  // here restraunt.name is assigned to name_of_restraunt even without the first way to assign it will work  
console.log(name_of_restrau, any_variable_name);


//INITIALISING TO []
const { menu = [], starterMenu: starter = [] } = restaurant;                                                     //say menu has no value in restaurant so it will be assigned []value if =[] if not it will  be undefined
console.log(menu, starter);





//INITIALISING VALUE FROM OBJECT TO ALREADY DECLARED VARIABLES
let a = 33;
let b = 44;
let aa = 44;
let bb = 55;
const d = { a: 3, b: 4, aa: 3, bb: 4 };
a = d.a;
b = d.b;
console.log(a, b);
//same can be done using
console.log(aa, bb);
({ aa, bb } = d);                                                                                                // make sure for (  {  } = ); to assign aa to 3 of d and b to 4 of d
console.log(aa, bb);





//CALLING OBJECT FROM MAIN OBJECT
const { thu } = restaurant.openingHours;
console.log(thu);                                                                                                //1st      //{open: 12, close: 22} for thu


const { openingHours:                                                                                             //2nd
  { fri },                                                                                                     //access fri of openingHours as fri you can assign fri:f and access fri as f
} = restaurant;
console.log(fri);                                                                                                //{open: 11, close: 23} for fri

//CALLING  OBJECT FROM MAIN OBJECT ABD INILISING
const { fri:                                                                                                      //3rd     //will print a lil differntly
  {
    open: o,
    close: c                                                                                                  //access open as o and close as c
  },
} = restaurant.openingHours;
console.log(o, c);                                                                                               //11 23 for fri





//INPUT TO FUNCTION DECLARED IN OBJECT
// x : function(input1,input2){
//     console.log(input1,input2);
//   },
restaurant.x('22:11', '902 effinay street');                                                                      //only the first value will be treated as input
restaurant.x({                                                                                                   //we can pass multiple inputs
  time: '22:11',
  place: '902 effinay street',
},
  {
    time: '22:11',
    place: '902 effinay street',
  }
)                                                                                                               // will display {time: '22:11', place: '902 effinay street'}


//this is input to funtion
// xx:function(time,place,starterNo,mainNo){                                                                    
//   console.log(`your order starter ${this.starterMenu[starterNo]} and 
//   main ${this.mainMenu[mainNo]} will be delivered at ${place} at ${time}`);
// },
restaurant.xx(
  '22:11',
  '902 effinay',
  1,
  2
)





//INOUT TO OBJECT PROPERTY DECLARED INSIDE OBJECT
//this is input to object created in funtion
// y:function({time,place,starterNo,mainNo}){                                                                   //make sure its function (  {   }  ) not ()
//     console.log(`your order starter ${this.starterMenu[starterNo]} and 
//main ${this.mainMenu[mainNo]} will be delivered at ${place} at ${time}`);
//   }
restaurant.y({
  time: '22:11',                                                                                                //will put time :'22:11' in time variable of function
  place: '903 efffinay',                                                                                        //if not (  {   }  ) but () this code will error                                            
  mainNo: 1,                                                                                                    //sequence doesn't matter
  starterNo: 2                                                                                                  //name of variable : must be the exact same to access like this 
})
//restaurant.y('22:11','903 efffinay', 2, 1)                                                                     //this will work if bracks of function y are ()



// z:function({time ='20:00',           																	                                       //20:00 is the default value id no value entered                                   
// place,                               																		                                     //no default value so if no value enetered it will show undefined 
// starterNo= 1,
// mainNo}){                            																		                                     //make sure its function (  {   }  ) not ()
// console.log(`your order starter ${this.starterMenu[starterNo]} and 
//main ${this.mainMenu[mainNo]} will be delivered at ${place} at ${time}`);
// }
restaurant.z({
  starterNo: 2,                        //if not assigned it would be 1            
  place: '324 effinay'               //if not assigned it would be undefined
  //time will be 20:00 and mainNo undefined  

})





//UPDATE OBJECT IN ANOTHER OBJECT
let obj = {
  g: 1,
  b: 3,
  c: 'ee',
};
console.log(obj);
// console.log(...obj);   //WILL ERROR
let objUpdate = { ...obj, Q: 5 };
console.log(objUpdate,)
