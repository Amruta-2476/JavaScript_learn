// var(not used in ES6, coz it has global scope),  let,  const

const accountId = 1453       // const : a constant variable
var accountPassword = 'password@123'  // var : a global variable
let age = 20            // let : a local variable
age = 24
console.log(age)

// let : to reassign the value
// generally use const, if u don't have to reassign it

accountType = 'savings' // no need to declare the variable
console.table([accountId, accountPassword, age, accountType])