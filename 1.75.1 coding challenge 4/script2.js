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

// const split1 = [];
// for (n of namePart) {
//     // console.log(n)
//     split1.push(...n.split(";"))
// }
// console.log(split1)

const split3 = []
for (n of namePart) {
    split3.push(n.replaceAll("_", " ").replaceAll(":", "h").replaceAll("Delayed", "🔴 Delayed"))
}
console.log("split3", split3)

const up = []
for (n of split3) {
    const str = (n.slice(n.indexOf(";"), n.lastIndexOf(";")))
    // console.log(str.slice(str.lastIndexOf(";")))
    const str2 = (str.slice(str.lastIndexOf(";")))
    const strRetrived = (str.slice(1, 4))
    const strRetrived2 = (str2.slice(1, 4))
    // console.log("from ", strRetrived.toUpperCase(), "to", strRetrived2.toUpperCase())
    const updated = `from ${strRetrived.toUpperCase()} `
    const updated2 = `to ${strRetrived2.toUpperCase()}`
    up.push(updated)
    up.push(updated2)
    const split22 = (n.split(";"))
    // console.log("split22", split22)
    console.log(`${split22[0]} ${updated}${updated2} (${split22[3]})`)
}
// console.log("up", up)


for (n of split3) {

    // console.log(`${split22[0]} ${up[0]}`)
}

// let t = 0;
// let tt = 4;

// for (n of split3) {
//     const str4 = (n.split(";"))
//     t++;
//     tt++;
//     // console.log(t - 1, tt - 1)
//     // console.log(str4[1])

//     for (let i = 1; i == 1 || i == 2; i++) {
//         // console.log(str4[i])
//         // if (i < 3) str4[i] = up[t - 1]
//         // else str4[i] = up[tt - 1]
//         // console.log(str4[i])
//     }
//     // console.log(str4)
// }
