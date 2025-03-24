// node 04_control_flow/one.js

// CONTROL FLOW or LOGIC FLOW

// in this we will learn how js code should run based like not all the code need to be run at same time so how can we control this we are going to learn in this lesson

// if condition

/*

if(true){                      // the internal code will be exicuted only if the condition is true
console.log("shaan")
}                             // condition true hoga tabhi execute hoga

if(false){                   // the code inside this block will not exicute
console.log("ankit")
}



// multiple comparision operator

if(2 == "2"){                 // this code will execute as double equal dont care for data type
    console.log("executed")
}

if( 2 === "2"){              // triple equal to checks whether the type of both the values are same or not here one is integer and another is string so this part of code will not executed
    console.log("ankit")     // isko strict equal bhi bolte hai
}


if(2 != 3){
    console.log("vatsa")       
}


if(2 !==3 ){
    console.log("jai sri ram")       // gpt
}

*/


const temperature = 41

if(temperature<50){
    console.log("less than 50")
}else{
console.log("temperatue is greater than 50")
}



const score = 200

if(score>100){
    const power = "fly"
    console.log(`user power ${power}`);
}


// shortehend notation

const balance = 1000

// if(balance>500) console.log("test"),
// console.log("test2");

// checking multiple condition

if(balance<500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}else if(balance<950){
    console.log("less than 950")
}else{
    console.log("less than 1200")
}

// real life uses of condition

const userloggedin= true
const debitcard =true
const loggedinfromgoogle=false
const loggedinfromemail = true

if(userloggedin && debitcard  && 2==2 ){           // this 2==2 means both the condition is true if here we write 2==3 than in this case code will not exicute but it is not necessary to write
    console.log("allow to buy course")
}


if(loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in")
}

