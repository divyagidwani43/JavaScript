const someNegi = [200, 450, -400, 3000, -650, -130, 70, 1300]
const onlyPosi = [200, 450, 3000, 70, 1300]

// true if all elements satisfy the condition
console.log(someNegi.every((el) => el > 0))
console.log(onlyPosi.every((el) => el > 0))