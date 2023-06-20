
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
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, 
        and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }


}
console.log(a);                                                                                                // it will print {firtName: 'jonas', lastName: 'Schmedtmann', age: 46}

console.log(a['age']);                                                                                         //calling age from object using bracket notation bracket is solved from left to right but brackets are done first ie fist age is seen then a is compiled 
const b = 'ge';
console.log(a['a' + b]);                                                                                       //will do ['a'+b] first == [age] then a[age] then console only happens in []

console.log(a.age);                                                                                            //calling age from object using dot notatioin //dot is solved from left to right ie fist a is compiled then age is seen
//console.log(a.'a'+b) will error

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age");
console.log(a.interestedIn);                                                                                   //will display undefined as Jonas does not have a property called 'interested in', right? And so therefore the result of trying to access 'interested in' on Jonas is undefined.
console.log(a[interestedIn]);                                                                                  //will display correct ,if wrong input given will display undefined , undefined is what we get when we try to access a property on an object that does not exist 

if (a[interestedIn]) {                                                                                         // if wrong value entered it will log to undefined and that is falsy value so it will execute else block
    console.log(a[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

a.job = 'teacher';
a['place'] = 'jaipur';
console.log(a);

console.log(`${a.firtName} has ${a.friends.length} but his best bud is ${a.friends[0]} `)                      //${a.friends.length} fist a is compiled then friends here it recognises that command asks for array[friends ] so we can use array propertes after t has recongnised it as array
console.log(`${a['firtName']} has ${a['friends'].length} but his best bud is ${a['friends'][0]} `)

//CALLING METHODS
console.log(a['calcAge'](1991));
console.log(a.calcAge(1991));
a.calcAge2();

a.calcAge3()
console.log(a.new);

//SUMMARISE DATA
console.log(a);

console.log(a.drive());
console.log(`${a.firtName} is ${a.age} years old ${a.job}. he has ${a.drive()} `)

console.log(a.getSummary());


