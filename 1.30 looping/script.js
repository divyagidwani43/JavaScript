//FOR LOOP
let i = 0;                                                         //declare
for (i = 0; i < 10; i += 3) {
    console.log(i);                                                //execute
}

//WHILE LOOP
i = 10;                                                            //declared
while (i < 20) {
    if (i % 2 != 0) console.log(i);                                //execute
    i++;
}

//DO - WHILE
//will execute once even if condition is false
i = 20;                                                            //declared above
do {
    if (i % 2 != 0) console.log(i);                                //execute
    i += 3;                                                        //avoid infinite
}
while (i < 30)                                                     //codition

//FOR -IN LOOP
//different than other loops this is for iteratioin of objects 
const object_1 = {
    a: 'hi',
    b: 4,
};
for (let key in object_1)                                          //key here will hold value of properties of object_1
    // console.log(key);                                           //will print only a and b , commented as in for loop only one line can be executed
    console.log(key, '', object_1[key]);                           //when we log key we print out the name of properties of object_1 seperatly here its a and b as given to object , adding object_1[key] will print the values beside a and b as well

const object_2 = ['red', 'violet', 'purple'];
for (let any_name in object_2)                                     //any_name used instead of key it will give 0 and 1 as we access array element via indexing
    console.log(any_name);

//FOR OF
//can only be used for arrays and iterables not objectr
for (let any_name of object_2)
    console.log(any_name);                                         //will print the content in array seperated through lines ir red violet purple

//BREAK AND CONTINUE





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOOPING ARRAYS
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
const types2 = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // Filling types array
    types2[i] = typeof jonas[i];
    types.push(typeof jonas[i]);                                             //pushes the data type of jonas in types array                                                
}
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BREAK AND CONTINUE
let j = 0;
while (j < 10) {
    if (j % 2 === 0) {
        j++;
        continue;        // will leave out divisible by 2     
    }
    console.log(j);
    j++;

}

let jj = 0;
while (jj < 10) {
    if (jj == 5) break; //will stop increasing j after 5
    // if (j % 2 === 0) {
    //     j++;
    //     continue;
    // }
    console.log(jj);
    jj++;

}

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOOPING BACKWARD AND LOOPS IN LOOP
const jonas2 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas2.length - 1; i >= 0; i--) {
    console.log(i, jonas2[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
