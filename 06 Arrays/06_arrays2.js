const marvel_heros = ['ironman', 'thor', 'spiderman']
const dc_heros = ['batman', 'superman', 'wonderwoman']

/*
marvel_heros.push(dc_heros)
console.log(marvel_heros)  // [ 'ironman', 'thor', 'spiderman', [ 'batman', 'superman', 'wonderwoman' ] ]  // nested array
console.log(marvel_heros[3][1])  // superman
*/

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros) 

// can use spread operator too instead of concat (if u drop a glass, it spreads into pieces, similarly, if u drop an array, it spreads into elements)
const allHeros2 = [...marvel_heros, ...dc_heros]
console.log(allHeros2)

// prefer spread operator *******


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_another_array = another_array.flat(1)  // flat method removes nested arrays upto the depth level mentioned in the argument
// if no argument is passed, it removes all nested arrays
console.log(another_array)
console.log(usable_another_array)


// for data scrappeing, flat method is very useful
console.log(Array.isArray('Amruta'))
console.log(Array.from('Amruta')) // converts string to array [ 'A', 'm', 'r', 'u', 't', 'a' ]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  // [ 100, 200, 300 ]  // returns new array from a set of elements
