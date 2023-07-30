
const oneWord = function (str) {
    return str.replaceAll(" ", '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    // console.log(others, ...others)
    return [first.toUpperCase(), ...others].join(' ');
};
console.log(oneWord("javaScript is hard"))
console.log(upperFirstWord("javaScript is hard"))

// HIGH - ORDER FUNCTION
const transform = function (str, fn) {
    console.log(str)
    console.log(fn(str))
    console.log("fn.name = ", fn.name)//will give the original func name fn is copy of
}
transform("javaScript is hard", oneWord)
//function given as argument = CALLBACK FUNC
transform("javaScript is hard", upperFirstWord)
//instead of writing thw whole function code of upperFirst word
// we jusr pass in into func using arguments 

function high5() {
    console.log("👋".repeat(7))
}
document.body.addEventListener("click", high5)