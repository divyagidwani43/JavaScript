// Logical Assignment Operators
const rest1 = {
    name: 'Capri',
    numGuests: 20,
    numGuests2: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10; same-->
rest1.numGuests ||= 10;
// rest2.numGuests = rest2.numGuests || 10; same-->
rest2.numGuests ||= 10;


// these would take 0 as falsy while we want 0 as guest number so use nullish
rest1.numGuests2 ??= 10;
rest2.numGuests2 ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// the baove would give undefined as owner property value but below would return nothing
rest1.owner &&= '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
