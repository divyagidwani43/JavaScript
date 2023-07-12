'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScoreIn = 0;
console.log(number)


document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guessValue = Number(document.querySelector('.guess').value);
        //no value
        if (!guessValue) {
            document.querySelector('.message').textContent = '⛔ No number';
        }

        // too low
        else if (guessValue < number) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'too low';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'you lost the game ☹️';
            }
        }

        // too high
        else if (guessValue > number) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'too high';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'you lost the game ☹️';
            }
        }

        // equal
        else if (guessValue === number) {
            document.querySelector('.message').textContent = 'correct answer 🎉';
            document.querySelector('body').style.backgroundColor = 'green';
            // do not do background-color while in js use camel notation convert every - of css to caps first after -
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = number;

            if (highScoreIn < score) {
                highScoreIn = score;
                document.querySelector('.highscore').textContent = highScoreIn;
            }
        }

        // safety
        else {
            document.querySelector('.message').textContent = 'error';
        }
    }
)

document.querySelector('.again').addEventListener(
    'click',
    function () {
        score = 20;
        number = Math.trunc(Math.random() * 20) + 1;
        console.log(number);
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = 'start guessing...';

    })