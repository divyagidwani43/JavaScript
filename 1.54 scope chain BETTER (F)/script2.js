let global;
function one() {
    global = 'global'//any data type
}
one()
function two() {
    console.log(global)
}
two()