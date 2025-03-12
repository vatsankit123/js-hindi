// node 01_basics/03_conversionoperations.js
/*

let score = "33abc"   // if the value is enclosed in double colon then it is string data type

console.log(typeof score)
console.log(typeof(score))  // 2nd way to know datatype

// let valueinnumber=33   // if the value is not enclosed under double coulmn it is of number type data 

// console.log(typeof valueinnumber)

// more thing can be done 

let valueinnumber= Number(score)

console.log(typeof valueinnumber)

console.log(valueinnumber)   // in js "33abc" will convert in number it will show data type in number but if we want to access the number it will give NAN i.e not a number in output


// note:- for conversion 

// if score ="33" => 33
// "33abc" => NAN

// true=> 1;
// false => 0;



let isloggedin= 1  

let booleanisloogedin =  Boolean(isloggedin)
console.log(booleanisloogedin)

// note :-   // change valueof islogged in you will see the diffrences at the time revision

// 1 => true;
// 0 =>false;
// emptystring =>false;
// "ankit" =>true

*/

// *********************** operations ****************************

let value = 3;
let negvalue = -value

// console.log(negvalue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

let str1="hello"
let str2 = " ankit"

let str3= str1+str2

// console.log(str3)

// console.log("1" + 2)    // output - 12
// console.log(1 + "2")   // output - 12
// console.log("1" + 2 + 2)  // output - 122
// console.log( 1 + 2 + "2")  // output - 32   

// console.log(true);
// console.log(+"")

let gamecounter = 100
// gamecounter++           // read documentation prefix and postfix increament on mdn web doc
++ gamecounter
console.log(gamecounter)

