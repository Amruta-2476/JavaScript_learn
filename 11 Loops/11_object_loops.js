/*
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
}
for (const [key, value] of myObject) {
    console.log(key, value)   // => TypeError: myObject is not iterable
}
*/

// FOR OF LOOP DOESN'T WORK WITH OBJECTS, IT SAYS OBJECT IS NOT ITERABLE
// TO ITERATE OBJECTS, WE USE  * FOR IN  *  LOOP
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
}
for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`)
}

const programming = ['JavaScript', 'Python', 'Java', 'C#']
for (const key in programming) {
    console.log(key)   // for in loop gives index
    console.log(programming[key])
}


const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('AU', 'Australia')
map.set('IN', 'India') 

for (const key in map) {
    console.log(key)   // map is not iterable
}