'use strict';
//scores 1,2
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//the dice
const diceEl = document.querySelector('.dice');
// all buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//current score
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
//player
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


//starting conditions
diceEl.classList.add('hidden');
//score
score0El.textContent = 0;
score1El.textContent = 0;
//current score
let currentScore1 = 0;
let currentScore2 = 0;
//player score
let playerScore1 = 0;
let playerScore2 = 0;



//switch player function
const switchPlayer = function () {
    let player = 0;
    player = (player0El.classList.contains('player--active') ? 1 : 2)
    if (player === 1) {
        player0El.classList.remove('player--active');
        player1El.classList.add('player--active')
    }

    if (player === 2) {
        player1El.classList.remove('player--active');
        player0El.classList.add('player--active')
    }
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');  // dice gets displayed
    diceEl.src = `dice-${dice}.png`;    //to manipulate src img in html

    // 3. Check if dice roll value is 1
    if (dice != 1) {
        if (player0El.classList.contains('player--active')) {
            currentScore1 += dice;
            current0El.textContent = currentScore1;
        }
        if (player1El.classList.contains('player--active')) {
            currentScore2 += dice;
            current1El.textContent = currentScore2;

        }
    } else {
        if (player0El.classList.contains('player--active')) {
            currentScore1 = 0;
            current0El.textContent = currentScore1;
        }
        if (player1El.classList.contains('player--active')) {
            currentScore2 = 0;
            current1El.textContent = currentScore2;
        }
        switchPlayer()
    }

})

//Updating scores board functionality
btnHold.addEventListener('click', function () {
    if (player0El.classList.contains('player--active')) {
        current0El.textContent = 0;
        playerScore1 += currentScore1;
        score0El.textContent = playerScore1;
        currentScore1 = 0;
        if (Number(playerScore1) >= 100) {
            player0El.classList.add('player--winner')
        }
    }
    if (player1El.classList.contains('player--active')) {
        current1El.textContent = 0;
        playerScore2 += currentScore2;
        score1El.textContent = playerScore2;
        currentScore2 = 0;
        if (Number(playerScore2) >= 100) {
            player1El.classList.add('player--winner')
        }
    }
    switchPlayer()

})

//new game functionality
btnNew.addEventListener('click', function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');                          //at start dice doesnt get displayed
    currentScore1 = 0;
    currentScore2 = 0;
    playerScore1 = 0;
    playerScore2 = 0;
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')

})