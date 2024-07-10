// STRICT CHECK //

// ===
// The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

console.log(2 == '2') // true because '2' is converted to 2 number
console.log(2 === '2') // false because of strict check, types are different, it checks data type as well. it doesn't convert