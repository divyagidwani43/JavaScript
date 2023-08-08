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
// adding a balance property to update in tranfer functionality

const calcPrintBalance = function (accs) {
    // adding a balance property to update in tranfer functionality
    // balance prop is created in the accs or account object we recieve
    // from btnLogin when we login and there a balance prop is created
    // till btnLogin is pressed we do not see any balance property
    accs.balance = accs.movements.reduce((acc, curr, i) => acc + curr, 0)
    labelBalance.textContent = `${accs.balance} €`;
}

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, curr) => acc + curr)
    labelSumIn.textContent = `${incomes}€`

    const out = movements
        .filter((mov) => mov < 0)
    if (out.length > 1) {
        out.reduce((acc, curr) => acc + curr)
        // console.log(out, 400 + 650 + 130)
        labelSumOut.textContent = `${Math.abs(out)}€`
    } else labelSumOut.textContent = `0000€`

    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((mov) => mov * acc.interestRate / 100)
        .filter((int) => int > 1)
        .reduce((acc, curr) => acc + curr)
    labelSumInterest.textContent = `${interest}€`
}

// UPDATE UI FUNCTION 
const updateUI = function (currentAccount) {
    // movements
    displayMovements(currentAccount.movements)

    // balance
    calcPrintBalance(currentAccount)

    // summary 
    calcDisplaySummary(currentAccount)
}
// call above to refresh display called in btnLogin and btnTranfer

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENT LISTENERs
let currentAccount;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault(); //makes sure page doesn't reload and login stays
    currentAccount = accounts.find((acc) => acc.userName === inputLoginUsername.value && acc.pin === Number(inputLoginPin.value))
    // const currentAccount = account1
    console.log(currentAccount)

    // // movements
    // displayMovements(currentAccount.movements)

    // UI and Message 
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // CLEAR INPUT FIELD
    inputLoginPin.value = inputLoginUsername.value = ''

    // // balance
    // calcPrintBalance(currentAccount)

    // // summary 
    // calcDisplaySummary(currentAccount)

    updateUI(currentAccount)
})
// inputTransferTo inputTransferAmount

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value)
    const recieverAccount = accounts.find((acc) => acc.userName === inputTransferTo.value)
    // console.log(amount, typeof amount)
    // console.log(accTransferTo)

    // adding a balance property to all accounts objects
    // balance prop will only be visible after login cz we call clacprintsumaary in btn login
    //  to update in tranfer functionality ADDED in calc print balance
    // console.log(account1) //has balance prop

    // we can only tranfer if the owner has more than transfer amount
    // their is a reciever acc and amount is >0 and reciever acc is not the same as current
    // console.log(currentAccount)
    if (amount > 0 && recieverAccount && amount <= currentAccount.balance && recieverAccount.userName !== currentAccount.userName) {
        recieverAccount.movements.push(amount);
        currentAccount.movements.push(-amount);

        updateUI(currentAccount)
    }
    // we need to update balance display and other UI to referesh page and siplay new changes in amount
    // so comment out in btnLogin and create a seperate Update UI to diaplay
    // console.log(currentAccount)
    // console.log(recieverAccount)

    inputTransferAmount.value = inputTransferTo.value = ''

})
console.log(accounts)
// balance prop will only be visible after login cz we call clacprintsumaary in btn login
// console.log("currentAccount", currentAccount)
