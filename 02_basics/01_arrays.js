// node 02_basics/01_arrays.js

//Arrays

// ways to declare array

const myarr=[0,1,2,3,4,5]

/*

const myheros=["shaktiman","aryamaan","juniorjee"]

const myarr2= new Array(1,2,5,8,9)  // diffrent method to declare an array in js


console.log(myarr[3])
console.log(myheros[2])
console.log(myarr2[3])  // we can access the element declared in array by providing the index of that number

*/

// if we want to access all the element in the array than we simply write

// console.log(myarr)

// array methods

// array in javascript is not fixes 

/*
myarr.push(6)
myarr.push(7)
myarr.push(8)
myarr.pop()     // no need to pass any value it is default and will pop the last value in array
myarr.pop()
*/

/*

myarr.unshift(9)  // will add 9 in staring by shifting all the values this is time consuming hence not preferred
console.log(myarr)


myarr.shift()       // just like pop but it remove first element unlike pop
console.log(myarr)

console.log(myarr.includes(4))  // will return true because this cheks whether the element present in the array or not

console.log(myarr.includes(9)) // will return false as the element not present in the aaray

console.log(myarr.indexOf(4))  // return the index of the element , if the element doesnt exist it will simply return -1

const newarr=myarr.join()

console.log(myarr)
console.log(newarr)
console.log(typeof newarr)  // it will join new array and convert it to string automatically

*/

// slice , splice

console.log("A" , myarr);

const myn1=myarr.slice(1,3)   // slice operation will not manipulate original array it will just return the element present in between the range will not include the last index

console.log(myn1)
console.log("B",myarr);       

const myn2=myarr.splice(1,3)  // where as in splice operation it manipulate the original array and also include the last indexed element for better understanding run the code to get clarification
console.log("c",myarr)
console.log(myn2)
