// arrays

/*multi
line
comments */

// const nums = new Array(1, 2, 3, 4, 5, 'hi', 'nihao');  or just do
const nums = [1, 2, 3, 4, 5, 'hi', 'nihao'];
console.log(nums);  // [ 1, 2, 3, 4, 5, 'hi', 'nihao' ]

// Accessing elements
console.log(nums[1])

// Adding elements to the end
nums.push('pine')  
nums[8] = 'pine'
console.log(nums)   //[1, 2, 3, 4, 5, 'hi', 'nihao', 'pine', 'pine']

// Adding elements at the beginning
nums.unshift('apple')
console.log(nums)   //['apple', 1, 2, 3, 4, 5, 'hi', 'nihao', 'pine', 'pine']

// Removing elements from the end
nums.pop()
console.log(nums)   //['apple', 1, 2, 3, 4, 5, 'hi', 'nihao', 'pine']

//find element in array
console.log(nums.indexOf('hi'))  //6