let value = 3
let negValue = -value
console.log(value, negValue)
console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 2)
console.log(10 / 3)  // gives not just the int part, but full quotient
console.log(10 % 3)
console.log(2 ** 3)

let str1 = 'Hello'
let str2 = ' World'
console.log(str1 + str2)

console.log('1' + 2)  // 12
console.log('1' + 2 + 3)  // 123
console.log(3 + 2 + '1')  // 51
// why ?
// if a string is found first, then the + operator is considered as concatenation operator throughout


console.log(3 + 4 * 4 - 2 / 4 % 3)   // 3 + 16 - 0.5 % 3 => 3 + 16 - 0.5 => 18.5
console.log(3 + 4 / 4 - 2 % 4 * 3)  // 3 + 1 - 2 % 4 * 3 => 3 + 1 - 2 * 3 => 3 + 1 - 6 => -2


// **** 
let num1, num2, num3
num1 = num2 = num3 = 2 + 3
console.log(num1, num2, num3)  // 5 5 5

let gameScore = 0
gameScore += 10
console.log(gameScore)  // 10
gameScore++
console.log(gameScore)  // 11


// increment prefix and postfix
// the prefix (++score) increments the value before using it in an expression, while the postfix (score++) increments the value after using it in an expression
let score = 100
console.log(++score)  // 101
console.log(score)   // 101

let score2 = 200
console.log(score2++)  // 200     // first the value is used in the expression, then it is incremented
console.log(score2)  // 201
