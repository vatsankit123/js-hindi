// // node 01_basics/08_dates.js

// // dates

// let mydate = new Date()
// console.log(mydate)  // will print date and day in number format 

// console.log(mydate.toString())  // will print date and day in string format which is more readable and clean

// console.log(mydate.toISOString())

// console.log(mydate.toJSON())

// console.log(mydate.toLocaleDateString())

// console.log(mydate.toLocaleString())

// console.log(mydate.toLocaleTimeString())

// console.log(mydate.toUTCString())

// console.log(mydate.toTimeString())

// console.log(mydate.getTimezoneOffset())

// console.log(mydate.getHours())

// console.log(mydate.getDate())

// const istTime = mydate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }); // to get indian time

// console.log(istTime)

// let mycreatedate = new Date(2023,0,23,5,3)  // in js month start with 0 and it will represent january 
// console.log(mycreatedate.toDateString())

// we can create date in multiple format for example

let mycreatedate = new Date("01-01-2023")
console.log(mycreatedate.toDateString())

// time stamp

let mytimestamp = Date.now()
console.log(mytimestamp)

// to get value in miliseconds

console.log(Math.floor(Date.now()/1000))

// some methods in new date

/*

const newdate = new Date()
console.log(newdate)
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getFullYear())
console.log(newdate.getHours())
console.log(newdate.getMilliseconds())

*/

const newdate = new Date()

newdate.toLocaleString('default',{
    weekday: "long",
})




