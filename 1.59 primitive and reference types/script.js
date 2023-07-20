//const variables are only immutable if its for primitive values 

// PRIMITIVE - num, string, boolean, undefined, null, symbol, bigint
// stored in call stack
let age = 30;
let oldAge = age;     // preserving previous age value
age = 31;
console.log(age);     // updates age
console.log(oldAge);  // previous value





// REFERENCE - object , array , function
// stored in heap
const me = {
    name: 'Jonas',
    age: 30,
    reletive: ['mom', 'dad']
};
const friend = me;
// coping the object
console.log(friend)
friend.age = 27; //updating in friend
console.log('Friend:', friend); //with updated value
console.log('Me', me); // me will also have updated value


//SOLU of above is
const friend2 = Object.assign({}, me);
// will create an empty object {} and merge me object to it that will point to different value in call stack and to diff memory
console.log('friend2', friend2);
friend2.age = 44;//change in value
console.log('friend2', friend2);//changed value will reflect
console.log('me', me);//value wont change here


// clone with other properties
const friend3 = Object.assign({ DOB: 1992, lastNAme: 'willams', arr: [4, 3] }, me)
// will add the mentioned values as well without reflecting any change in any other objects
console.log('\nfriend3', friend3, '\nfriend2', friend2, '\nme', me)


friend3.sex = 'M';//adding property to cloned only
console.log('\nfriend3', friend3, '\nfriend2', friend2, '\nme', me)


// we still cant manipulate arrays in objects cloned for that we need deep cloning
friend3.reletive.push('sis')
console.log('\nfriend3', friend3, '\nfriend2', friend2, '\nme', me)
// the change will reflect everywhere


// using spread operator
friend3.reletive = [...friend3.reletive, 'bro'];
// will add bro to only friend3 not the other copies of it neither the main it is a copy of
console.log('breakkkkkkkkkkkk')
console.log('\nfriend3', friend3, '\nfriend2', friend2, '\nme', me)
