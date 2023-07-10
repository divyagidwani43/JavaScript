// The switch Statement
//const day = 'friday';
let day = prompt('enter the day of the week');
switch (day) {
    case 'monday':  //same as if(day === 'monday') the below block will execute if statement true 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; //will end this block and treat below as diff and move to next case
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday': // empty case will print data of the lower case do nt add break statement        
    case 'thursday':
        console.log('Write code examples');// not entering break will print for the below case as well
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
        break;     //will print nothing neither would take value of lower case due tp brak statement    
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default: //if none of the above are entered
        console.log('Not a valid day!');
}


//same can be done using if else
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
