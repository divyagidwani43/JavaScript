
// we have all staff
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// we want to see positions only
const position = new Set(staff)
console.log(position)
console.log(...position)

// another way to do the same
const positionInArr = [new Set(staff)]
const positionSpreadArr = [...new Set(staff)] //will give values of set in array
console.log(positionInArr, 'space', positionSpreadArr)

