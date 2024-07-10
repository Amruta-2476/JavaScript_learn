const score = 100
console.log(score)
// to explicity specify the variable as a number, use the Number() function
const balance = new Number(400.645664)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))  //400.65 - toFixed() rounds the number to the specified decimal places

const num1 = 19.3478
const num2 = 129.8478
console.log(num1.toPrecision(2)) //19 - Returns a string containing a number rouded to specified no.of digits.
console.log(num2.toPrecision(3)) //130


const hundreds = 1000000
console.log(hundreds.toLocaleString()) //1,000,000 - Returns a string with a US standard numeric rep (default)
console.log(hundreds.toLocaleString('en-IN')) //10,00,000 - Returns a string with an Indian standard numeric rep



// ++++++++++++++++++++++ MATHS ++++++++++++++++++++++
console.log(Math)  // go to inspect and check the Math object (sine,cosine,hypotenuse,round etc)
console.log(Math.PI) //3.141592653589793
console.log(Math.abs(-100)) //100 = absolute value
console.log(Math.ceil(1.0001)) //2 = rounds UP
console.log(Math.floor(1.9999)) //1 = rounds DOWN
console.log(Math.round(1.4)) //1 = rounds to nearest integer
console.log(Math.round(1.6)) //2

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) //10
console.log(Math.min(4, 5, 6, 7, 8, 9, 10)) //4
console.log(Math.sqrt(121)) //11 = square root

//****** used a lot ****** RANDOM
console.log(Math.random()) //0.123456789 - random number between 0 and 1
console.log((Math.random() * 10) + 1) //random number between 0 and 10 (+1 to avoid 0)
console.log(((Math.random() * 10) + 1).toFixed(0)) 


//****** used a lot ****** to find a random number between a range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //random number between 10 and 20  (Math.floor to round down to nearest integer)