'use strict';

{/* <button class="btn check">Check!</button> we use check as btn also defines again button*/ }

document.querySelector('.check').addEventListener(
    'click', //the event when the function below must execute
    function () {
        // whatever we type here will be executed on click we can also use dom manipulation
        // const guessValue = document.querySelector('.guess').value
        const guessValue = Number(document.querySelector('.guess').value)
        // the above will give the value in string format
        // saving the entered value in const variable
        console.log(guessValue);

        if (!guessValue) {
            document.querySelector('.message').textContent = '⛔ No number'
        } else {
            // without this the no number wont change back to initial state without reload or on just entering a num
            document.querySelector('.message').textContent = 'Start guessing...'
        }
    }
)
