// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
// will only short circuit if value of restaurant.numGuests is null or undefined not at 0 or any other falsy
console.log(guestCorrect);
