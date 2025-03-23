// node 03_basics/01_functions.js

// how to write a function
/*

function saymyname(){
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
}

saymyname()      // this is way how we run or execute function

// simple function to add two numbers

// jab ham function banate hain to jo bhi naam rakhte hain jaise yaha number1 aur number2 hai isko bolte hain parameters


function addtwonumbers(number1 , number2){      
    console.log(number1+number2)

}

addtwonumbers()  // if we dont pass any argument to it , it will simply return NaN(NOT A NUMBER)

addtwonumbers(3,4)   // jo calling ke time value pass karte hain isko bolte hain arguments


// another method to write function


function sumoftwonumber(number1,number2){
    //let result = number1+number2
    //return result

    return number1+number2  // we write this way as well

    console.log("ankit")  // result ke baad console log print nahi hota hai
}

const result=sumoftwonumber(3,5)

console.log("result", result)

*/
/*

function loginusermessage(username){
    if(username==undefined){
        console.log("please enter a username");
        return                                     // after return keyword no function or line of code will execute
    }
    return `${username} just loggged in`
}

console.log(loginusermessage())  // it will request please enter a username becasue we are not passing any arguement
console.log(loginusermessage("ankit"))

*/


// a situation when we deal multiple parameters just like in shopping kart we dont know how many items to be added by the customers

function calculatecartprice(...num1){   // best way to deal this situation is rest operator it has similar notation like spread operator but depend on the use case
    return num1
}

// console.log(calculatecartprice(200,400,500,2000,1000))      // the rest operator will bind all the number in array later on we can perform loop operation to get sum of all


// passing object to function

const user={
    username:"ankit",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleobject(user)

// or we not need to define the object seperately we can also define it as

handleobject({
    username:"sam",
    price: 999

})


// to pass array in function

const myarr=[200,400,500,600]

function returnsecondvalu(getarr){
    return getarr[1]
}

console.log(returnsecondvalu(myarr))

// or we can do in this way all well

console.log(returnsecondvalu([200,400,500,600]))