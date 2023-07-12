'use strict';

const number = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = number;
let score = 20;
let highScoreIn = 0;
document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guessValue = Number(document.querySelector('.guess').value)
        if (!guessValue) {
            document.querySelector('.message').textContent = '⛔ No number'
        } else if (guessValue < number) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'too low'
                score--;
                document.querySelector('.score').textContent = score;
            } else document.querySelector('.message').textContent = 'you lost the game ☹️'
        } else if (guessValue > number) {
            if (score > 20) {
                // if u click on check more than 20 times score goes to -ve but we want it to give lost instead and score to stop changing
                document.querySelector('.message').textContent = 'too high'
                score--;
                document.querySelector('.score').textContent = score;
            } else document.querySelector('.message').textContent = 'you lost the game ☹️'
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