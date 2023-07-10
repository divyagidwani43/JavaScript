////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// .......
// console.log('Lifting weights repetition 10 🏋️‍♀️');

//for loop keeps running while condition ( variable_name <= 30;) is TRUE
//let variable_name = 1; is the starting value of variable, make sure its let as it will updated after every lopop
//variable_name++ will add 1 every time we exit the loop if we dont increase variable value conditin will always be true
for (let variable_name = 1; variable_name <= 10; variable_name++) {
    console.log(`Lifting weights repetition ${variable_name} 🏋️‍♀️`);
}

for (let rep = 3; rep < 30; rep += 3) {
    console.log(`repetition ${rep} 🏋️‍♀️`);
} //will have endless loop


for (let a = 7; a > -10; a--) {
    console.log(`repetition 🏋️‍♀️`);                                              //if same line is to be repeated console wont display different lines
}
