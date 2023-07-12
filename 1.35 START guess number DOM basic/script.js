'use strict';
// console.log(document.querySelector('.message').textContent);
// querySelector is a method available in document that selects the class .message defined in css and html
//         <p class="message">Start guessing...</p>
// textContent will display the message contained in that class

document.querySelector('.message').textContent = "any text you wanna display";
// the console will still show start guessing from previous as console function was called above ie before
document.querySelector('.label-score').textContent = "score changed"

console.log(document.querySelector('.guess').value); //will be empty as value is empty
document.querySelector('.guess').value = 21;
// used to manipulate value of input field
console.log(document.querySelector('.guess').value); //will display 21
