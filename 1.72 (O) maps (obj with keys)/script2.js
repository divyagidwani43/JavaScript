
const restrau = new Map();
restrau.set("name", "Classico Italiano")
    .set("locations", "Via Angelo Tavanti 23, Firenze, Italy")
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("openHour", { thu: { open: 12, close: 22, }, fri: { open: 11, close: 23, }, sat: { open: 0, close: 24, }, })
    .set("order", function order(starterIndex, mainIndex) { return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; },)
    .set(true, "we're open")
    .set(false, "we're close")
console.log(restrau)

const time = 21;
// print open if open otherwise close on thu
let ifOpenOnThu = (restrau.get("openHour")).thu
console.log(ifOpenOnThu)
let whenOpen = (restrau.get("openHour")).thu.open
let whenClose = (restrau.get("openHour")).thu.close
console.log(whenClose, whenOpen)
console.log(restrau.get(time > whenOpen && time < whenClose))
// (time > whenOpen && time < whenClose) if true i.e time is b/w open nd close hours so it'll return value in front of true key value i.e we're open
