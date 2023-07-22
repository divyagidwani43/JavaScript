
const a = {                                                                                                    //object name is a they are used just like array to group certain elements or data togethet
    firtName: 'jonas',                                                                                         //these are properties i.e firstName and age and lastName
    lastName: 'Schmedtmann',                                                                                   //order not imp
    birthyear: 1991,
    age: 2023 - 1991,
    friends: ['micheal', ' bob', 'alica'],
    hasDriversLicence: true,
    dk: 44,

    // calcAge: function (birthyear) {                                                                            //its the same as function age = calcAge(birthyear){return 2023-birthyear}         
    //     return 2023 - birthyear;                                                                               //function attached to an object is called method       
    // },                                                                                                         //funtion mus be entered in ax expression manner not declaartion as objects only accept expression as expression produces value held by pro[erty of object

    calcAge2: function () {
        console.log(this)//you ll see that this is a keyword that creates a copy of the object it is called into
        return 2023 - this.birthyear;//just like we access obj properties this is object's copy so access in same way
    }
}

a.calcAge2();
console.log('line change')
console.log(a.calcAge2())
// below is the code answer

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        let BMI = this.mass / (this.height * this.height)
        return BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)///this.bmi here created bmi as property in mark
        return this.BMI;
    }
}
console.log(mark.calcBMI())
console.log(john.calcBMI())
// if (john.calcBMI > mark.calcBMI) console.log(`${john.fullName}'s BMI ${john.calcBMI} is higher than ${mark.fullName}'s ${mark.calcBMI}`)
// else console.log(`${mark.fullName}'s BMI ${mark.calcBMI} is higher than ${john.fullName}'s ${john.calcBMI}`)
//ERROR
if (john.BMI > mark.BMI) console.log(`${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s ${mark.BMI}`)
else console.log(`${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s ${john.BMI}`)

