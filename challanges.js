const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const total = []

for (let i = 0; i <= (bills.length - 1); i++) {
    tips.push(calcTip(bills[i]))
    total.push(tips[i] + bills[i])
}
console.log(bills)
console.log(tips)
console.log(total)