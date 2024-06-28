// strings
const name = 'John';
const age = 101;

//concatenation
console.log(name + ' is ' + age + ' years old.');
console.log(`${name} is ${age} years old.`);  // **** Template string of ES6 ****
// op of both => John is 101 years old.

// length of string
console.log(name.length); // 4

// toUpperCase toLowerCase
console.log(name.toUpperCase()); // JOHN

//substring (start, end) => end is excluded
console.log(name.substring(0, 2)); // Jo

//split
console.log(name.split('')); // [ 'J', 'o', 'h', 'n' ]
const str = 'hello, hi, hola, ciao';
console.log(str.split(','))


