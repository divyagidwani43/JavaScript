const arrDeep = [[1, 2, 3], [4, 5, [6, 6.2, [6.4, [6.8]]]], 7, 8, 9]

// FLAT
console.log(arrDeep.flat()) // will open [el, [this] , [el,[not this]], el]
// will open all arrays in arrays and treat as elements[[open this],el]

console.log(arrDeep.flat(2)) //will open [el, [el,[these]] ,el] too
// similarly
console.log(arrDeep.flat(3))
console.log(arrDeep.flat(4))

//same as
// console.log([...arrDeep[0], ...arrDeep[1], ...arrDeep.slice(2, 5)])

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];


/* calc overall balance of all movements of all accounts , movements are in
accounts that has [all objects] */
// console.log(accounts.flat())
// console.log(accounts)

const accountMovements = accounts.map((acc) => acc.movements)
console.log(accountMovements)

console.log(accountMovements.flat())
console.log(accountMovements.flat().reduce((acc, curr) => acc + curr, 0))

const overallBal = accounts
    .map((acc) => acc.movements)
    .flat()   //is common operation so that reduce function doesn't error due to [[this]]
    .reduce((acc, curr) => acc + curr)
console.log(overallBal)


// FLAT MAP
const overallBalFM = accounts
    .flatMap((acc) => acc.movements) //map() then flat() method called (call back required same as maps)
    // flatMap can only open [[this]] not [el,[el,[this]]]
    // .flat()   //is common operation so that reduce function doesn't error due to [[this]]
    .reduce((acc, curr) => acc + curr)
console.log(overallBalFM)

