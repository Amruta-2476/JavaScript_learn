// object declaration as a constructor
const tinderUer = new Object();  // singleton object
tinderUer.id = '101AD'
tinderUer.name = 'Johnny'
tinderUer.isLoggedIn = false
// console.log(tinderUer)

const regularUser = {
    email: 'random@gmail.com',
    fullname: {
        userfullname: {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.lastName)

//combine objects : using Object.assign(target, source1, source2, ...)
const obj1 = { 1: 'a', 2: 'b', 3: 'c' }
const obj2 = { 4: 'd', 5: 'e', 6: 'f' }
const obj4 = { 7: 'g', 8: 'h', 9: 'i' }
// const obj3 = {obj1, obj2}
/*const obj3 = Object.assign(obj1, obj2) // obj1 is the target so obj1 now has obj1 and obj2
console.log(obj3)
console.log(obj1)*/

// to avoid this use empty object as target
const obj5 = Object.assign({}, obj1, obj2, obj4)
console.log(obj5)
console.log(obj1)


// SECOND METHOD TO COMBINE OBJECTS : using spread operator
const obj6 = { ...obj1, ...obj2, ...obj4 }  // ** this is better
console.log(obj6)


const users = [  // ARRAY OF OBJECTS
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Annie'
    }
]
console.log(users[1].name)


console.log(tinderUer)
console.log(Object.keys(tinderUer)) // returns array of keys in tinderUer
console.log(Object.values(tinderUer)) // returns array of values in tinderUer
console.log(Object.entries(tinderUer)) // returns array of arrays of key-value pairs in tinderUer