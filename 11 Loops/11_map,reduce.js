// 2) map : returns a new array with the results of calling a provided function on every element in the array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map( (num) => num * 2 )  // returns these values  // or
const newNums = myNums.map( (num) => { return num * 2 })  
console.log(newNums)

// chaining 
const newNums2 = myNums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50)
console.log(newNums2)



// 3) reduce : executes a reducer function on each element of the array, resulting in a single output value

// ==> used in shopping cart, calculating total price, etc

const myNums2 = [1, 2, 3, 4, 5]
const sum = myNums2.reduce((acc, currentVal) => {
    console.log(`acc: ${acc}, currentVal: ${currentVal}`)
    return acc + currentVal
}, 0)   // 0 is the initial value of acc
console.log(sum)   //=> sum of all elements in the array 15