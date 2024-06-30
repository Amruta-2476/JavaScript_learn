console.log(2 > 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)

//compare different data types
console.log('2' > 1) // true, string '2' becomes a number 2
console.log('01' == 1) // true, string '01' becomes a number 1
// *** Typescript doesn't allow to compare different data types ***


// let's see null
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// *** WHY ? => equality(==) and comparison(>, <, >=, <=)work differently. comparisons treat null as 0, but equality doesn't. Hence null >= 0 is true but null > 0 is false. ***


// let's see undefined
console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined == 0) // false
// WHY ? => undefined is treated as NaN in comparisons & equality. Hence all return false.