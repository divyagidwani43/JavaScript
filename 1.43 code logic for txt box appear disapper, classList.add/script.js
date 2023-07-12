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
    console.log(btnsOpenModal[i].textContent);
    //will display the content of that class
    btnsOpenModal[i].addEventListener('click',
    function(){
        console.log('button clicked')
        // anytime any of the button are clicked the above will be printed
        {/* <div class="modal hidden">
        <!-- model hidden has display none in css so class modal displays while moden hidden doesnt --> */}
        
        modal.classList.remove('hidden')
        // const modal = document.querySelector('.modal'); above
        // using above we can remove hidden from class in html
        // this can also add and check if a class has something or not
        overlay.classList.remove('hidden')
        // will blur the screen

        // the above can be achieved by manipulating css as well
        // modal.style.display='block';
        // this would change display:none from css to display:block so it will display, no change in html
    }
    )
    
    btnCloseModal.addEventListener('click',function(){
        modal.classList.add('hidden')
        // to add hidden back
        overlay.classList.add('hidden')
        // modal.style.display='none';

    })

    overlay.addEventListener('click',function(){
        // will execute when clicked anywhere in blur area 
        //the area other than text box is blur area
        modal.classList.add('hidden')
        overlay.classList.add('hidden')        
    })
}

