// for each loop ** important **
const coding = ['js', 'python', 'java', 'cpp']

coding.forEach( function (item) {
    console.log(item)
})
// or arrow function
coding.forEach((value) => {
    console.log(value)
})
// or a function declared outside
function printMe(item) {
    console.log(item)
}
coding.forEach(printMe)


console.log('  ')
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})


console.log(' ')
const myCoding = [   // => used in databases
    {
        langName: 'JavaScript',
        langType: 'Dynamic'
    },
    {
        langName: 'Java',
        langType: 'Static'
    },
    {
        langName: 'Python',
        langType: 'Dynamic'
    }
]
myCoding.forEach( (item) => {
    // console.log(item) // object
    console.log(item.langName)  // JavaScript, Java, Python
})