console.log(1 || false);//one is truthy value so will print 1 
console.log('hiii' || false);//will give hiii
console.log(0 || false); //will print false as both are false
console.log(0 || true);//will give true
console.log('hii' || true);//will give hii


//our javaScript engine tries to evalue this expression, it looks at each operand
//if that operand is not a boolean true or false, it will try  to interpret it as truthy or falsey

// 5 falsy values: 0, '', undefined, null, NaN (Not A Number )
//false itself also
//these are the value that produce a false value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));

console.log(Boolean('Jonas'));
console.log(Boolean({})); //{} is empty object a true value

//where is it used->
//const money = 0; //money =0 so one of falsy values ie if statuement not execute and else executes
const money = 100; //money =100 so none of falsy values ie if statuement true and executes
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

//let height =12 
let height = 0;  //height =0 ie falsy statement so move to else block
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
