/* let a = 10  // let : a local variable
const b = 20  // const : a constant variable
var c = 30  // var : a global variable */

let a = 390
if (true) {
    let a = 10  
    const b = 20 
    var c = 30 
}
// console.log(a) // ReferenceError: a is not defined
// console.log(b)  // ReferenceError: b is not defined
console.log(c)  // 30 : coz var is a global variable that is why we don;t use it in ES6

console.log(a) //390
