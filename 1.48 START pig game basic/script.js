'use strict';
const score = document.querySelectorAll('.score');
const scoreTo0 = function () {
    for (let i = 0; i < score.length; i++) {
        score[i].textContent = 0;
    }
}
scoreTo0();

const currentScore = document.querySelectorAll('.current-score');
const currentScoreTo0 = function () {
    for (let i = 0; i < score.length; i++) {
        currentScore[i].textContent = 0;
    }
}
// console.log(currentScore);

document.querySelector('.btn--new').addEventListener(
    'click',
    function () {
        scoreTo0();
        currentScoreTo0();
    }
)
