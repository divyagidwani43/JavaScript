//REST OPERATOR
// used on left side of = while spread on right side
const arr4 = [1, 2, 3, 4, 5];                                                          //added first
const [a, b, c, ...others] = [...arr4];
//...arr4 = 1, 2, 3, 4, 5 and a=1 b=2 c=3 and others = [4 5] as array
console.log(others);
console.log(...others);
const [d,              //1
    ,                  //leave 2
    e,                 //3
    ...left            //[4 5]the rest operator will only take up left over elemets in end not the ones skipped
    //,  f             //will error as no variable can have any value after rest operator as it takes up all values that were left so no value to takeup
] = [...arr4];



//declared above
const obj = {
    g: 1,
    b: 3,
    c: 'ee',
};
// const { aa, ...objLeft } = obj; will show all of obj on log for 
// ...objLeft aa must be g matching the g in obj
const { g, ...objLeft } = obj;
console.log(objLeft);


// SEND USING ARRAY TO RECIEVE INPUT IN FUNCTION AS INDIVIDUAL
function sum(...input) {
    // console.log(input)
    let w = 0;
    for (i = 0; i < input.length; i++) w += input[i]; console.log(w)
}
// sum(2, 3, 4, 5)
sum([2, 3, 4])
