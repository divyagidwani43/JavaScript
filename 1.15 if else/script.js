const age = 14;
let yearsLeft = 18 - age;
if (age > 18) {
    console.log("can take driving test");
}
else console.log(`not eligible wait ${yearsLeft} years`);

//any variable declared in the if(){} or else{} branckets cant be accessed outside
let birth = 1998;
if (birth <= 2000) {
    let century = 20;
    console.log(century)
}
else {
    let century = 21; //needs redefining
    console.log(century);
}
//    console.log(century); will error
