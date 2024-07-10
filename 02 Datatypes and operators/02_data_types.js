// data types in javascript
// strings , numbers , boolean , null , undefined , object , symbol

const name = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;   //this is also undefined

// symbol is a new data type in ES6 (for uniqueness (in react))

console.log(typeof name);   //string
console.log(typeof age);    //number
console.log(typeof rating); //number
console.log(typeof isCool); //boolean
console.log(typeof x);  //object   //this is an error in javascript. It should be null ==> null is a value
console.log(typeof y);  //undefined
console.log(typeof z);  //undefined