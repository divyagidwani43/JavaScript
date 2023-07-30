const checkMiddleSeat = function (seat) {
    console.log(seat, typeof seat, seat.slice(-1))
    const middle = seat.slice(-1) == "b" || "e" || "E" || "B" ? "middle seat" : "not a middle seat";
    console.log(middle)
}
checkMiddleSeat(prompt("enter seat number - "))
// console.log('ss')