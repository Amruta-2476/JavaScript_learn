// strings
const name = 'john';
const age = 101;

//concatenation
console.log(name + ' is ' + age + ' years old.');
console.log(`${name.toUpperCase()} is ${age} years old.`);  // **** Template string of ES6 (string interpolation with back ticks)****
// op of both => John is 101 years old.

// length of string
console.log(name.length); // 4

// toUpperCase toLowerCase
console.log(name.toUpperCase()); // JOHN

//substring (start, end) => end is excluded
console.log(name.substring(0, 2)); // Jo
console.log(name[0]) // J

//split to array
console.log(name.split('')); // [ 'J', 'o', 'h', 'n' ]
const str = 'hello, hi, hola, ciao';
console.log(str.split(','))

// slice
console.log(name.slice(-3, 2)); // o

//character at
console.log(name.charAt(3)); // n
// index of
console.log(name.indexOf('h')); // 2

// declare a string
const userName = new String('John');
console.log(userName); // [String: 'John']

// trim
const str1 = '   hello    ';
console.log(str1)
console.log(str1.trim()) 

// replace
const url = 'https://www.google.com';
console.log(url.replace('com', 'co.in'))

// includes
console.log(url.includes('google')) // true

