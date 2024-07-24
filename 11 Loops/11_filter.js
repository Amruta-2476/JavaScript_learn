// some more on forEach
const coding = ['js', 'python', 'java', 'cpp']
const values = coding.forEach( (item) => {
    console.log(item)
})
console.log(values)  
/*
js
python
java
cpp
undefined  // forEach does not return anything
*/

 
// 1) filter : returns a new array with all elements that satisfy the condition provided by the function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const filteredNums = myNums.filter( (num) => num > 5 )  // returns these values   // or
const filteredNums = myNums.filter((num) => {
    return num > 5
} )  // returns these values
console.log(filteredNums)

const newNums = []
filteredNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )
// 13.00

// example for filtering
const books = [
    { name: 'book1', pages: 400, genre: 'fiction' },
    { name: 'book2', pages: 300, genre: 'history' },
    { name: 'book3', pages: 200, genre: 'sci-fi' },
    { name: 'book4', pages: 100, genre: 'fiction' },
    { name: 'book5', pages: 500, genre: 'sci-fi' },
]
// const fictionBooks = books.filter( (bk)=> bk.genre === 'fiction')  //OR
const fictionBooks = books.filter((bk) => {
    return bk.genre === 'fiction' && bk.pages > 200
})
console.log(fictionBooks)






