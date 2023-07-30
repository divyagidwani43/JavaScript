// FIRST ORDER
const add = (a, v) => a + v
console.log(add(2, 1))

console.log(add(2, add(2, 2)))

const count = {
    value: 23,
    inc: function () { this.value }
}

// HIGH ORDER
const counts = function (b) {
    b = 0;
    return (function () {
        console.log(1 + 2);
    })
}
counts(9)