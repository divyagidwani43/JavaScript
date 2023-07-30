const anyStr = 'TAP Air Portugal';
const StrWthNum = 'A320A';


//INDEX
console.log(anyStr[0]) //to access a certain letter in str
console.log("str here"[2])
console.log(`The character at index 1   is '${anyStr.charAt(1)}'`);


// NUM STRING 
console.log(StrWthNum[2] + 1, typeof StrWthNum[2]) //convert to num type to operate arithmatic operations
console.log(Number(StrWthNum[2]) + 1) //num str we can perform arithmatic calc


// LENGTH
console.log(anyStr.length)


// INDEX OF 
console.log("anyStr.indexOf(\"T\")", anyStr.indexOf("T")) //will display the index of that letter
console.log(StrWthNum.lastIndexOf("A")) //find A from last
console.log(StrWthNum.indexOf("A"))
console.log(anyStr.indexOf("Portugal"))
console.log(StrWthNum.indexOf("Portugal")) //if not in string it will give -1

//index
// SLICE
console.log(anyStr.slice(3)) //the begin index will be 3 not 0 , 3 included
// this doesn't change the original string as it is not possible to mutate primitives but this returns a new string
console.log(anyStr.slice(3, 6)) //index start at 3 end at 6

// get string frm 0 to first space ir tap
console.log(anyStr.slice(0, anyStr.indexOf(" ")))
console.log(anyStr.slice(anyStr.lastIndexOf(" ") + 1))

console.log(anyStr.slice(-3)) //will index from end


// TO LOWER AND UPPER CASE
console.log(anyStr.toLowerCase()) //will convert all to lower case
console.log(anyStr.toUpperCase())

console.log(anyStr.slice(0, 1).toUpperCase() + anyStr.slice(1).toLowerCase()) //first letter caps only


// TRIM
const strWthSpce = "      hi!        "
console.log(strWthSpce)
console.log(strWthSpce.trim())
console.log(strWthSpce.trimEnd())
console.log(strWthSpce.trimStart())

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
console.log(email, " must be same ", loginEmail.toLowerCase().trim())


// REPLACE PART OF STRINGS
const inr = 'Rs 1000'
const dollar = inr.replace('Rs', "$").replace("1000", 1000 / 75)
console.log(dollar)
// returns a new string not replace the old so we can directly do console log

const str = "hey hii hey"
console.log(str.replace("hey", "namaste"))//will only change one hey finding from start
// will replace all occurances
console.log(str.replaceAll("hey", "namaste"))
console.log(str.replace(/hey/g, "namaste"))


// INCLUDES
console.log(str.includes("hi"))
console.log(str.includes("hy")) //string does have hy but its hey so its false


// START WITH END WITH
console.log(str.startsWith("he"))
console.log(str.endsWith("ey"))


// SPLIT
const str2 = "Socks and camera"
console.log(str2.split(" and ")) // will split the string at and create an array of values
const [item1, item2] = str2.split(" and ")
console.log(item1, item2)

const naame = "divya gidwani"
const [first, last] = naame.split(" ")
console.log(first, last, naame.split(" "))

// JOIN
const naameJoin = ["ms".toUpperCase(), first.toUpperCase(), last.toUpperCase()].join("--any--")
console.log(naameJoin)

const str1 = 'Hello';
const str22 = 'World';
console.log(str1.concat(' ', str22));
// Expected output: "Hello World"
console.log(str22.concat(', ', str1));
// Expected output: "World, Hello"


// PADDING
const mess = "go to gate 23! "
console.log(mess.padStart(25, "anySymbol ")) //will make size of string 25 by adding + in front
console.log(mess.padEnd(25, "+")) //will add in end

// show only the last four digit of credit card
const cardNo = '2334 5443 6676'
console.log(cardNo.slice(-4).padStart(cardNo.length, "*"))


// REPEAT
const mess3 = "all planes delayed\n"
console.log(mess3.repeat(2))
function mess2(n) {
    const mess2 = `there are ${n} planes delayed ${'✈️'.repeat(n)}`
    return mess2;
}
console.log(mess2(3))





// EXPLAIN - WHY ALL THIS WORKS
// javas converts string from primitive type to reference when methods are called on it and converts a string to object
console.log(new String("divya"))
console.log(typeof new String("divya"))

// prac
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    // if we dont convert to lower case Knife would be allowed as its case sensitive
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

const capitalizeName = function (name) {
    const split = name.split(" ")
    const capsArr = []
    // console.log(split[0])
    for (let i = 0; i < split.length; i++) {
        const namUpdated = (split[i].slice(0, 1).toUpperCase() + split[i].slice(1))
        capsArr.push(namUpdated)
    }
    console.log(capsArr.join("-"))
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

const capitalizeName2 = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
        // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};
capitalizeName2('jessica ann smith davis');
capitalizeName2('jonas schmedtmann');

// EXTRAS
const worldString = "hello"
console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>

const stringObj = new String('foo');
console.log(stringObj);
// Expected output: String { "foo" }
console.log(stringObj.valueOf());
// Expected output: "foo"
