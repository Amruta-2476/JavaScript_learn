const user = {
    username: 'amruta',
    price: 100,

    welcomeMessage: function () {
        // console.log(`Welcome ${username}`)  // here u r basically using user.username but when refering to the current object u should use 'this' keyword
        console.log(`Welcome ${this.username}`)
        console.log(this)  // will print the object
    }
}
user.welcomeMessage()
user.username = 'jatin'
user.welcomeMessage()
console.log(this)  // { } empty object here(bcoz of node) BUT in browser console it will be Window object as that is the global object


function hello() {
    // console.log(this)  // will print the global object
    let name = 'amruta'
    console.log(this.name)  // undefined
}
hello() 



// Arrow functions
const arrowFunc = () => { 
    let name = 'amruta'
    console.log(this.name)  // undefined
}
arrowFunc()  

// explicit return
const addTwo = (num1, num2) => {
     return num1 + num2
}
console.log(addTwo(2, 3))  // 5


// another way of writing arrow function: implicit return
const addTwo2 = (num1, num2) => num1 + num2 // or
// const addTwo2 = (num1, num2) => (num1 + num2 )
console.log(addTwo2(2, 3))  // 5


const greeting = () => ({ usernme: 'amruta', age: 25 })  // returning an object
console.log(greeting())  // { usernme: 'amruta', age: 25 }