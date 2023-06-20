let bill = prompt('enter the bill amount');
let tip = (bill > 50 && bill < 300) ? 15 / 100 * bill : 20 / 100 * bill;
console.log(`the bill value was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);