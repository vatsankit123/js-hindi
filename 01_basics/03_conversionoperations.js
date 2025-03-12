// node 01_basics/03_conversionoperations.js

let score = "33abc"   // if the value is enclosed in double colon then it is string data type

console.log(typeof score)
console.log(typeof(score))  // 2nd way to know datatype

// let valueinnumber=33   // if the value is not enclosed under double coulmn it is of number type data 

// console.log(typeof valueinnumber)

// more thing can be done 

let valueinnumber= Number(score)

console.log(typeof valueinnumber)

console.log(valueinnumber)   // in js "33abc" will convert in number it will show data type in number but if we want to access the number it will give NAN i.e not a number in output


/* note:- for conversion

if score ="33" => 33
"33abc" => NAN

true=> 1;
false => 0;

*/

let isloggedin= 1  

let booleanisloogedin =  Boolean(isloggedin)
console.log(booleanisloogedin)

// note :-

// 1 => true;
// 0 =>false;
// emptystring =>false;
// "ankit" =>true
