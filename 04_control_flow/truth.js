// node 04_control_flow/truth.js

const useremail = "ankit@gmail.com"

if(useremail){
    console.log("got user email");
}else{
    console.log("dont have user email")
}

// if string is empty

const useremail2 = ""

if(useremail2){                               // output: dont have user email
    console.log("got user email");
}else{
    console.log("dont have user email")
}

// if array is there

const useremail3 =[]           

if(useremail3){
    console.log("got user email");            // output: got user email 
}else{
    console.log("dont have user email")
}


/*

falsy values

false, 0 , -0 , BigInt 0n, " ", null , undefinedc, NaN

truthy values

"0" : string ke under 0 truhty value hai , 'false' , " ", [] , {} , function(){}

*/

// to check whether array and object are empty

const useremail4 = []

if(useremail4.length==0){
    console.log("array is empty")
}

// to check object is empty or not

const emptyobject = {}

if(Object.keys(emptyobject.length==0)){
    console.log("object is empty");
}


// nullish coalescing operator (??) : null undefined

let val1;
//val1= 5 ?? 10
//val1= null ?? 10   // ye coalesing operator jo null value aaya hai uska safety check karta hai
//val1=undefined ?? 15
val1== null ?? 10 ?? 15   //check for null or undefined

console.log(val1)


// ternary opeator(dont confuse between coalescing operator(??) and ternary operator(?))

const iceteaprice = 100
iceteaprice <= 80 ? console.log("price is less than 80") : console.log("price is more than 80")