function one(radius) {
    return {
        radius,
        two() {
            console.log('function 2 without function tag name')
        }
    };
}
//CALLING MAIN FUNC
console.log(one(3));

//CALLING THE INSIDE FUNCTION
console.log(one(7).two);

const a = one(7);
console.log(a.two);

