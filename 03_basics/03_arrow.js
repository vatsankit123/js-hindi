// node 03_basics/03_arrow.js

const user ={
    username:"ankit",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this)   // this will return an empty object but in browser it will return an window object


// what happen when we use this inside a function

// function chai(){
//     let username="ankit"
//     console.log(this.username)   // this will give undefined we cant access using this insdie a fucntion
// }

// chai()



// const chai=function(){
//     let username="ankit"
//     console.log(this.username)  // no matter how you define a function it will always give undefined if we try to acess the function object using "this" keyword
// }

// chai()



// ARROW FUNCTION

// const chai=  () => {
//  let username="ankit"
//  console.log(this.username)
// }

// chai()


const addtwo=(num1,num2) => {
    return num1+num2
}

console.log(addtwo(3,4))


// implicit return arrow function without using return keyword 

const addtwo1= (num1,num2) => num1+num2    // we can write in this way as well


console.log(addtwo1(4,8))


// how to return object using implicit return function

const addtwo2=(num1,num2)=> ({username:"ankit"})

console.log(addtwo2(3,4))

// using arrow function in a loop

// const myarr = [2,5,3,7,8]

// myarr.forEach(() => ())      // will discuss in loop video