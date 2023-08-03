const array_name = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = array_name.entries()
console.log(...arr)

let i = 0;
console.log(array_name.length)
array_name.forEach(function () {
    // will run 8 times i.e the length of array 
    console.log(`values = ${array_name[i]} times run =${i + 1}`.padStart(26, " "))
    i++;
})

array_name.forEach(function (any) {
    console.log(any)
    // any are the values of array just like in for of loop above movement takes up values of array
    // console.log(`values = ${any} times run =${i}`.padStart(26, " "))
})


for (const [i, el] of array_name.entries()) {
    if (el > 0) {
        console.log(`${i + 1} You deposited ${el}`);
    } else {
        console.log(`${i + 1} You withdrew ${Math.abs(el)}`);
    }
}

// to get above result using forEach
array_name.forEach(function (value, index, array) {
    // we get above in a specified order only
    console.log(`index = ${index}
and value = ${value}
and array =${array}`)
})
