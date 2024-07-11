// reusablity of code
function sayMyName() {
    console.log("Hello, my name is Amruta");
}
sayMyName()  // function execution



function addTwoNums(num1, num2) {  // PARAMETERS: GIVEN WHEN FUNCTION IS DEFINED
    console.log(num1 + num2)
}
addTwoNums(10, 3)  // ARGUMENTS: GIVEN WHEN FUNCTION IS CALLED
addTwoNums(3, '5')
addTwoNums(3, 'a')
const result = addTwoNums(3, 5)  // => 8
console.log(result)  // => undefined : AS FUNCTION IS NOT RETURNING ANYTHING



function addTwoNums2(num1, num2) {  // PARAMETERS: GIVEN WHEN FUNCTION IS DEFINED
    return num1 + num2
    console.log('this will not be executed as it is after return')
}
const result2 = addTwoNums2(10, 40)  
console.log(result2)  // => 50




function loginUserMessage(username) {
    if (!username) {
        console.log('Please provide username')
    } else {
    return `${username} logged in successfully`
    }
}
console.log(loginUserMessage('Amruta'))
console.log(loginUserMessage())  // => undefined logged in successfully
// or just pass a default value in the parameter function loginUserMessage(username = 'Guest') {