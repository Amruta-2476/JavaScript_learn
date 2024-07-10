// automatic garbage collection
// +++++++++++++++++++ MEMORY +++++++++++++++++++
// stack memory, heap memory

// 1) stack memory : in primitive data types, the value is stored in stack memory. we get a copy of the variable

// 2) heap memory : in reference(non-primitive) data types, the value is stored in heap memory. we get a reference to the original variable

// >> primitive
let myName = 'Amruta'
let myNameCopy = myName  /* here we have been given a copy of myName, not original */
// console.log(myNameCopy) // Amruta
myNameCopy = 'Amu'
console.log(myNameCopy) // Amu
console.log(myName) // Amruta
/* the original value doesn't change */



// >> reference(non-primitive)
let userOne = {
    email: 'user@gmail.com',
    upi: 'user@ok'
}
let userTwo = userOne
// console.log(userOne, userTwo) // same
userTwo.email = 'amruta@gmail.com'
console.log(userOne, userTwo)    // { email: 'amruta@gmail.com', upi: 'user@ok' } { email: 'amruta@gmail.com', upi: 'user@ok' }
/* original value is changed */