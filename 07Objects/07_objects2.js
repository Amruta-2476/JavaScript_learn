// OBJECT LITERALS : key-value pairs
const person = { 
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person)
console.log(person.firstName, person.lastName)

console.log(person.hobbies[1])  // movies
console.log(person.address.street)  // 50 Main St


// ***** DESTRUCTURING :to pull out some properties from an object and assign them to variables  *******
const { firstName, lastName, address: { city } } = person
console.log(firstName)  // John
console.log(city)  // Boston
console.log(lastName)  // Doe