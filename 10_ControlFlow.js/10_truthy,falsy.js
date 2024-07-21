const userEmail = 'xyz@gmail.com'
// const userEmail = '' // falsy value => we assumed that empty string is falsy value
// const userEmail = [] // truthy value => we assumed that empty array is truthy value

if (userEmail) {  // here we didn't compare anything, we assumed that the string is TRUE value => this is called TRUTHY value
    console.log('GOT user email');
} else { 
    console.log('No user email');
}

// falsy values:=>   0, '', null, undefined, NaN, false, -0, 0n(BigInt)
// truthy values:=>  everything else other than falsy values eg.   '0', ' ', [], {}, true, 1, -1, 0.1, 'false', 'true', 'undefined', 'null', 'NaN', 'Infinity', '-Infinity', '0n', function(){}  etc.


// to check whether array or object is empty
const courses = []
if (courses.length === 0) {
    console.log('No courses available');
}

const users = {}
if (Object.keys(users).length == 0) {
    console.log('No users available');
}  // bcoz Object.keys(users) will return an array of keys of object, if object is empty then array will be empty, so length will be 0


// >>>>> nullish coalescing operator (??) =>  returns its right-hand operand when its left-hand operand is null or undefined, and otherwise returns its left-hand operand. This operator is useful for providing default values to variables.
let val1;
// val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
console.log(val1)

const name = undefined;
const defaultName = "Guest";
const displayName = name ?? defaultName;
console.log(displayName); // Output: "Guest"



// >>>>> ternary operator
// condition ? true : false
const price = 100
price>=90 ? console.log('price is greater than 90') : console.log('price is less than 90')