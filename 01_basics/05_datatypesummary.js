// node 01_basics/05_datatypesummary.js

// primitve datatypes

// 7 types : string,number,boolean,null,undefined,symbol(for making unique value), BigInt

// javascript is a dynamically typed language it mean it is not needed to define the data type at the time of writing the code
// for example

//let x=10; it is number
// let x= "ankit" ; it is a string
//let x= true ; it is bool

const score=100
const scoreval=100.3
const isloggedin= false
const outsidetemp= null

const id=Symbol("123")
const anotherid=Symbol("123")

console.log(id)         // output = symbol(123)
console.log(anotherid)  // // output = symbol(123)

// we can see that the output of both is same  
// but when we check whether it id and the anotherid is same it will return false because symbol always make a value unique

console.log(id==anotherid)

const badanumber = 445545456545435n  // write n at the end it will become bigint

// reference (non primitive)

// array , objects , functions

// *** strign ***

const heros = ["koi nahi","sab","koi ek"];
let myobj={
    name: "ankit",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof badanumber)  // this will give outout bigint if n is there and give number if n is not there

console.log(typeof heros) // object
  
console.log(typeof id)  // symbol

console.log(typeof myfunction) // function


// for detail go to this link 
// https://262.ecma-international.org/5.1/#sec-11.4.3