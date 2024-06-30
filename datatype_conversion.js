// let score = '33'
// if it were 33abc
let score = '33abc'
console.log(typeof score)  // string
console.log(typeof (score))  // string
// can do any of these
// convert string to number
let scoreValue = Number(score)
console.log(typeof scoreValue)  // number
// how is it still a number?
console.log(scoreValue)  // NaN (Not a Number)



// if it were a boolean value
let score2 = true
console.log(typeof score2)  // boolean
// convert boolean to number
let scoreValue2 = Number(score2)
console.log(typeof scoreValue2)  // number
console.log(scoreValue2)  // 1



// convert to string
let someNumber = 5
let someString = String(someNumber)
console.log(typeof someString)  // string

/* ******
'33' => 33
'33abc' => NaN
true => 1 or "jhgf"
false => 0 or ""
***** */