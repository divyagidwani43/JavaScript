// Introduction to Objects
const Array = [
    'Jonas',                                                                                                   //we cant give name to arrays index like we cant call an element 'jonas'as name to call jonas 
    'Schmedtmann',                                                                                             // we have to use jonasArray[0] to name elements of array we use objects
    2037 - 1991,                                                                                               //order is imp as we call them through their order i.e indexing is the only esy to access them so order is very imp
    ['micheal', ' bob', 'alica']
];


const a = {                                                                                                    //object name is a they are used just like array to group certain elements or data togethet
    firtName: 'jonas',                                                                                         //these are properties i.e firstName and age and lastName
    lastName: 'Schmedtmann',                                                                                   //order not imp
    birthyear: 1991,
    age: 2023 - 1991,
    friends: ['micheal', ' bob', 'alica'],
    hasDriversLicence: true,
    dk: 44,

    calcAge: function (birthyear) {                                                                            //its the same as function age = calcAge(birthyear){return 2023-birthyear}         
        return 2023 - birthyear;                                                                               //function attached to an object is called method       
    },                                                                                                         //funtion mus be entered in ax expression manner not declaartion as objects only accept expression as expression produces value held by pro[erty of object

    calcAge2: function () {
        console.log(2023 - this.birthyear);                                                                    //this.any_property will pick any property from th object in which this is defined          
        console.log(a.age);                                                                                    //a.any_property will do the same but if we change the name of object all could error
        //console.log(a[birthyear]); error as compiler will first see birthYear and solve not seeing a that is the locatioon
    },

    calcAge3: function () {
        this.new = 2023 - this.birthyear;                                                                      //here we created a property called new and equated it once we call this functin we can use the property created here           
        return this.new;
    },

    drive: function () {                                                                                      //objects only accept expressions so cant use if else
        const drive = this.age >= 18 ? 'a drivers licence' : 'no drivers licence';
        return drive;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${a.job}, 
        and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    },

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


}
console.log(a);                                                                                                // it will print {firtName: 'jonas', lastName: 'Schmedtmann', age: 46}

//DOT NOTATION
a.firtName = 'john'; //will change the firstname
console.log(a.age); //will access age


console.log(a.age);                                                                                            //calling age from object using dot notatioin //dot is solved from left to right ie fist a is compiled then age is seen
//console.log(a.'a'+b) will error




//BRACK NOTATION
console.log(a['age']);                                                                                         //calling age from object using bracket notation bracket is solved from left to right but brackets are done first ie fist age is seen then a is compiled 
const b = 'ge';
console.log(a['a' + b]);                                                                                       //will do ['a'+b] first == [age] then a[age] then console only happens in []

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age");
console.log(a.interestedIn);                                                                                   //will display undefined as Jonas does not have a property called 'interested in', right? And so therefore the result of trying to access 'interested in' on Jonas is undefined.
console.log(a[interestedIn]);                                                                                  //will display correct ,if wrong input given will display undefined , undefined is what we get when we try to access a property on an object that does not exist ,a.[interestedIn] will take value of interestedIn first and it will become a[age]that does exist , it a clever way of asking what data user wants to access from object

if (a[interestedIn]) {                                                                                         // if wrong value entered it will log to undefined and that is falsy value so it will execute else block
    console.log(a[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}





//ADD PROPERTY
a.job = 'teacher';                                                                                             //will add property and data
a['place'] = 'jaipur';
console.log(a);

console.log(`${a.firtName} has ${a.friends.length} but his best bud is ${a.friends[0]} `)                      //${a.friends.length} fist a is compiled then friends here it recognises that command asks for array[friends ] so we can use array propertes after t has recongnised it as array
console.log(`${a['firtName']} has ${a['friends'].length} but his best bud is ${a['friends'][0]} `)

//PUSH INTO ARRAY DECLARED INSIDE OBJECT
a.friends.push('bob');
console.log(a.friends);





//DELETE PROPERTY
delete a.dk;
console.log(a);





//CALLING METHODS
// calcAge: function (birthyear) {
//     return 2023 - birthyear;
// calcAge2: function () {
//     console.log(2023 - this.birthyear);
//     console.log(a.age);
// },
// calcAge3: function () {
//     this.new = 2023 - this.birthyear;                                                                      //here we created a property called new and equated it once we call this functin we can use the property created here
//     return this.new;
// },
console.log(a['calcAge'](1991));
console.log(a.calcAge(1991));

a.calcAge2();

a.calcAge3()
console.log(a.new);








//SUMMARISE DATA
// drive: function () {                                                                                      //objects only accept expressions so cant use if else
//     const drive = this.age >= 18 ? 'a drivers licence' : 'no drivers licence';
//     return drive;
// },

// getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job},
//     and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// }
console.log(a);

console.log(a.drive());

console.log(`${a.firtName} is ${a.age} years old ${a.job}. he has ${a.drive()} `)
//same as
console.log(a.getSummary());

console.log(a);
delete a.firtName;                                                                                          // or delete person["age"];
a.lastName = 'dev';
console.log(a);


//FOR -IN LOOP
//different than other loops this is for iteratioin of objects 
const object_1 = {
    a: 'hi',
    b: 4,
    c: 55,
};
for (let key in object_1)                                          //key here will hold value of properties of object_1
    // console.log(key);                                           //will print only a and b , commented as in for loop only one line can be executed
    console.log(key, '', object_1[key]);                           //when we log key we print out the name of properties of object_1 seperatly here its a and b as given to object , adding object_1[key] will print the values beside a and b as well

//FOR OF IN OBJECT
for (let key of Object.keys(object_1)) console.log(key)            // will print object_1 data using for in as well use object.keys(object_name)
for (let any of Object.entries(object_1)) console.log(any)         // will print object_1 data in array form use object.entries(object_name)

//FIND
if ('a' in object_1) console.log('yes');                              //if a is in object it will print yes   

//CLONE
const object_2 = {
    a: 'hi',
    b: 4,
};
const another = {};
for (let key in object_1)
    another[key] = object_2[key];
console.log(another)
//same can be done by
const object_3 = {
    a: 'hi',
    b: 4,
};
const another_1 = Object.assign({ f: 66 }, object_3);             //what inside {}will be added extra to another_1         
console.log(another_1)
//same can be done using spread
const another_2 = { ...object_3 }
console.log(another_2);