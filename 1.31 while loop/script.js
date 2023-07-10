// The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;                                                       //declare
while (rep <= 10) {                                                //condition in while brack
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);   //execute
    rep++;                                                         //add to avoid infinite loop
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

