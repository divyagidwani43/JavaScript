// MAP
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}
${map}`);
});


// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique)
currenciesUnique.forEach(function (val1, val2, val3) {
    console.log("value at 2nd place ", val2) //will give set values
    console.log("value at 1st place ", val1) //will give set values
    console.log("value at 3rd place ", val3) //will give set
})