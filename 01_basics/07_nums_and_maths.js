// // node 01_basics/07_nums_and_maths.js

// const score =400
// console.log(score)
// const balance = new Number(100)
// console.log(balance);    // this will return number:400

// // methods in string

// console.log(balance.toString())
// console.log(typeof balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // will return 4 precise digit

// const hundreds = 100000;
// console.log(hundreds.toLocaleString())  // this string function will add comma to the number

// // the above method will add comma as per internation or american standered so to change it in form of indian standard we need to do one more things lets see

// console.log(hundreds.toLocaleString('en-IN')); // will add comma as per indian standard

// +++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++


// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))  // ceil value will round off to the highest intiger like 4.2 will become 5
// console.log(Math.floor(4.2)) // floor value round up with the ground value like 4.2 will round off to 4
// console.log(Math.min(4,2,3,7,5))  // return min value ;
// console.log(Math.max(4,9,2,3,8,7)) // return max value;

// math.random 

console.log(Math.random());
console.log(Math.random()*10);  // but this value can be still lesser than 1 let say in any case math.random value comes out to be 0.00125 than in this case multiplied by 10 also gives the value lesser than one

// to make sure the value always greater than 1

console.log((Math.random()*10)+1)

// to round off the value the above method is rapped up by floor method also

console.log(Math.floor(Math.random()*10)+1)

// for example we want a random value in between 1 and 6 like in dice game how can i do this in javascript

const min = 1;
const max =6;

console.log(Math.floor(Math.random()*(max-min+1))+min)

// or to increase the code redability the above line of code can be written as 

const formula= Math.floor(Math.random()*(max-min+1))+min
console.log(formula)