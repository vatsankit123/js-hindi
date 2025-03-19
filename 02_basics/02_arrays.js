// node 02_basics/02_arrays.js

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

/*
marvel_heros.push(dc_heros)

console.log(marvel_heros);  // array takes any type of datatype in js in this case it will print an array inside array so if we want to acces data of the second array from the merged arrray we have to do like this

console.log(marvel_heros[3][1])  // this will give output as flash

console.log(marvel_heros[3])    // this will print complete set of dc_heros
*/

// concat
/*
const all_heros=marvel_heros.concat(dc_heros)   // this is the better way one more way is explain below
console.log(all_heros)

// spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]  //The three dots (...) represent the spread operator in JavaScript.

console.log(all_new_heros)
*/


// multiple array inside a single array condition

/*

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const anothernewarr= another_Array.flat(Infinity)  // this flat operation will give a single array with all the nested array element.
console.log(anothernewarr)                         // here in beacket infinity is written we pass infinity and the javascript automatically perform action till the depth it needed


console.log(Array.isArray("ankit"))  // checking whether the given data is arrray it will return false

console.log(Array.from("ankit"))  // changing to arrray

console.log(Array.from({name: "ankit"}))  //
*/

// explanation to the above
                            
/*
Array.from() is used to create an array from an iterable or an array-like object. However, in this case:

{name: "ankit"} is a plain JavaScript object, not an iterable.so it will return an empty array
*/

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))  // will create array of all scores

