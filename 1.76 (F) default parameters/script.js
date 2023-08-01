const booking = [];
const func_name = function (
    para1FlightNum
    , para2TicketNum = 1 //default value if not given in function
    , para3price = 199 * para2TicketNum //if value not put it would calculate on its own using para 2  
) {
    const boking = {
        para1FlightNum,
        para2TicketNum,
        para3price
        // we do not need to do para3:para3 enhanced lietrals will name the value para3 on its own as its declared above by that var name
    }
    booking.push(boking)
}
func_name('233f', 23, 23000)
func_name()
func_name("LH111", 3)
// func_name("LH111",,5) //error as we cant skip a para and it wont use default value
func_name("LH111", undefined, 5)//unefined will use the default val for para2 while giving argument to para3
console.log(...booking)
