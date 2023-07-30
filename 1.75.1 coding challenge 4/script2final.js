const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


// '_ Delayed_Departure ;fao 93766109   ;txl 2133758440 ;11 : 25
// +_ Arrival           ;bru 0943384722 ;fao 93766109   ;11 : 45
// +_ Delayed_Arrival   ;hel 7439299980 ;fao 93766109   ;12 : 05
// +_ Departure         ;fao 93766109   ;lis 2323639855 ;12 : 30   ';

const namePart = flights.split("+_")
// console.log(namePart)

const split3 = []
for (n of namePart) {
    //removing all unwanted things like _  and :
    split3.push(n.replaceAll("_", " ").replaceAll(":", "h").replaceAll("Delayed", "🔴 Delayed"))
}
// console.log("split3", split3)

for (n of split3) {
    // getting from and to values
    const str = (n.slice(n.indexOf(";"), n.lastIndexOf(";")))
    // console.log(str.slice(str.lastIndexOf(";")))
    const str2 = (str.slice(str.lastIndexOf(";")))
    // console.log(str, "&", str2)
    const strRetrived = (str.slice(1, 4))
    const strRetrived2 = (str2.slice(1, 4))
    // console.log(strRetrived, "&", strRetrived2)

    // split more from ; and final str
    const split22 = (n.split(";"))
    // console.log("split22", split22)
    const finalStr = (`${split22[0]} from ${strRetrived.toUpperCase()} to ${strRetrived2.toUpperCase()} (${split22[3]})`)
    console.log(finalStr.padStart(44, " "))
}
// console.log("🔴 Delayed Departure from FAO to TXL (11h25)".length)
