// for of
const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i)
}

const greeting = "Hello World!"
for (const i of greeting) {
    console.log(i)
}

// ***** maps: key value pair ******
const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('AU', 'Australia')
map.set('IN', 'India') // won't add duplicate key
console.log(map)
 /*
 Map(4) {
    'IN' => 'India',
    'US' => 'United States',
    'UK' => 'United Kingdom',
    'AU' => 'Australia'
  }
 */

  for (const [key, value] of map) {
    console.log(key, value)
}
 
