// nested scope 
function one() {
    const username = 'john'
    
    function two() { 
        const website = 'www.youtube.com'
        console.log(username)
    }
    // console.log(website) // ReferenceError: website is not defined

    two()
}
one()


if (true) {
    const username = 'amruta'
    if(username === 'amruta') {
        const website = 'www.google.com'
        console.log(username + website)
    }
    // console.log(website) // ReferenceError: website is not defined
}
// console.log(username) // ReferenceError: username is not defined



// **************** interesting ********************
// **************** HOISTING first overview ********************
console.log(addOne(6)) // works fine : 7
function addOne(num) {
    return num +1
}

addTwo(5)  // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {   // anonymous function , expression; variables can hold functions too
    return num + 2
}
