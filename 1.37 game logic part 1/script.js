'use strict';

const number = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = number;
let score = 20;
let highScoreIn = 0;
// console.log(score);
// to display selected number at ? place
document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guessValue = Number(document.querySelector('.guess').value)
        // console.log(guessValue, typeof guessValue);

        if (!guessValue) {
            document.querySelector('.message').textContent = '⛔ No number'
        } else if (guessValue < number) {
            document.querySelector('.message').textContent = 'too low'
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guessValue > number) {
            document.querySelector('.message').textContent = 'too high'
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guessValue === number) {
            document.querySelector('.message').textContent = 'correct answer 🎉'
            if (highScoreIn < score) {
                highScoreIn = score;
                document.querySelector('.highscore').textContent = highScoreIn;
            }
        } else {
            document.querySelector('.message').textContent = 'error'
        }
    }
)
// if u click on check more than 20 times score goes to -ve but we want it to give lost instead