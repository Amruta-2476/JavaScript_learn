// dates
let myDate = new Date(); // date object instance
console.log(myDate);   // => 2024-07-05T14:07:50.705Z 
console.log(myDate.toString())  // => Fri Jul 05 2024 19:37:50 GMT+0530 (India Standard Time)  => string representation of the date


console.log(myDate.toDateString()); // Logs the date in the format "Fri Jul 05 2024"
console.log(myDate.toISOString()); // Logs the date in ISO 8601 format => 2024-07-05T14:07:50.705Z
console.log(myDate.toLocaleString()); // Logs the date in the local time zone => 7/5/2024, 7:37:50 PM
console.log(myDate.toJSON()); // Logs the date in JSON format => 2024-07-05T14:07:50.705Z
console.log(myDate.toLocaleDateString()); // Logs the date in the local time zone => 7/5/2024

console.log(myDate.getFullYear()); // Logs the year (2024)
console.log(myDate.getMonth() + 1); // Logs the month (7, note: months are 0-indexed)
console.log(myDate.getDate()); // Logs the day of the month (5)

console.log('day', myDate.getDay()); // index of day
// to get string of day 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (let i = 0; i < days.length; i++) {
    if (myDate.getDay() == i) {
        console.log('day', days[i]);
    }
}
 
console.log(myDate.getHours()); // Logs the hour (19)
console.log(myDate.getMinutes()); // Logs the minutes (37)
console.log(myDate.getSeconds()); // Logs the seconds (50)

// to get specific formats like mm-dd-yy etc
let createDate = new Date('07-05-2024');
console.log(createDate.toLocaleString());
console.log(createDate.toString());


// timestamp
let timestamp = Date.now(); // timestamp in milliseconds
console.log(timestamp); // Logs the current timestamp in milliseconds


console.log(myDate.toLocaleString())
console.log(myDate.toLocaleString('default', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
}))