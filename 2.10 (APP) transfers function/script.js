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
const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal"
        const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">${i + 1} days ago</div>
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
const calcPrintBalance = function (acc1) {
    const balance = acc1.movements.reduce((acc, curr, i) => acc + curr, 0)
    labelBalance.textContent = `${balance} €`;
}

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, curr) => acc + curr)
    labelSumIn.textContent = `${incomes}€`

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, curr) => acc + curr)
    labelSumOut.textContent = `${Math.abs(out)}€`

    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((mov) => mov * acc.interestRate / 100)
        .filter((int) => int > 1)
        .reduce((acc, curr) => acc + curr)
    labelSumInterest.textContent = `${interest}€`
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENT LISTENERs
btnLogin.addEventListener('click', function (e) {
    e.preventDefault(); //makes sure page doesn't reload and login stays
    const currentAccount = accounts.find((acc) => acc.userName === inputLoginUsername.value && acc.pin === Number(inputLoginPin.value))
    // const currentAccount = account1
    console.log(currentAccount)

    // movements
    displayMovements(currentAccount.movements)

    // UI and Message 
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // CLEAR INPUT FIELD
    inputLoginPin.value = inputLoginUsername.value = ''

    // balance
    calcPrintBalance(currentAccount)

    // summary 
    calcDisplaySummary(currentAccount)

})
// inputTransferTo inputTransferAmount

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = inputTransferAmount.value
    const recieverAccount = accounts.find((acc) => acc.userName === inputTransferTo.value)
    // console.log(accTransferTo)
    // console.log(amount, typeof amount)
    recieverAccount.movements.push = Number(amount);
    // console.log(accTransferTo)
})
console.log(accounts)
