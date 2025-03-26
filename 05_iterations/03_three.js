// node 05_iterations/03_three.js

// for of

/*

const arr = [1,2,3,4,5]

for(const num of arr){
console.log(num);
}


 const greetings = "HELLO WORLD!"

 for(const greet of greetings){
    console.log(`each char is ${greet}`)
 }

 */

 // Maps in javascript

 const map = new Map()
 map.set('IN' , 'India')
 map.set('USA', ' united states of america')
 map.set('FR','France')

 // console.log(map);

 // iterating in map

 for(const [key,value] of map){
   console.log(key, ':-',value);
 }

 // as we know map and object store in key value pair but still in object iteration is diffrent from map 

 const myobject = {
   'game1' : 'GTA',
   'game2' : 'BGMI'
 }

 for(const [key , value] of myobject){     // this will through error that myobject is not iterable
   console.log(key , ':-',value);
 }