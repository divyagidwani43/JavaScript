movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

console.log(movements.includes(-130)) //true if element is directly equal to array

console.log(movements.filter((mov) => mov > 1000)) // return new array with condition satisfy elements

// to check if a codition is true or false not returning array
console.log(movements.some((el) => el > 1500)) //3000 there so true
console.log(movements.some((el) => el > 40000))
console.log(movements.some((el) => el < 0)) //see withdrawls
console.log(movements.some((el) => el > 0)) //see deposits

