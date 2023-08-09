'use strict';
/////////////////////////////////////////////////
// Data
// when data is from API it is in form of objects
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

/////////////////////////////////////////////////
// Elements
// all html elements
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
// console.log(account1.movements) //recieving this data by sending it to function using arguments

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? movements.sort((a, b) => a - b) : movements;
    movs.forEach(function (mov, i) {
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
// displayMovements(account1.movements)

const createUserNames = function (acc) {
    acc.forEach((el) => {
        el.userName = (el.owner.toLowerCase().split(" ")).map((el) => el[0]).join("")
    })
}
createUserNames(accounts)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOT GENERALISED
const calcPrintBalance = function (acc1) {
    acc1.balance = acc1.movements.reduce((acc, curr, i) => acc + curr, 0)
    // console.log(balance)
    labelBalance.textContent = `${acc1.balance} €`;
}
// calcPrintBalance(account1)

const calcDisplaySummary = function (movements) {
    // console.log(movements)
    const incomes = movements
        .filter((mov) => mov > 0)
        .reduce((acc, curr) => acc + curr)
    // console.log(incomes)
    labelSumIn.textContent = `${incomes}€`

    const out = movements
        .filter((mov) => mov < 0)
        .reduce((acc, curr) => acc + curr)
    // console.log(out, 400 + 650 + 130)
    labelSumOut.textContent = `${Math.abs(out)}€`

    // bank pays interest 1.2% of deposit  every deposit only if interest is least 1euro
    const interest = movements
        .filter((mov) => mov > 0)
        .map((mov) => mov * 0.012)  //gives interst array i.e array of interests on deposits
        .filter((int) => int > 1)   //if interest array has any value <1 it will be discarded 
        .reduce((acc, curr) => acc + curr)
    // console.log(interest)
    labelSumInterest.textContent = `${interest}€`
}
// calcDisplaySummary(account1.movements)

const updateUI = function (currentAccount) {
    // balance
    calcPrintBalance(currentAccount)

    // movements
    displayMovements(currentAccount.movements)

    // summary 
    calcDisplaySummary(currentAccount.movements)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENT LISTENERs
let currentAccount;
btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();
    currentAccount = accounts.find((acc) => acc.userName === inputLoginUsername.value)
    console.log(currentAccount);
    console.log(accounts)
    console.log(inputLoginUsername.value)

    if (currentAccount?.pin === Number(inputLoginPin.value)) {

        // UI and Message 
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = 100;

        // CLEAR INPUT FIELD
        inputLoginPin.value = inputLoginUsername.value = ''

        updateUI(currentAccount)
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const recieverAccount = accounts.find((acc) => acc.userName === inputTransferTo.value);
    if (amount > 0 && recieverAccount && recieverAccount.userName !== currentAccount.userName && currentAccount.balance >= amount) {
        currentAccount.movements.push(-amount);
        recieverAccount.movements.push(amount);
        updateUI(currentAccount)
    }
    inputTransferTo.value = inputTransferAmount.value = '';
})

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some((el) => el > amount * 0.1)) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount)
    }
    inputLoanAmount.value = ''
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    sorted = !sorted;
    displayMovements(currentAccount.movements, !sorted)
    console.log(sorted)
})