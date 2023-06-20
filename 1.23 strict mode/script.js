// Activating Strict Mode there must be no code above stric mode activation comments are allowed
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

/*when strict is mode is deactivated try commenting out 2nd line and see console
nothing would print as hasDriversLicense is still false and doesnt turn true dur to error in if statement
but activated mode will tell us that error if statement has a new variable thats not been used helping us catch the error
*/

//const interface = 'Audio';
// const private = 534;
//will error as interface is a possible keyword or reserve word that might be used in future
