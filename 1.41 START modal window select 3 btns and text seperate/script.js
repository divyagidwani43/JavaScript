'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal =document.querySelector('.close-modal');

const btns =document.querySelector('.show-modal');
console.log(btns);// will show one of the buttons

const btnsOpenModal =document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);//will show all 3 buttons
// this can be accessed like an array and have operation of dom

for (let i = 0; i<btnsOpenModal.length;i++){
    console.log(btnsOpenModal[i]);
    console.log(btnsOpenModal[i].textContent);//will display the content of that class
}
