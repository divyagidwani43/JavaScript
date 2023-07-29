// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened
//  (no duplicates)
// console.log(gameEvents.values())
// gives all the values
const eventArr = [gameEvents.values()]
// places map iterator that has values inside array
const eventArra = [...gameEvents.values()]
// opens mapiterator or values in array generating array of all values
// console.log(eventArra)
const events = new Set(eventArra)
console.log(events)




// 2. After the game has finished, is was found that the yellow card from
// minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64)
console.log(gameEvents)



// 3. Print the following string to the console: "An event happened, on
//  average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)



// 4. Loop over the events and log them to the console, marking whether
//  it's in the first half or second half (after 45 min) of the game, like
//  this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [key, val] of gameEvents) {
    let i;
    if (key < 45) console.log(`[FIRST HALF] ${key} : ${val}`)
    if (key > 45) console.log(`[SECOND HALF] ${key} : ${val}`)
}