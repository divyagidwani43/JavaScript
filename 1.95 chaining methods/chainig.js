const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// convert euro to $ and add them all only the deposits 

const euroToDollar = 1.1;

const InDollar = movements
    .filter((mov) => mov > 0)
    .map((mov, i, arr) => { return Math.round(mov * euroToDollar) })
    //we can access array formed by filter using arr from (mov , i ,arr )and check array
    .reduce((acc, curr) => acc + curr)
// we can add map after filter cause filter returns an array nothing can 
// be added after reduce as it returns a number
// only if the return value is array other filter map methods cam be applied in chain
// bad parc - to mutate array in chaining like using splice or reverse
console.log(InDollar)



//CHECKING
// const deposits = [200, 450, 3000, 70, 1300] //matched filter
// deposits.forEach((el) => console.log(Math.round(el * 1.1))) //matched till map

// const euros = [220, 495, 3300, 77, 1430] //after map
// console.log(220 + 495 + 3300 + 77 + 1430) //matched