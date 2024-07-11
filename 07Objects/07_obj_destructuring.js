// ******* DESTUCTURING OBJECTS *******imp
// it is a way to extract multiple properties from an object and assign them to variables
// in react we will get an object, we can destructure it to get the properties we need

// { } means object in destructuring

const course = {
    coursename: 'React in hindi',
    price: 1000,
    duration: '3 months',
    description: 'A course on React'
}
console.log(course.price)  // this 
console.log(course['price'])  // or this
// OR we can destructure the object like this (do this)
const { price, coursename, description } = course
console.log(price)     // do not have to use course.price now
console.log(coursename)
console.log(description)


// we can also rename the variables while destructuring
const { description: desc } = course
console.log(desc)