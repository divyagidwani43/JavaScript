'use strict';

function one(argumentInOne) {
    let variableOne = `variable in one() , using let  `;
    console.log("one = ", argumentInOne, variableOne, globalDeclare);

    function two() {
        let variabletwo = 'var in two() thats in one() , using let';
        console.log(argumentInOne, variableOne, variabletwo, globalDeclare);
        if (argumentInOne == 'argumentInOne') {
            var varCreated = 'variable in if else in two() that\'s in one(), useing var';
            const variableIfElse = 'variable in if else in two() that\'s in one(), useing const';
            console.log(argumentInOne, variableOne, variabletwo, variableIfElse, varCreated, globalDeclare)
            // we can declare same name variables till the are in diff block not accessible to each other
            // we can also have diff funtion with same parameter names
        }
        console.log(varCreated);
        // var created in if can be accessed outside if block but only outside if block not outside function block
    }

    // none of variables declared in two and if can be accessed here in parent except for var one
    two()
    return variableOne;
}

// one(4) //error must be called after gloabal var as it is used in this
const globalDeclare = 'globalDeclare';
const globalDeclareValueChangeInTwo = 'globalDeclareValueChangeInTwo';
one('argumentInOne');


{
    const COnstVar = "this cant be accessed outside {} as well , created using const"
    console.log(COnstVar)
    var varVar = "can be accessed outside {} as well , created using var"
}
console.log(varVar)
// console.log(COnstVar)
// error