for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("I'm alive")
    }
    console.log(element)
}

for (let i = 0; i <= 5; i++) {
    console.log(`outer loop ${i}`)
    for (let j = 0; j <=5; j++) {
        console.log(`inner loop ${j} and ${i}`)
    }
}

let myArray = ['flash', 'batman', 'superman']
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}

// break and continue
for (let i = 0; i <= 7; i++) {
    if (i == 5) {
        console.log('detected 5')
        break
    }
    console.log(i)
}
console.log('continue')
for (let i = 0; i <= 7; i++) {
    if (i == 5) {
        console.log('detected 5')
        continue
    }
    console.log(i)
}