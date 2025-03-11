// node 01_basics/02_datatypes.js

"use strict"; // this will treat js code as newer version

// alert(3+3)      // we are using nodejs not browser this will work only in browser here it will give error

// console.log(3+3); console.log("ankit")  // this code is not readable.


let name ="ankit"   // string datatypes
let age=20          // number
let isloggedin=false  // boolean
let state =null

console.table([name,age,isloggedin,state])

// types of DATATYPES.

/*

1> number => 2 to power 53

2> bigint

3> string => ""

4> boolean => true/false

5> null => standalone value

6> undefined => 

7> symbol => unique

8> object

    */

console.log(typeof "ankit")  // will return the type of the data
console.log(typeof null)    // this will return "object" this is one of the demerit of javascript
console.log(typeof undefined) 