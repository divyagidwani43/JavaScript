'use strict';

function one(paraOne) {
    let varOne = `varOne `;
    console.log(paraOne, varOne, globalDeclare);

    function inOne() {
        let varInOne = 'varInOne';
        console.log(paraOne, varOne, varInOne, globalDeclare);
        if (paraOne == 'paraOne') {
            var varCreated = 'varCreated';
            const ifState = 'ifState';
            console.log(paraOne, varOne, varInOne, ifState, varCreated, globalDeclare)
            // we can declare same name variables till the are in diff block not accessible to each other
            // we can also have diff funtion with same parameter names
        }
        console.log(varCreated);
        // var created in if can be accessed outside if block but only outside if block not outside function block
    }

    // none of variables declared in inONE and if can be accessed here in parent except for var one
    inOne()
    return varOne;
}

// one(4) //error must be called after gloabal var as it is used in this
const globalDeclare = 'globalDeclare';
one('paraOne');