// if
const isuserLoggedIn = true;
const temperature = 20

if ( temperature < 30 ) {
    console.log('This is less than 30');
} else {
    console.log('This is not less than 30');
}


const score = 90
if ( score > 80 ) {
    const power = 'fly'
    console.log(`User power is ${power}`)
} 
// console.log(`User power is ${power}`)


// short hand if notation : implicit scope
const balance = 1000
if (balance > 500) console.log('test'); //here ; is mandatory or use , to write to next line
/*
if (balance == 1000) console.log('test 1'),  // this is not a good practice
console.log('test 2');  */


// nesting
if (balance < 500) {
    console.log('Balance is less than 500')
} else if (balance < 750) {
    console.log('Balance is less than 750')
} else if (balance < 900) {
    console.log('Balance is less than 900')
} else {
    console.log('Balance is less than 1200')
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log('User is logged in and has debit card')
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User is logged in from either Google or Email')
}