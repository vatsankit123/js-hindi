// node 03_basics/02_scope.js

let a=300 // this is global scope

if(true){
    let a=10    // if statement ke under jo bhi hai vo hai block scope or bahr hai global scope let or const outside the block scope not defined hoga lekin var value return kar dega jo problamatic hai
    const b=20
    var c=30

    console.log("inner:",a)   // block scope
}



console.log(a);          
//cconsole.log(b);
//console.log(c); // we will not use var because it is accesible outside the global scope which may couse bug in js programming

/*
the output of the above code will be 
inner: 10
300
 the inner will show block scope and 300 is global scope
 */

 // function insdie function js

 /*

 function one(){
    const username="ankit"

    function two(){
        const website ="youtube"
        console.log(username);      // we can access the main function that is one here inside any sub function
    }
    // console.log(website);   // will give error because we are trying to access it outside its scope
    two()
 }

 one()


 if(true){
    const username="ankit"
    if(username=="ankit"){
        const website="youtube"
        console.log(username + website)
    }
    //console.log(website); // this can be accessed because it is outside the the if block scope
    console.log(username)
 }
 // console.log(username);    // this also cant be accessed because this is also outside the block scope

*/

console.log(addone(5))  // we can do this before function initialization and will not cause any error in this way of declaring the funciton

function addone(num){
    return  num+1
}



// but in this way this way of declaring function if we try to access the before function initialization this will casue error run to see the dirrenece

// declaring in diffrent way :- it may cause some error


console.log(addtwo(5))
const addtwo=function(num){
    return num+2
}

