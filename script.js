// If or Else statment

const hour = 10

//Checking if the clock is less than 12
if (hour < 12) {
    console.log("Good morning")
} else if (hour === 12) {
    //Checking if the clock is 12 
    console.log("The clock is 12!")
} else if (hour > 14 && hour < 18) {
    //Checking if the clock is between 14 and 18
    console.log("The clock is between 14 and 18")
} else {
    //Checking out if the time is past 12
    console.log("Good day")
}
//
//

//Simple calculator
const calculator = document.querySelector("#calculator").value;
console.log(calculator)

calculator.addEventListener("click", function (){
    const calculatorValue = document.querySelector("#calculator").value;
    console.log(calculatorValue)
}) 

const num1 = 10
const num2 = 50
let sum;

if (num1 + num2) {
    sum = num1 + num2
    console.log(sum)
} else if (num1 - num2) {
    sum = num1 - num2
    console.log(sum)
} else if (num1 * num2) {
    sum = num1 * num2
    console.log(sum)
} else if (num1 / num2) {
    sum = num1 / num2
    console.log(sum)
} else {
    sum = "Error"
    console.log(sum)
}