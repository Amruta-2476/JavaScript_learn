// shopping cart : in this we don't know the exact no.of parameters ie no.of items whose price we need to calculate

// so we use REST OPERATOR (...x)
// this ... is rest and spread operator (they are same but used in different in use case)
// rest operator is used to pass a variable no.of arguments to a function
function calculateCartTotal(...num1) {
    return num1
}
console.log(calculateCartTotal(30, 100, 250, 60, 5))  // array => [ 30, 100, 250, 60, 5 ]

// we can also use rest operator with other parameters
function calculateCartTotal2(discount, tax, ...num1) {
    return num1
}
console.log(calculateCartTotal2(100, 18, 1901, 608))  // array => [ 1901, 608 ]



//pass an object in a function
const user = {
    name: 'John',
    age: 30
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`)
}
handleObject(user)  // Username is John and age is 30



// pass an array in a function
const arr = [1, 2, 3, 4, 5]
function handleArray(anyArray) {
    return anyArray[2]
}
console.log(handleArray(arr))  // 3
