'use strict';
// Data
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const a = document.querySelector('.movements__row')

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
    // creating conditional rendering of movements array as movs based on true and false value of sort
    // the true false will be done through button
    // const movs = sort ? movements.sort((a, b) => a - b) : movements
    // creat a copy using slice not change the original array otherwise on click twie it wont change to before array as it is mutated

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements
    // movements.forEach(function (mov, i) {
    // render movs instead of movements
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal"
        const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">€${Math.abs(mov)}</div>
    </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html)
    });
}

const createUserNames = function (acc) {
    acc.forEach((el) => {
        el.userName = (el.owner.toLowerCase().split(" ")).map((el) => el[0]).join("")
    })
}
createUserNames(accounts)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOT GENERALISED
const calcPrintBalance = function (accs) {
    accs.balance = accs.movements.reduce((acc, curr, i) => acc + curr, 0)
    labelBalance.textContent = `${accs.balance} €`;
}

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, curr) => acc + curr)
    labelSumIn.textContent = `${incomes}€`

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, curr) => acc + curr, 0) //add 0 at last
    labelSumOut.textContent = `${Math.abs(out)}€`


    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((mov) => mov * acc.interestRate / 100)
        .filter((int) => int > 1)
        .reduce((acc, curr) => acc + curr)
    labelSumInterest.textContent = `${interest}€`
}

const updateUI = function (currentAccount) {
    // movements
    displayMovements(currentAccount.movements)

    // balance
    calcPrintBalance(currentAccount)

    // summary 
    calcDisplaySummary(currentAccount)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENT LISTENERs
let currentAccount;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = accounts.find((acc) => acc.userName === inputLoginUsername.value && acc.pin === Number(inputLoginPin.value))
    console.log(currentAccount)

    // UPDATING UI
    updateUI(currentAccount)

    // UI and Message 
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // CLEAR INPUT FIELD
    inputLoginPin.value = inputLoginUsername.value = ''

})

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value)
    const recieverAccount = accounts.find((acc) => acc.userName === inputTransferTo.value)
    if (amount > 0 && recieverAccount && amount <= currentAccount.balance && recieverAccount.userName !== currentAccount.userName) {
        recieverAccount.movements.push(amount);
        currentAccount.movements.push(-amount);

        updateUI(currentAccount)
    }
    inputTransferAmount.value = inputTransferTo.value = ''

})
console.log(accounts)

btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentAccount.userName === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
        const index = accounts.findIndex((acc) => acc.userName === currentAccount.userName)
        console.log('account deleted! ')
        accounts.splice(index, 1)
        console.log(accounts)

        // hide UI
        containerApp.style.opacity = 0;
        labelWelcome.textContent = `login to get started`
    }
    inputClosePin.value = inputCloseUsername.value = ''
})

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    // for loan there must be one deposit with least 10% of loan amount
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some((mov) => mov > 0.1 * amount)) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    } else alert('too much loan amount');
    inputLoanAmount.value = '';
})

let sorting = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    // const sorted = currentAccount.movements.sort((a, b) => a - b)
    // console.log(sorted)
    // moved to --->displaymovements function
    displayMovements(currentAccount.movements, !sorting);
    // giving arguments
    sorting = !sorting;
    displayMovements(currentAccount.movements, !sorting);

})