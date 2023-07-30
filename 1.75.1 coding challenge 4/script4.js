const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flight = flights.split("+")
for (n of flight) {
    // console.log(n)
    const split = n.split(";")
    // console.log(split)
    const [status, from, to, time] = split

    const finalStr = `${status.replaceAll("_", " ").replaceAll("Delayed", "🔴 Delayed")} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replaceAll(":", "h")})`
    console.log(finalStr.padStart(48, " "))
}
