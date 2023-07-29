const map_name = new Map([
    ["key value", "value"],
    [1, "c"],
    [2, "javaScript"],
    [3, { 1: "html", 2: "css" }],
    [4, "Java"]

])
let keyyy = 0;
document.querySelector('.one').addEventListener('click', function () { keyyy = 1; console.log(keyyy) })
document.querySelector('.two').addEventListener('click', function () { keyyy = 2; console.log(keyyy) })
document.querySelector('.three').addEventListener('click', function () { keyyy = 3; console.log(keyyy) })
document.querySelector('.four').addEventListener('click', function () { keyyy = 4; console.log(keyyy) })

for (const [key, value] of map_name)