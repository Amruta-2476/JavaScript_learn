// objects : objects are collection of key value pairs
// two ways to declare : as a literal or as a constructor

// singletons : objects with only one instance. when you declare an object as a literal, it is not a singleton

// using constructor : creates singleton
// Object.create()

// SYMBOL : used to create unique keys for objects
const mySym = Symbol('key1')
// add symbol in the object keys (interview)

// object literals : key-value pairs
const user = {
    [mySym]: 'value1',  // symbol key
    firstName: 'John',
    lastName: 'Doe',
    age: 40,
    email: 'amr004@gmail.com',
    lastLoginDays: ['mon', 'tue', 'fri'],
}
console.log(user.email)  
// or
console.log(user['email'])  // use this 
console.log(typeof (user[mySym]))  

user.email = 'amruta004@gmail.com'
console.log(user['email'])
// to lock the object so that no one can change the object
// Object.freeze(user)
user.email = 'amtutapawar004@gmail.com'  // this will not change the value
console.log(user) 


user.greetings = function () {
    console.log('hello user')
}
console.log(user)
console.log(user['greetings']) // does not work [Function (anonymous)] : we get the reference to the function
console.log(user.greetings)   //does not work [Function (anonymous)] : we get the reference to the function
console.log(user.greetings())  // works => hello user undefined
// why undefined : because the function does not return anything

user.greetings2 = function () {
    console.log(`hello ${this.firstName}`) // this refers to the same object user
}
console.log(user.greetings2())  // works => hello John undefined
