// node 01_basics/06_strings.js

// const name = "ankit"
// const repocount = 50

// console.log(name + repocount);  // outdated now a days 

// // modern way to concatnate a strings

// console.log(`hello my name is ${name} and my repo is count ${repocount}`);

// another syntax to declare a string

const gamename = new String('pubg-bgmi')
console.log(gamename[0])
console.log(gamename.length)        // these are methods will know while moving further
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('u'))

// for detail read document from link :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const newstring = gamename.substring(0,4)
console.log(newstring)

// console.log(gamename.substring(0,4)) or we can also write this way

const anotherstr = gamename.slice(-8,4)
console.log(anotherstr)

const newstring1="  ankit   "
console.log(newstring1)
console.log(newstring1.trim());   // will trim space (go to mdn documentation for detail explanation)

const url = "https://github.com/vatsankit123/js-hindi/blob/main/01_basics/06_strings.js"

console.log(url.replace('01','-'))  // this will replace 01 to - in the url

// hum string method se kuch question bhi puch sakte hain jaise.

console.log(url.includes('vatsankit123'))  // return true if the string is available in url else return false

