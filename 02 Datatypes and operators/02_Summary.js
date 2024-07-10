// 2 types : Primitive and Non-Primitive
// based on call by value and call by reference
// ****** Primitive data types are passed by value (if u copy them from somewhere,a copy of the value passed to it. Changes made to the copy of the value will not affect the original value. Stored directly in mem location.)
// Non-Primitive data types are passed by reference (if u copy them from somewhere, it receives a reference (address) to the actual data. Changes made to the reference will affect the original value. Stored in heap memory. stored as references to the memory location where the data is actually stored.) **********


// Primitive Data Types : Number, String, Boolean, null, undefined, Symbol(uniqueness), BigInt
// Non-Primitive(reference) DataTypes : Object, Array, Function


/* 
#### 
@@@@@ 

JS is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. 
The data type of the variable is determined at the time of assignment. 

@@@@@ 
#### 
*/

// Symbols are used to create unique identifiers for objects.
// They are created using the Symbol() function.
// Symbols are immutable and unique.
// Every time you create a new symbol, a new and unique value is returned.
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id, id2, id === id2) // false, because they are unique


// Arrays are special kinds of objects.
const arr = [1, 2, 3, 'a', 'b', 'c']
console.log(arr)

// objects are key value pairs
const obj = {
    name: 'John',
    age: 30
}
console.log(obj)

// Functions are objects too
function fn() {
    return 1
}
console.log(fn())
console.log(typeof fn) // function