// array => square bracket => collection of elements

// const nums = new Array(1, 2, 3, true, 'hi', 'nihao'); or just do
const myArray = [1, 2, 3, true, 'hi', 'nihao'];
console.log(myArray);  // [ 1, 2, 3, true, 'hi', 'nihao' ]
console.log(myArray[1])  // 2
// **** js : array copy operation makes shallow copy(a copy whose properties share the same reference point means changes made in the copy affect the original one too) not deep copy(properties do not change the same reference point) ****

console.log(myArray.length) // 6


// ARRAY METHODS
myArray.push('pine')  // 1) Add element at the end
console.log(myArray)   //[1, 2, 3, true, 'hi', 'nihao', 'pine']

myArray.pop()  // 2) Remove element from the end
console.log(myArray)   //[1, 2, 3, true, 'hi', 'nihao']

myArray.unshift('apple')  // 3) Add element at the beginning
console.log(myArray)   //['apple', 1, 2, 3, true, 'hi', 'nihao']

myArray.shift()  // 4) Remove element from the beginning
console.log(myArray)   //[1, 2, 3, true, 'hi', 'nihao']

console.log(myArray.includes('hi'))  // 4) Check if element is present in array
console.log(myArray.indexOf('hi'))  // 5) Find index of element in array (if not present, returns -1)

console.log(myArray.join('&'))  // 6) Join elements of array with a separator

const newArray = myArray.join()
console.log(myArray)  // [ 1, 2, 3, true, 'hi', 'nihao' ]
console.log(newArray)  // 1,2,3,true,hi,nihao (converted to string)

console.log(myArray.reverse())  // 7) Reverse the array

console.log(myArray.slice(1, 3))  // 8) Slice the array (start, end) (end not included) (sliced the reversed array)  (does not change the original array)


// slice and splice ****** important ******
// slice => does not change the original array
// splice => changes the original array
console.log('1) ', myArray);

const myNewArray = myArray.slice(1, 3);  // returns a new array that is a section of the original array
console.log('slice: ',myNewArray);
console.log('2) ', myArray);

const myNewArray2 = myArray.splice(1, 3);  // removes elements from the original array 
console.log('splice: ',myNewArray2, 'these are deleted elements');
console.log('3) ', myArray, 'original array w/o deleted elements');

// NOTE :
// slice Method :
/*
Purpose: To create a new array by extracting a section of an existing array.
Syntax: array.slice(start, end)
Parameters: start - The index at which to begin extraction (inclusive). end - The index at which to end extraction (exclusive).
Returns: A new array containing the extracted elements.
Original Array: Not modified / unchanged.
*/

// splice Method :
/*
Purpose: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
Parameters: start — The index at which to start changing the array.  deleteCount — The number of elements to remove.  item1, item2, ... - The elements to add to the array, beginning from the start index. If no elements are specified, splice only removes elements.
Returns : An array containing the elements that were deleted.
Original Array: Modified / changed.
*/
