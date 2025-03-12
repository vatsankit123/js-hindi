// node 01_basics/04_comparision.js

// console.log(2>1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2>1)
// console.log(2!=1)

// comparing diffrent data type heres the problem arises

//  console.log("2">1);
//  console.log("02">1);

// note :- we should avoid this types of conversions it may create confusion in javascript

console.log(null>0)
console.log(null==0)
console.log(null>=0)  // output will be true in this case

console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined>0)
console.log(undefined<0)


// ===  strict check

console.log( "2"===2)